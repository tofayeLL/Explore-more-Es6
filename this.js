
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name} and the sleeping people age is ${this.age}`);
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('kodom Ali', 25);
// kodom.sleep();

const badam = new Person ('kacha badam', 45);
// console.log(badam);
// badam.sleep();
badam.activity();


