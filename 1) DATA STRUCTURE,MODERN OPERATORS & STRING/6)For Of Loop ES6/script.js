'use strict';
const order = {
  person: ['Ibrahim', 'Masud', 'Zanin', 'Dihan', 'Robin'],
  mainFood: ['pizza', 'burger', 'sandwitch'],
  country: ['usa', 'uk', 'bd', 'india', 'it', 'fr'],
};

// using spread operator make all the array inside one array.
let list = [...order.person, ...order.mainFood, ...order.country];

// OldWay for...of loop
for (const items of list) {
  // console.log(items);
}

// If key is necessary then entries() method
for (const items of list.entries()) {
  // console.log(items);
}

// Using the array offset separating two values from the arrays in a good way
for (const items of list.entries()) {
  // console.log(`${items[0] + 1} : ${items[1]}`);
}

// Using modern and destructuring method
for (const [key, value] of list.entries()) {
  console.log(`${key + 1} : ${value}`);
}
