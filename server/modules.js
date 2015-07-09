module.export=function(socket,db,io){
  return{
    sayhello : function(){
      socket.emit('reply');
    }
  }
}
