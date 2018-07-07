let expect = require('expect');
const moment = require('moment');

let {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', ()=>{
	it('should generate correct message object', ()=>{
		//store res in variable
		let response = generateMessage('Joel', 'Hey whats up');
		//assert from matches value passed in
		expect(response.from).toBe('Joel');
		//assert text matches up
		expect(response.text).toBe('Hey whats up');
		//assert createdAt value is valid
		expect(moment(response.createdAt,'HH:mm:ss').isValid()).toBe(true);
	})
})

describe('generateLocationMessage', ()=>{
	it('should generate correct location object', ()=>{
		//store res in variable
		let from = 'Joel';
		let lat = 1;
		let long = 2;
		let coords = generateLocationMessage(from, lat, long);
		
		//assert from matches value passed in
		expect(coords).toInclude({
			from,
			url: 'https://www.google.com/maps?q=1,2'
		});
		//assert createdAt value is valid
		expect(moment(coords.createdAt,'HH:mm:ss').isValid()).toBe(true);
	})
})