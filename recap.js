/* 
1. var , let , const 
2. default parameter
3. template string
4. Arrow function
5. destructuring and spread operator
6. Object.keys, Object.values, Object.entries.
7. (for -- of) loop use in array and string.
8. (for -- in) loop use in object.
*/

/* ---let and const ---ey 2 take bole block scope 
let--- reassign korte parbo
const-- reassign korte parbo na---------*/


// template string example
const a = 56;
const numbers = [56, 7, 8];
const person = {
    name: 'shakib khan'
}
const message = `Hi, ${person.name} has a: ${a} access to numbers 2 index ${numbers[2]}`;
console.log(message);