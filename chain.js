// data access

// access address
const data = [{id: 1, name: 'abul', address: 'kochukhet'}];
console.log(data[0].address);


// another one 
// second product price
const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 1, name: 'macBook', price: 165000}
    ]
}
console.log(products.data[1].price);



// another one
const user = {
    name: 'shoriful raj',
    address: {
        street: {
            first: '54/2 abul khayer',
            second: 'poibar goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

console.log(user.address.street.third);


/* --optional chaining--- */
/* --object er value or data access korte giye jodi na pay tahole error diye dey ---tay error jeno na dey ay jonno amra use kori optional chaining(?) question mark sign --eta use korle value access korte giye na pele error dibe na undefine dibe */


const user1 = {
    id: 500,
    name: 'pori bibir majar',
    address: {
        city: 'chitagong',
        country: 'bangladesh'
    }
}
// console.log(user1.address.street.third);// ekhane error dekhay 
console.log(user1.address.street?.third);  // but ekhane optional chaining use korar karone error khabe na but value na pawar karone undefine dekhabe.