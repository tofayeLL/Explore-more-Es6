/* ---practice problem ---map()---*/
// return even number array
// const numbers = [1, 3, 5, 7, 9];
// const evenArray= (numbers) => {
//     const array = [];
//     for(const num of numbers){
//         const even = num + 1;
//         array.push(even);

//     }
//     return array;

// }

// const evenNumber = evenArray(numbers);
// console.log(evenNumber);

// same problem by use map()
const numbers = [1, 3, 5, 7, 9];
const evenArray = numbers.map(n => n + 1);
console.log(evenArray);



/* ------------------------------------------- */
/* ----practice problem -- by use filter() and find()-- */
// problem is divisible by 10
// by use filter()
const array = [33, 50, 79, 78, 90, 101, 30];
const divisible = array.filter( n => n % 10 === 0);
console.log(divisible);

// by use find()
const divisible1 = array.find( n => n % 10 === 0 );
console.log(divisible1);

// by use map()
const divisible2 = array.map( n => n % 10 === 0 );
console.log(divisible2);