let socket = io();

function scrollToBottom () {
	// Selectors
	let messages = $('#messages');
	let newMessage = messages.children('li:last-child')
	// Heights
	let clientHeight = messages.prop('clientHeight');
	let scrollTop = messages.prop('scrollTop');
	let scrollHeight = messages.prop('scrollHeight');
	let newMessageHeight = newMessage.innerHeight();
	let lastMessageHeight = newMessage.prev().innerHeight();

	if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight){
		messages.scrollTop(scrollHeight);
	}
}

socket.on('connect', function (){
	console.log('Connected to server');
});

socket.on('newMessage', function (message) {
	let formattedTime = moment(message.createdAt).format('h:mm a')
	let template = $('#message-template').html();
	let html = Mustache.render(template, {
		text: message.text,
		from: message.from,
		createdAt: formattedTime
	});

	$('#messages').append(html);
	scrollToBottom();

	
	// let li = $('<li></li>');
	// li.text(`(${formattedTime}) ${message.from}: ${message.text}`);

	// $('#messages').append(li);
})

socket.on('disconnect', function (reason){
	console.log(reason, ': Disconnected from server.')
});

socket.on('newLocationMessage', function(message) {
	let formattedTime = moment(message.createdAt).format('h:mm a')

	let template = $('#location-message-template').html();
	let html = Mustache.render(template, {
		from: message.from,
		createdAt: formattedTime,
		url: message.url
	})

	$('#messages').append(html);
	scrollToBottom();
	// let li = $('<li></li>');
	// let a = $('<a target="_blank">My current location</a>');

	// li.text(`(${formattedTime}) ${message.from}: `);
	// a.attr('href', message.url);
	// li.append(a);
	// $('#messages').append(li);
})



$('#message-form').on('submit', function (e){
	e.preventDefault();

	let messageTextbox = $('[name=message]');

	socket.emit('createMessage', {
		from: 'User',
		text: messageTextbox.val()
	}, function(){
		messageTextbox.val('');
	})
})

let locationButton = $('#send-location');
locationButton.on('click', function (e){
	if(!navigator.geolocation) {
		return alert('Geolocation not supported by your browser.');
	}

	locationButton.attr('disabled', 'disabled').text('Sending location...');

	navigator.geolocation.getCurrentPosition(function(position){
		locationButton.removeAttr('disabled').text('Send location');;
		socket.emit('createLocationMessage', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		});
	}, function(){
		locationButton.removeAttr('disabled').text('Send location');
		alert('Unable to fetch location.');
	});
});

