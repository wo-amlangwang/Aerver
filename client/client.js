var socket = require('socket.io-client')('http://localhost:8081');
socket.on('connect',function(){
  console.log('connect');
  //socket.emit('hello');
  socket.emit('signin',{'username' : 'langwang','password' : '1234qwer'});
  socket.on('missusername',function(){
    console.log('need username');
  });
  socket.on('misspw',function(){
    console.log('need pw');
  });
  socket.on('namebeenused',function(){
    console.log('change a username');
  })

});
