module.exports=function(socket,db,io){

  var modules = require('./modules.js')(socket,db,io);
  socket.on('hello',modules.sayhello);

}
