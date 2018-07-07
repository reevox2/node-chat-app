const moment = require('moment');


// let date = moment();
// date.add(100, 'year').subtract(9, 'months')
// console.log(date.format('MMM Do, YYYY'));

// //10:35 am
// console.log()

let someTimestamp = moment().valueOf()

console.log(someTimestamp);

let createdAt = 1234;
let date = moment(createdAt);
let time = date.format('h:mm a');

console.log(time);