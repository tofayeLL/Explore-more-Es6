
/* --filter-- selects element based on condition and return an array with the elements that fulfilled the condition-- */

const numbers = [1, 2, 5, 7, 9, 3];
const players = [67, 62, 72, 79, 69, 56, 60, 55, 53];
// const selected = players.filter(p => p > 60);
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 50);

const selected = players.filter(p => p % 2 === 0);
console.log(selected);




// another ex
const friends = ['ashik', 'tomi', 'jerry', 'romi', 'gom'];
const oddFriend = friends.filter(f => f.length % 2 === 1);
console.log( oddFriend);