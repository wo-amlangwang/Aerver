var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var client = require('mongodb').MongoClient;
//var config = require ('./config/config.json');
var url="mongodb://localhost:8080";
var port="8900";



client.connect(url,function(err,db){
  if(err)
    console.log(err);
  http.listen(port);

  io.on('connection',function(socket){
    require('./event.js')(socket,db,io);
  })


});
