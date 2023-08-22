// 'use strict';

let arr = [4, 5, 6, 7, 8];
let oldWay = [1, 2, 3, arr[0], arr[1], arr[2], arr[3], arr[4]];
console.log('OLD WAY BY ASSIGNING INDEX : ' + oldWay);

// USING SPREAD OPERATOR
const newWay = [1, 2, 3, ...arr];
console.log('NEW WAY BY USING SPREAD (...) : ' + newWay);

const spreadOperator = [1, 2, 3, ...[4, 5, 6, 7, 8, 9, 10]];
console.log(spreadOperator);

// OBJECT ARRAY

const order = {
  person: ['Ibrahim', 'Masud', 'Zanin', 'Dihan', 'Robin'],
  mainFood: ['pizza', 'burger', 'sandwitch'],
  pastaMake: function (item1, item2, item3) {
    if (item1 == undefined && item2 == undefined && item3 == undefined) {
      console.log('Pasta Not Ready yet');
    } else {
      console.log(
        `To make Pasta Please mixed ${item1} with ${item2} and ${item3}`
      );
    }
  },
};

const foods = [...order.mainFood, 'Milkshake', 'Taco', 'Hot dog'];
console.log(foods);

// Join two arrays

const personFoods = [...order.person, ...foods, 'Hamburger', 'Bacon'];
console.log(personFoods);

// Iterables : Arrays, Strings, Maps,Sets NOT Object
let universityName = 'Eastern University';
let names = [...universityName];
console.log(names);

// Template Literals Result

let studentName = 'Ibrahim';
console.log(`Md ${[...studentName]} Khalil`);
// console.log(`Md ${...studentName} Khalil`); // This will encounter error

// Multiple Parameter in function using spread operator
/*let items = [
  prompt('Enter first ingredents:'),
  prompt('Enter Second ingredents:'),
  prompt('Enter Third ingredents:'),
];
order.pastaMake(...items);
*/

/*
SPREAD OPERATORS FOR OBJECT : No, the spread operator (...) does not support spreading objects directly. However, it can be used to create shallow copies of objects or to merge objects together.
*/

// Objects Spread Operator

let instituition = {
  it1: {
    name: 'BITM',
    address: 'Firmgate',
    employee: '200',
  },
  it2: {
    name: 'BASIS',
    address: 'Firmgate',
    employee: '2000',
  },
  it3: {
    name: 'bitBards',
    address: 'Firmgate',
    employee: '150',
  },
};

// console.log(instituition);

let country = { ...instituition, ...instituition.it1 };
// console.log(country);

// Mergin or adding Shallow copies of Objects

let obj1 = { Name: 'Ibrahim' };
let obj2 = { Age: 24 };
let obj3 = { Gender: 'Male' };

let mergeObjects = { ...obj1, ...obj2, ...obj3 };
console.log(mergeObjects);
