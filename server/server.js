const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const moment = require('moment');	

const publicPath = path.join(__dirname, "/../public")
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
	console.log('new user connected');

	socket.emit('newMessage', {
		from: 'Admin',
		text: 'Welcome to the chat app.',
		createdAt: moment().format('HH:mm:ss')
	})

	socket.broadcast.emit('newMessage', {
		from: 'Admin',
		text: 'New user has joined.',
		createdAt: moment().format('HH:mm:ss')
	})

	socket.on('createMessage', newMessage => {
		io.emit('newMessage', {
			from: newMessage.from,
			text: newMessage.text,
			createdAt: moment().format('HH:mm:ss')
		})
	});

	socket.on('disconnect', (reason)=>{
		console.log(`User Disconnected because of ${reason}`)
	});
});

server.listen(port, ()=>{
	console.log(`Spun up a server on ${port}`)
})