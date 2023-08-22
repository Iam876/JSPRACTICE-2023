'use strict';
/**
 * ############## CLOSURES ##############
 * Closure is not a features that we explicitly use most.
 * Closures happened in certain situation,but we simply need to recognize those situation.
 *
 *
 * Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
 * Global and local variables with the same name are different variables. Modifying one, does not modify the other.
 *
 *
 * In simple words, A closure in JavaScript is a function that remembers the variables from the outer scope even after the outer function has finished executing. In simpler terms, a closure "closes over" the variables it needs, allowing them to persist beyond their original context.

Closures are useful for various scenarios, like maintaining private data, creating factories, and implementing callbacks.
 */

/* Here modifying the global variable value
let counter = 0;
function increment() {
    counter += 1;
    console.log(counter);
}
increment();
console.log(`Global counter = ${counter}`);
increment();
console.log(`Global counter = ${counter}`);
increment();
console.log(`Global counter = ${counter}`);
increment();
*/
/* Counter using Closure

let counter = 0;

function increment() {
    let counter = 0;
    counter += 1;
    console.log(counter);
}
increment();
increment();
increment();
increment();
increment();
increment();
console.log(`Global counter = ${counter}`);

*/

// Basic Closures
let outerFunction = function () {
    let outerVar = "I am from outer function";
    return function () {
        console.log(outerVar);
    }
}

let closureFunction = outerFunction();
closureFunction();