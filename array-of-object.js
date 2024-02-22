const products= [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'del', price: 55000},
    {id: 3, name: 'hp', price: 85000},
    {id: 4, name: 'mac', price: 165000}
]

// use map
const name = products.map(p => p.name);
// console.log(name);
const price = products.map(products => products.price);
// console.log(price);


// use forEach
// products.forEach(products => console.log(products.id));

// use filter
const expensive = products.filter(products => products.price > 70000)
// console.log(expensive);

// use find
const lowest = products.find(products => products.price < 70000);
// console.log(lowest);

// use reduce

const totalSum = products.reduce((accum, current) => accum + current.price, 0);
console.log(totalSum);