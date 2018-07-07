let expect = require('expect');
const moment = require('moment');

let {generateMessage} = require('./message.js');

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