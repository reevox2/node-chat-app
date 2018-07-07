const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const moment = require('moment');	

let {generateMessage} = require('./utils/message.js');

const publicPath = path.join(__dirname, "/../public")
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
	console.log('new user connected');

	socket.emit('newMessage', generateMessage('Admin','Welcome to the chat app.'));

	socket.broadcast.emit('newMessage', generateMessage('Admin','New user has joined.'));

	socket.on('createMessage', (newMessage, callback) => {
		io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
		callback('This is from the server');
	});

	socket.on('disconnect', (reason)=>{
		console.log(`User Disconnected because of ${reason}`)
	});
});

server.listen(port, ()=>{
	console.log(`Spun up a server on ${port}`)
})