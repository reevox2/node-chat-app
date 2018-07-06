let socket = io();

socket.on('connect', function (){
	console.log('Connected to server');

	socket.emit('createMessage', {
		from: 'Jimmy Johns',
		text: `Hey guys, I just joined.`
	});

});

socket.on('newMessage', function (message) {
	console.log(`(${message.createdAt}) ${message.from}: ${message.text}`);
})

socket.on('disconnect', function (reason){
	console.log(reason, ': Disconnected from server.')
});