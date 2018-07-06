let socket = io();

socket.on('connect', function (){
	console.log('Connected to server');

	socket.emit('createMessage', {
		from: 'Jimmy Johns',
		message: `Hey. This is Jimmy Johns'. Your sandwich is downstairs bud.`
	});

});

socket.on('newMessage', function (message) {
	console.log(`${message.createdAt} ${message.from}: ${message.message}`);
})

socket.on('disconnect', function (){
	console.log('Disconnected from server.')
});