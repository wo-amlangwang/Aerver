var jwt = require('jsonwebtoken');
var fs = require('fs');
var pwconfig = require('../config/pwconfig.json');
module.exports=function(socket,db,io){


  var users = db.collection('users');
  var documents = db.collection('documents');
  var username = 'guest';
  var userinfo = {'username' : 'guest'};
  var key = pwconfig['key'];
  //console.log(key);
  var findByName = function(name,callback){
    users.findOne({'username' : name },function(err,doce){
      userinfo = doce;
    });
    callback();
  }
  return{
    hello : function(){
      console.log('client say hello');
    },
    signin : function(userinfo){
      if(!userinfo.hasOwnProperty('username')){
        socket.emit('missusername');
        if(!userinfo.hasOwnProperty('password')){
          socket.emit('misspw');
        }
      }else{
        users.findOne({'username' : userinfo['username']},function(err,doce){
          if(doce == null){
            users.insert(userinfo,function(err,res){});
          }else{
            socket.emit('namebeenused');
          }
        });
      }/**
      findByName('langwang',function(){
        console.log(userinfo);
      });**/

      //users.remove({},function(err,res){});
    }
  }
}
