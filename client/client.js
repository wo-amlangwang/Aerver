var socket = require('socket.io-client')('http://localhost:8080');
socket.on('connect',function(){
  console.log('connect');
  socket.emit('hello');
});
