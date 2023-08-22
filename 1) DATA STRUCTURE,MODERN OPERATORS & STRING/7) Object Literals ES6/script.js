'use strict';

/* // without using es6 features
const resturent = {
  person: ['shareholder', 'owner', 'manager', 'staffs'],
  foods: ['pizza', 'burger', 'sandwitch', 'coffee', 'drinks'],
  instrument: ['chairs', 'tables', 'sofa', 'tv', 'ac', 'wifi'],
  floors: [1, 3, 5, 8, 9, 11],
  delivery: {
    Time: {
      startTime: '10:00 AM',
      endTime: '11:00 PM',
    },
    car: {
      status: 'Driver',
      carName: 'BMW',
    },
  },
  order: function (personIndex, foodIndex) {
    return [this.person[personIndex], this.foods[foodIndex]];
  },
  deliverOrder: function ({ foodIndex, floorIndex, timeIndex, vehicalIndex }) {
    console.log(
      `the food ${this.foods[foodIndex]} will delivered from floor ${this.floors[floorIndex]} and item will start delivered at ${this.delivery.Time[timeIndex]} and the vehical will be ${this.delivery.car[vehicalIndex]}`
    );
  },

  add: function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
  },

  orderPizza: function (person, ...foods) {
    let message = `Thanks, ${person} for Ordering ${foods} from our shop !! We hope it will make you comfortable and our bonding will be much stronger !!!`;
    console.log(message);
  },
};
*/

// With using ES6 Features
/*
 * 1: Shorthand property initializers
 * 2: Method shorthand
 * 3: Computed property names
 * 4: Spread syntax -> "spread" the contents of one object into another object.
 */

const country = ['usa', 'uk', 'it', 'fr', 'br', 'bd', 'in', 'aue'];
// 3: Computed property names | START
const jobNames = ['job1', 'job2', 'job3', 'job4'];
const jobs = {
  [jobNames[0]]: {
    name: 'Web development',
    salary: 2000,
  },
  [jobNames[1]]: {
    name: 'App development',
    salary: 2000,
  },
  [jobNames[2]]: {
    name: 'Game development',
    salary: 2000,
  },
  [jobNames[3]]: {
    name: 'Security',
    salary: 2000,
  },
  ['Job' + (2 + 3)]: {
    name: 'Flutter',
    salary: 2000,
  },
};
// 3: Computed property names | END
const instituition = {
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

const resturent = {
  person: ['shareholder', 'owner', 'manager', 'staffs'],
  foods: ['pizza', 'burger', 'sandwitch', 'coffee', 'drinks'],
  instrument: ['chairs', 'tables', 'sofa', 'tv', 'ac', 'wifi'],
  floors: [1, 3, 5, 8, 9, 11],
  // ES6 1:Shorthand property initializers | START
  country,
  jobs,
  // ES6 1:Shorthand property initializers | END
  delivery: {
    Time: {
      startTime: '10:00 AM',
      endTime: '11:00 PM',
    },
    car: {
      status: 'Driver',
      carName: 'BMW',
    },
  },
  // ES6 2: Method shorthand | START
  order(personIndex, foodIndex) {
    return [this.person[personIndex], this.foods[foodIndex]];
  },
  deliverOrder({ foodIndex, floorIndex, timeIndex, vehicalIndex }) {
    console.log(
      `the food ${this.foods[foodIndex]} will delivered from floor ${this.floors[floorIndex]} and item will start delivered at ${this.delivery.Time[timeIndex]} and the vehical will be ${this.delivery.car[vehicalIndex]}`
    );
  },

  add(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
  },

  orderPizza(person, ...foods) {
    let message = `Thanks, ${person} for Ordering ${foods} from our shop !! We hope it will make you comfortable and our bonding will be much stronger !!!`;
    console.log(message);
  },
  // ES6 2: Method shorthand | END
};
// console.log(resturent);

// 4: Spread syntax | START
const acting = {
  ...country,
  ...instituition,
  ...resturent,
};
console.log(acting);
// 4: Spread syntax | START
