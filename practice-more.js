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
/* const divisible1 = array.find( n => n % 10 === 0 );
console.log(divisible1); */

// by use map()
/* const divisible2 = array.map( n => n % 10 === 0 );
console.log(divisible2); */


/* -------------------------------------------------------- */

/* ------practice problem --- by use filter() -- */
// find instructor who is senior from the array of object
const instructors = [
    {name:'nodi', age: '35', position: 'senior'},
    {name:'akhi', age: '27', position: 'junior'},
    {name:'pakhi', age: '31', position: 'senior'},

];

// full object show output
const arr = [];
const senior = instructors.filter(instructor => instructor.position === 'senior');
console.log(senior);

/* //only name will show in the output
const arr = [];
const senior = instructors.filter(instructor => {  
    if(instructor.position === 'senior'){
        arr.push(instructor.name);    
    } 
    
});
console.log(arr); */


// another way to show name output
const result = instructors.filter(instructor => instructor.position === 'senior').map(n => n.name);
// console.log(result);


/* -------------------------------------------------------- */


