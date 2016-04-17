setInterval(function(){
  console.log('test');
}, 1000);

console.log("333");

/*
var redis = require('redis')
var redisClient = redis.createClient();

data = {nickname:"Kalle",data:"Moro"}

var message = JSON.stringify(data)
console.log("message"+message)

redisClient.lpush("messages",message,function(err,response){
	console.log("err:"+err)
	console.log("response:"+response)
})

redisClient.lrange("messages",0,-1,function(err,messages){
	console.log("err:"+err)
	console.log("response:"+messages)
//	messages = messages.reverse();
})

*/