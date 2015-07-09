ph = require('password-hash');

module.exports=function(socket,db,io){


  var users = db.collection('users');
  var documents = db.collection('documents');

  return{
    hello : function(){
      console.log('client say hello');
    }
  }
}
