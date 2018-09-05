const path = require('path');
const express = require('express')
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app);

var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('Connection closed');
  })



});



app.use(express.static(publicPath));


server.listen(port, () => {
  console.log('Server started at port:' + port);
})
