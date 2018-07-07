const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('isRealString', ()=>{
	it('should reject non string values', ()=>{
		expect(isRealString(3)).toBe(false);
	})
	it('should reject string with only spaces', ()=>{
		expect(isRealString('    ')).toBe(false);
	})
	it('should allow strings with non-space characters', ()=>{
		expect(isRealString('    LOTR+++YOLO')).toBe(true);
	})
})


// import isrealstring

//is real string
	//reject non string values
	//should reject string with only spaces
	//should allow strings with non-space characters


