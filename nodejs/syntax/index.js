// variables

var hello = 'hello js with var'; // variable, document/function scope
let hello2 = 'hello js with let'; // variable, block scope
const hello3 = 'hello js with const'; // constant, block scope

// console.log(hello);
// console.log(hello2);
// console.log(hello3);

// hoisting -  only works with var
hoistVar = 'h';
// console.log(hoistVar);

var hoistVar = 'hoisting with var';



// scopes 

/*
 - window scope: browser
 - document scope: tab/page
 - function scope: function
 - block scope: let, const, if statment, for loop
*/



// functions

function Hello() {
    console.log("Hello")
} // function statement (hoisted, don't do this as often)

// Hello();

let Goodbye = () => {
    console.log("Goodbye")
} // function expression (do this more often)

// Goodbye();

(function () {
    // console.log("I'm back");
})(); // function invocation (do this more often)



// objects

let objectThing = {
    // name = null
} // literal object (this is static, not so great [except for JSON])

function anotherObjectThing() {
    // this.name = null;
} // object constructor (this is based on a particular objects instantiation, good)

let someOtherObjectThing = Object.create({}); // one way binding

let yetAnotherObjetThing = someOtherObjectThing; // two way binding



// closures

function CountingCrows() {
    let counter = 0;

    return function(){ // object
        counter += 1;
        return counter;
    }
}

function WritingCrows() {
    let c = CountingCrows();

    // c += 1;
    c();

    // console.log(c); // 1
    // console.log(counter); // undefined
    console.log(c());
}

// WritingCrows();



// prototypes

function Animal() {
    this.talk = () => {
        console.log("I'm talking");
    }
}

function Mammal() {
    this.walk = () => {
        console.log("I'm a walking mammal");
    }
}

function Dog() {
    this.wag = () => {
        console.log("I'm wagging my tail");
    }
}

// Dog.prototype.walk = () => {
//     console.log("Not mammal walking");
// }

Dog.prototype.mammal = new Mammal();
Dog.prototype = Object.create(new Mammal());


let d = new Dog();

d.wag();
d.walk();
// d.mammal.walk();
// console.log(d);
// console.log(d.constructor);