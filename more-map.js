
const numbers = [2, 4, 5, 6, 7, 8];

const doubled = numbers.map(x => x * 2);
// console.log(doubled);

const addFive = numbers.map(n => n + 5);
// console.log(addFive);

const half = numbers.map(n => n / 2);
// console.log(half);

const friends = ['ashik', 'tom', 'jerry', 'rom', 'gom'];
const friendNameLength = friends.map( name => name.length);
// console.log(friendNameLength); 

const friendFirstCharecter = friends.map(name => name[0]);
console.log(friendFirstCharecter); 