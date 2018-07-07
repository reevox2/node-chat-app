const moment = require('moment');

let generateMessage = (from, text) => {
	return {
		from,
		text,
		createdAt: moment().format('HH:mm:ss')
	}
}

module.exports = {generateMessage}