const expect = require('expect');
const {Users} = require('./users');





describe('Users', ()=>{
	let users;

	beforeEach(()=>{
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node Course'
		},{
			id: '2',
			name: 'Jenn',
			room: 'React Course'
		},{
			id: '3',
			name: 'Julie',
			room: 'Node Course'
		}]
	})

	it('should add new user', ()=>{
		let users = new Users();
		let user = {id: '123', name: 'Joel', room: 'The Office Fans'}

		let resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	})
	it('should remove a user', ()=>{
		let removedUser = users.removeUser('1');
		expect(removedUser.id).toBe('1');
		expect(users.users.length).toBe(2);

	})
	it('should not remove a user', ()=>{
		let removedUser = users.removeUser('10');
		expect(users.users.length).toBe(3);
		expect(removedUser).toNotExist();
	})
	it('should find user', ()=>{
		let user = users.getUser('2');
		expect(user).toEqual(users.users[1]);
	})
	it('should not find user', ()=>{
		let user = users.getUser('24');
		expect(user).toNotExist();

	})
	it('should return names for node course', ()=>{
		let userlist = users.getUserList('Node Course');
		
		expect(userlist).toEqual(['Mike', 'Julie']);
	})
	it('should return names for react course', ()=>{
		let userlist = users.getUserList('React Course');
		
		expect(userlist).toEqual(['Jenn']);
	})
})