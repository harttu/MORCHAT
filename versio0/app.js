var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
//var jQuery = require('jquery');

var messages =[];
var nicks =["kalle","jallu"];

var storeMessage = function(data)
{
	messages.push(data);
	if(messages.length > 10) {
		messages.shift();
	}
};

io.on('connection', function(client){
	//client.emit("bad_nicks",nicks);
	console.log('Client connected...');
});

io.on('connection',function(client){
	//
	// New message is arriving, print to the console and broadcast it all the clients
	//
	client.on('messages', function(data) {
		var tempMessage = {nickname:data.nickname,data:data.data};
		client.broadcast.emit("messages",tempMessage);
		client.emit("messages",tempMessage);
		console.log(data.data);
		storeMessage(tempMessage);
	});
	//
	// New chatter is joining, send him the previous 10 messages
	//
	client.on('join',function(name){
		// verify if his proposed nick is already taken
		var temp = 0; // === 1, if the users is not fine
		nicks.forEach(function(value){
			console.log(value+"=="+name.trim()+"?");
			if(value == name.trim()) {
				console.log("YES");
				temp = 1;
			}
			else{
				console.log("NO");
			}
		});
		if( temp === 0 ){
			// if not, check him in
			console.log("Nick was fine");
			client.nickname = name;
			messages.forEach(function(message){
				client.emit("messages", message);
			});
		}
		// The chatter had pre-existing nick, so tell to pick a new one
		else{
			console.log("Nick was already taken");
			client.emit("bad_nick",nicks);
			
		}
			
	});

});

app.get('/',function(req,res) {
	res.sendFile(__dirname + '/index.html');
	//res.emit("bad_nicks",nicks);
});



server.listen(8080);
