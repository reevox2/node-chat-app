[{
	id: 'awdawdaf22',
	name: 'Andrew',
	room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
	constructor () {
		this.users = [];
	}
	addUser (id, name, room) {
		let user = {id, name, room};
		this.users.push(user);
		return user;
	}
	removeUser(id) {
		let removedUser;
		this.users = this.users.filter(user =>{
			 if(user.id === id){
			 	removedUser = user;
			 }
			 return user.id !== id;
		});
		return removedUser;
	}
	getUser(id) {
		let user = this.users.filter(user => user.id === id)[0];
		return user;
	}
	getUserList(room) {
		let users = this.users.filter((user)=>user.room === room);
		let names = users.map(user => user.name);

		return names;
	}
}


module.exports = {Users}


// class Person {
// 	constructor (name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getUserDescription(){
// 		return `${this.name} is ${this.age} year(s) old.`
// 	}
// }

// let me = new Person('Joel', 25);

// console.log('this.name', me.name)
// console.log('this.age', me.age)

// let descrip = me.getUserDescription();
// console.log(descrip);