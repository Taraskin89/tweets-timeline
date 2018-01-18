// app-server.js
const express = require('express');
const app = express()
// Set port
app.set('port', process.env.PORT || 7000);
// Static files
app.use(express.static('public'));
const http = require('http').Server(app);
const io = require('socket.io')(http);
const config = require('./config');
// Models
const Message = require('./models/Message');

// Listen for a connection
io.on('connection', socket => {
  // Create message
  socket.on('chat message', params => {
    Message.create(config, params, (message) => {
      io.emit('chat message', message);
    })
  })
})

// Route
app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html')
})

http.listen(app.get('port'), () => {
  console.log('React Chat App listening on ' + app.get('port'))
})