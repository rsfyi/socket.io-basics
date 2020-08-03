const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
  res.end('I am connected');
});

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('new connection made');

  socket.emit('welcome', 'Welcome to bidi connection');

  socket.on('message', (clientData) => {
    console.log('message : ', clientData);
  });
});

server.listen(7600);
