let socket = io();

socket.on('connect', function (){
	console.log('Connected to server');
});

socket.on('newMessage', function (message) {
	let li = $('<li></li>');
	li.text(`(${message.createdAt}) ${message.from}: ${message.text}`);

	$('#messages').append(li);
})

socket.on('disconnect', function (reason){
	console.log(reason, ': Disconnected from server.')
});



$('#message-form').on('submit', function (e){
	e.preventDefault();

	socket.emit('createMessage', {
		from: 'User',
		text: $('[name=message]').val()
	}, function(data){

	})
})


