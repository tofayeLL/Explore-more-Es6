// reduce------ hosse amra normally total sum ber kori jemon onekgula number er sey kaj ta kore.
/* structure--- reduce((previous value, current value), initial value); */

const numbers = [1, 2, 5, 7, 9, 3];
const total = numbers.reduce((p, c) => p + c, 0);
// console.log(total);

// another
const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);
