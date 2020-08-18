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

Hello();

let Goodbye = () => {
    console.log("Goodbye")
} // function expression (do this more often)

Goodbye();

(function () {
    console.log("I'm back");
})(); // function invocation (do this more often)

// objects

let objectThing = {
    name = null
} // literal object (this is static, not so great [except for JSON])

function anotherObjectThing() {
    this.name = null;
} // object constructor (this is based on a particular objects instantiation, good)

let someOtherObjectThing = Object.create({}); // one way binding

let yetAnotherObjetThing = someOtherObjectThing; // two way binding