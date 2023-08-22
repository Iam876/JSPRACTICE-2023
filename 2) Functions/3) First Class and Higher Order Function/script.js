/* ########## FIRST-CLASS FUNCTION ########### 
* JAVASCRIPT treats function as first-class citizens
* This means functions are simply values
* Function are just another "type" of object

* ########## HIGHER ORDER FUNCTION ########### 
* A function that receives another function as an argument,that returns a new function,or both
* This is only possible because of first-class function
*/

console.log("########## FIRST-CLASS FUNCTION ########### ");
// Store function in variables or properties
const add = (a, b) => a + b;
const counter = {
    value: 25,
    increment: function () { this.value++; }
}

// Pass functions as arguments to other functions
const greet = () => console.log("Hello Ibrahim");
btnClose.addEventListener('click', greet);

// Return function from function also call methods on functions
const country = {
    c1: "Bangladesh",
    c2: "USA",
    c3: "UK",
}
counter.increment.bind(country);


console.log("########## HIGHER ORDER FUNCTION ########### ");
// Function that recives another function
const greetMe = () => console.log("Hello Ibrahim");
btnClose.addEventListener('click', greetMe);

// Function that returns new function
function count() {
    let counter = 0;
    return function () {
        counter++;
    }
}
