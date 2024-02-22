
/* const numbers = [4, 5, 2, 8, 10];
const arr = [];
for(const num of numbers){
    const double = num * 2;
    arr.push(double);   
}
console.log(arr); */



/* ---map()---map hosse kono ekta array er modhe loop through kore prottekta element er opor and map er modhe je function ta dewa hoy sey function er kaj ta prottek element er opor kore ekta array er modhe abr element gulo ke rekhe sey array ke return kore */

// simple way example
/* const numbers = [4, 5, 2, 8, 10];
function doubleIt (num){
    const result = num * 2;
    return result;
}

const double = numbers.map(doubleIt);
console.log(double); */


// another way by use arrow function
/* const numbers = [4, 5, 2, 8, 10];
const doubleIt = n => n * 2;

const double = numbers.map(doubleIt);
console.log(double); */



// another way by use arrow function ---ey way ta amra beshi use korbo--
const numbers = [4, 5, 2, 8, 10];
const double = numbers.map(x => x * 2);
console.log(double);
