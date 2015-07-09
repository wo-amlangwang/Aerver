ph = require('password-hash');

module.export=function(socket,db,io){
  var users = db.collection('users');




  return{
    sayhello : function(){
      socket.emit('reply');
    },
    getPostByName : function(name){

    },
    getPostByDate : function(date){

    }
    signin : function(userinfo){
      var userinfo = JSON.parse(userinfo);
      if(! userinfo.hasOwnProperty('username')){
        socket.emit('nameMissing');
      }else if(! userinfo.hasOwnProperty('password')){
        socket.emit('passwordMissing');
      }else{
        var hashedPassword = ph.generate(userinfo[username]+userinfo[password]);
        delete userinfo['password'];
        userinfo.push('hashedpassword' : hashedPassword);
        users.insert(userinfo);
        socket.emit('usercreated');
      }

    }
  }
}
