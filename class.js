const products= [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'del', price: 55000},
    {id: 3, name: 'hp', price: 85000},
    {id: 4, name: 'mac', price: 165000}
];


// declare class
/* class Products{
    country = 'bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }

}

const lenovo = new Products('le le lenovo');
console.log(lenovo);
lenovo.speak('oba kita kow'); */



// another example

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching Math');
    }
}

const asad = new Teacher('Asad sir', 'english');
console.log(asad);
const momin = new Teacher('Momin sir', 'Math');
console.log(momin);
