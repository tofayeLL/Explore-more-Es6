

const person = {
    name: 'kodom ali',
    job: 'badam khay',
    3: 'third',
    'add-dress': 'kochu khet'

}

// dot notation
console.log(person.name);
// bracket notation
console.log(person['job']);
// othoba ekta variable a rekhe setake access korte pari
const job = 'job';
console.log(person[job]);

// bracket notation diye sob kisu access kora jay but dot notation diye sob access kore jay na jemon property name number dewa thakle dot notation diye access kora possible na tokhon bracket notation dorkar...//

console.log(person['3']);
console.log(person['add-dress'])
