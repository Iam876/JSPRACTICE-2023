'use strict';
/** call and apply
 *  Both the call() and apply() methods in JavaScript are used to invoke functions with a specific value for this and a set of arguments provided as an array. They're often used when you want to borrow methods from one object to use on another, or when you want to explicitly set the context (this) for a function call.
 * 
 * ###### BIND METHOD ########
 * as like call method,Bind allows to manually set this keyword for any function call. But Bind method doesn't immediately call the function. Instead it returns a new function where this keyword is bound.
 * 
 * the bind() method in JavaScript, which is indeed a powerful and convenient way to manipulate the context (this value) of a function.
 */


let dhaka = {
    airline: 'Dhaka Airplane',
    flightCode: 'DH',
    bookings: [],
    book(flightNumber, name) {
        console.log(`${name} booked a seat on ${this.airline} flight : ${this.flightCode}${flightNumber}`);
        this.bookings.push({
            flight: `${this.flightCode}${flightNumber}`,
            name: `${name}`
        });
    }
}

dhaka.book(245, 'Md Ibrahim Khalil');
dhaka.book(250, 'Abdullah Al Masud');
dhaka.book(255, 'Zanin Hossain');
console.log(dhaka);

let chattagram = {
    airline: 'Chattagram Airplane',
    flightCode: 'CH',
    bookings: []
}

const book = dhaka.book;

// Call Method
book.call(chattagram, 654, "Sanwar Hossain");

let rangpur = {
    airline: 'Rangpur Airplane',
    flightCode: 'RP',
    bookings: []
}

book.call(rangpur, 645, "Tamjid Hossain");

console.log(rangpur);

// Apply Method => This is not a good way to use. Best practice is using bind or call method.
let sylhet = {
    airline: 'Sylhet Airplane',
    flightCode: 'SY',
    bookings: []
}

let data = [458, "Sajib Hossain"];
book.apply(sylhet, data);

let data2 = [854, "Ashiq Mahmud"];
book.call(sylhet, ...data2);

console.log(sylhet);



// ############ BIND ##############

console.log("############ BIND METHOD START ###############");
let usa = {
    airline: 'USA AIRLINE',
    flightCode: 'US',
    bookings: []
}

let plane1 = dhaka.book.bind(usa);
plane1(325, "Antor Ahmed");
plane1(320, "Mahi Ahmed");
plane1(330, "Ishmum Ahmed");
console.log(usa);

let uk = {
    airline: 'UK AIRLINE',
    flightCode: 'UK',
    bookings: []
}
let plane2 = dhaka.book.bind(uk);
plane2(451, "Rifat Ahmed");
console.log(uk);

console.log("Bind exercise 2");

const Tax = function (Amount) {
    console.log(`
    Tax percentage is ${this.taxPercentage}%
    Total Amount is   ${Amount}
    Payable tax is    ${(this.taxPercentage / 100) * Amount}
    `);
}

let taxData = { taxPercentage: 25 };
let client1 = Tax.bind(taxData);
client1(458000);

console.log("Bind exercise 3");
let sum = function (x, ...z) {
    sum = x;
    for (const y of z) {
        sum += y;
    }
    console.log(sum);
}

let add = sum.bind(null, 40);
add(10, 20, 30, 40, 50);





