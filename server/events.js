module.exports=function(socket,db,io){

  var modules = require('./modules.js')(socket,db,io);
  socket.on('hello',modules.sayhello());
  socket.on('getPostByName', modules.getPostByName(name));
  socket.on('getPostByDate', modules.getPostByDate(date));
  socket.on('signin',modules.signin(user));
}
