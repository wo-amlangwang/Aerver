module.exports=function(socket,db,io){

  var fun = require('./fun.js')(socket,db,io);
  fun.hello();
  socket.on('hello', function(){
    fun.hello();
  });
  //socket.on('hello',fun.hello());
}
