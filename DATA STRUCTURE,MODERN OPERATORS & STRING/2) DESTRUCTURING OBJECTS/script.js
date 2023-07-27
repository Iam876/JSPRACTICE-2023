'using strict';

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
};

/*DESTRUCTURING OBJECTS: Assiging object values into variables by follwong ES6 Destructuring features. */

// console.log(resturent);

// Assigning object values
let { person, foods, instrument, floors, delivery } = resturent;
console.log(person, foods, instrument, floors, delivery);

// Assigining new variable names
console.log('Assigining new variables');

let { floors: roomTypes, delivery: deliveryStatus } = resturent;
console.log(roomTypes, deliveryStatus);

// Default value Assigning
console.log('Default value Assigning');
const carNames = {
  car1: 'BMW',
  car2: ['TOYOTA', 24, 'USA'],
  car3: 'AUDI',
  car4: 'SUZUKI',
  car5: 'HONDA',
};

let {
  car1 = 'car',
  car2 = 'cars',
  car3 = 'cars',
  car4 = 'cars',
  car5 = 'cars',
  car6 = ['BIKE', 25],
} = carNames;

console.log(car1, car2, car3, car4, car5, car6);

// SWAPPING VARIABLES
let obj = { a: 10, b: 20 };
({ a: obj.b, b: obj.a } = { a: obj.a, b: obj.b });
console.log(obj.a, obj.b);

// Nested Objects

let {
  delivery: { Time, car },
} = resturent;

console.log(delivery, Time, car);

// Parameterized function variable in objects

resturent.deliverOrder({
  foodIndex: 2,
  floorIndex: 2,
  timeIndex: 'startTime',
  vehicalIndex: 'carName',
});
