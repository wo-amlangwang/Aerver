ph = require('password-hash');




module.exports=function(socket,db,io){


  var users = db.collection('users');
  var documents = db.collection('documents');

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
        
        users.insert([userinfo],function(err,result){
          //console.log('new user added');
          /**users.find({}).toArray(function(err,docs){
            console.log("Found the following records");
            console.dir(docs);
          });**/
        });
      }
    },
  }
}
