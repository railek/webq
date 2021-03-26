const { io } = require('./server');

const { addCounter } = require('./service');

io.on('connection', (socket) => {
  console.log('🟢 CLIENT CONNECTED');

  socket.on('counter.add', (data) => {
    addCounter(data);
  });

  socket.on('disconnect', () => {
    console.log('🔴 CLIENT DISCONNECT');
  });
});
