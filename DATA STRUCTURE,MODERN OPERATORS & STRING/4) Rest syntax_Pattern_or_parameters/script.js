/*
Rest Syntax: It is as like spread operator using 3dot notation.
but the difference is , Spread Operators are used right side of an assignment operator,
where Rest Pattern/Syntax is used on the left side of the Assignment operator.

Also, The spread operator copy an existing array or make an array inside of another array.
    Which is much more faster writing code and efficient.

Where Rest Pattern/Syntax-> It does makes the single vairables into an array.
like packing the multiple or single unpacked data at the same time.
*/

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
    holiday: {
      holiday: 'Friday',
      offday: '1',
    },
    holiday2: {
      holiday2: 'sunday',
      offday: '1',
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

// START USING DESTRUCTURING

// Spread Operator Example :-
const spreadOperator = [1, 2, ...[3, 4, 5, 6]];
console.log('Spread Operator Example : ' + spreadOperator);

// Rest Pattern / Syntax In Destructuring Array:
let [a, b, ...others] = [1, 2, 3, ...[4, 5, 6, 7, 8]];
console.log(a, b, others);

// skipping datas
let [shareholder, , ...otherPerson] = [...resturent.person, ...resturent.foods];
console.log(shareholder, otherPerson);

// Objects

let { Time, car, ...holidays } = resturent.delivery;
console.log(Time, car, holidays);

// END USING DESTRUCTURING
// Rest Syntax / Pattern inside function
resturent.add(1, 2);
resturent.add(1, 2, 3, 4);
resturent.add(1, 2, 3, 4, 5, 6, 7);
resturent.add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
resturent.add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 32);

let numbers = [250, 260, 280, 295];
resturent.add(...numbers);

let foods = ['pizza', 'burger', 'sandwitch', 'coffee', 'drinks'];
resturent.orderPizza('Ibrahim', ...foods);
