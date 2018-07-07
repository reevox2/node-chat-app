const moment = require('moment');

let generateLocationMessage = (from, latitude, longitude) => {
	return {
		from,
		url: `https://www.google.com/maps?q=${latitude},${longitude}`,
		createdAt: moment().format('HH:mm:ss')
	}
}

let generateMessage = (from, text) => {
	return {
		from,
		text,
		createdAt: moment().format('HH:mm:ss')
	}
}

module.exports = {generateMessage, generateLocationMessage}