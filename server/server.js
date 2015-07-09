var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var client = require('mongodb').MongoClient;
var winston = require('winston');
//var config = require ('./config/config.json');
var url="mongodb://localhost:8080";
var port="8900";



client.connect(url,function(err,db){
  if(err){
    winston.log('err',err);
    process.exit();
  }
  winston.log('info','database connected');
  http.listen(port, function(err){
    if(err){
      winston.log('err',err);
      process.exit();
    }
    winston.log('info', 'server now listen on %d', port);
  });

  io.on('connection',function(socket){
    require('./event.js')(socket,db,io);
  })


});
