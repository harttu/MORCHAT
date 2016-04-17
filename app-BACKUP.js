/*
wunderground API:8ee47d5f92a2cbad
*/

var weather = require('./weather.js');
var brahe = require('./brahe.js')
var morgan = require('morgan');
var request = require("request")
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var redis = require('redis');
var redisClient = redis.createClient();

var messages =[];
var nicks =["kalle","jallu"];

app.use(express.static(__dirname + '/css'));
app.use(morgan('dev'));

var cheerio = require('cheerio');

var storeMessage = function(data)
{
	console.log("Tallennan viestiä:"+data.data+": lähettäjältä:"+data.nickname)
	var message = JSON.stringify(data);
	redisClient.lpush("messages",message,function(err,response){
		redisClient.ltrim("messages",0,9); // keep newest 10 items
	});
};

/*
setInterval(function(){
  console.log('test');
}, 1000);
*/
//
// Generate new nick for a newcomer
//
var makeNewNick = function(){
	return "MB"+String(nicks.length);
};

var makeNickList = function() {
	var templist = []
	var soketit = io.sockets.sockets
	
	for(var j = 0;j < soketit.length; j++)
	{
		templist.push(soketit[j].nickname)
	}
	return templist
}

//
// When someone connects send him a default nick
//
io.on('connection', function(client){
	var temp = makeNewNick();
	console.log("Client connected... Sending him nick"+temp);
	client.emit('setNick',temp,1);								// Tell him his new nick
	nicks.push(temp);											// Add it to the nick list
	client.nickname = temp
	
	nicks = makeNickList()
	/* Send him the messages from the redis-server */
	
	redisClient.lrange("messages",0,-1,function(err,messages){
		messages = messages.reverse();
		messages.forEach(function(message){
			message = JSON.parse(message);
			console.log("Lähetän alkuviestin:"+message.data)
			client.emit("messages", message);
	})
	console.log("MESSAGES sisältää"+messages)
	/* emit them to the client */

	});
	
	client.broadcast.emit('newNickList',nicks)
	client.emit('newNickList',nicks)
});

io.on('connection',function(client){
	//
	// New message is arriving, print it to the console and broadcast it all the clients, then emit to the sender herself. Lastly store the message to the database
	//
	client.on('messages', function(data) {
		var tempMessage = {nickname:data.nickname,data:data.data}; // store the message in temporary variable
		client.broadcast.emit("messages",data)             // broadcast it to other clients
		client.emit("messages",data)                       // send it back
		console.log(data.nickname+">"+data.data)									   // write it to console
		storeMessage(data)
	//	storeMessage(tempMessage);								   // save the message to the database
	});
	
	//
	// New chatter is joining, send him the previous 10 messages
	//
	client.on('join',function(name){
		redisClient.lrange("messages",0,-1,function(err,messages){
			messages = messages.reverse();
		})
		client.nickname = name;
		messages.forEach(function(message){
			message = JSON.parse(message);
			client.emit("messages", message);
		});
		client.broadcast.emit('newNickList',nicks);
		client.emit('newNickList',nicks);
		
	});
		
	//	
	// A client wants to change his nick. 
	//
	client.on('changeNick',function(nick){
		console.log("Nickin vaihto funktio. Nickiin:"+nick);
		var oldNick = client.nickname      						// Store the original nick
		if (nick.length > 8){									// validate the candidate
			console.log('Liian pitkä nick. Maksimipituus on 8')
			client.emit('setNick',nick,0)				// It's too long. Tell that to the client
		}
		else if( nicks.indexOf(nick) > -1)              // Nick is already in use
		{
			console.log('nick jo käytössä')
			client.emit('setNick',nick,2)				// It's too long. Tell that to the client
			
		}														
		else
		{
			nicks.splice(nicks.indexOf(oldNick),1);								// remove the original nick from nicks
			client.emit('setNick',nick,1)				// It's t. Tell that to the client
			nicks.push(nick);
			/*
			console.log("Nicklista sisältää nyt seuraavat")
			for(var i= 0;i < nicks.length;i++)
			{
				console.log(nicks[i])
			}
			*/
			client.nickname = nick;				
			nicks = makeNickList()				
			client.broadcast.emit('newNickList',nicks);
			client.emit('newNickList',nicks);
		}
	});
	
		
//	})
	
	client.on('saa',function(){
		weather.haeData(client,"Helsinki");
	});
	
	client.on('aikataulu',function(nada){
	brahe.haeData(client,6052)
	//6210 <- parainen
	});
	
});

//
// When the client makes the first request send him the index.html from thee root directory
//
app.get('/',function(req,res) {
	res.sendFile(__dirname + '/index.html');
});

setInterval(function(){
	/*
	console.log("These are the users")
	var soketit = io.sockets.sockets
	var turvassa = 0;
	for(var i = 0; i < nicks.length; i++)
	{
		for(var j = 0;j < soketit.length; j++)
		{
			if(nicks.indexOf(soketit[j].nickname) > -1)
			{
				turvassa = soketit[]
			}
		}
		
	{
		console.log(io.sockets.sockets[0].nickname)
	}
	/*
	for(var i  = 0;i < nicks.length; i++)
	{
		
	}
	io.sockets.sockets.map(function(e) {
	    console.log(e.nickname);
		nicks.splice(nicks.indexOf(oldNick),1);
	})
	*/
}, 1000);

server.listen(80);
