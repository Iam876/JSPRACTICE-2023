'use strict';
/**
 * IIFE -> Immediately Invoked Function Expression
 * It's a way to create a function that executes right after it's defined. IIFEs are often used to create a local scope for variables, avoid polluting the global scope, and manage variable access and encapsulation.
 * In easier way,A function which execute only once. But We need it to use most in Async / Await. 
 * Data or variable inside the function works as private,In order,we can say that as encapsulated.
 * For encapsulation or private scope instead of using IIFE,the {} scope operator is best!
 */

(function () {
    console.log("Invoke only one time");
})();

(() => {
    console.log("Invoke second time");
})();