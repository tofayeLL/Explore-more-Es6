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
const evenArray = numbers.map( n => n + 1);
console.log(evenArray);