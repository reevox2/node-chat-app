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

	socket.on('createMessage', newMessage => {
		io.emit('newMessage', {
			from: newMessage.from,
			message: newMessage.message,
			createdAt: moment().format('HH:mm')
		})
	});

	socket.on('disconnect', ()=>{
		console.log('User Disconnected')
	});
});

server.listen(port, ()=>{
	console.log(`Spun up a server on ${port}`)
})