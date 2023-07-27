'using strict';

const resturent = {
  person: ['shareholder', 'owner', 'manager', 'staffs'],
  foods: ['pizza', 'burger', 'sandwitch', 'coffee', 'drinks'],
  instrument: ['chairs', 'tables', 'sofa', 'tv', 'ac', 'wifi'],
  floors: [1, 3, 5, 8, 9, 11],

  order: function (personIndex, foodIndex) {
    return [this.person[personIndex], this.foods[foodIndex]];
  },
};

/*DESTRUCTURING ARRAYS: Assiging array values into variables by follwong ES6 Destructuring features. */

/*

// Simple assigning example without using destructuring

const arr = [1, 2, 3, 4, 5];
let a = arr[0];
let b = arr[1];
let c = arr[2];
let d = arr[3];
let e = arr[4];
console.log(a, b, c, d, e);
*/

// Using destructuring way
let arr = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr;
console.log(a, b, c, d, e);

// From Object arrays -> Person
let [food1, food2, food3, food4, food5] = resturent.foods;
console.log(food1, food2, food3, food4, food5);

// Skipping: Assigning values by skipping chairs,sofa,ac
const [, ins2, , ins4, , ins6] = resturent.instrument;
console.log(ins2, ins4, ins6);

// Skipping: skipping 2,4
const [i, , k, , l] = arr;
console.log(i, k, l);

// Nested Array value assigning
let nested = [
  'ibrahim',
  'masud',
  ['dihan', 24, 'male'],
  ['shahin', 24, ['salam', 59]],
];

const [
  myName,
  friendName1,
  [friendName2, friendAge2, gender],
  [friendName3, friendAge3, [friendFather3, friendFatherAge3]],
] = nested;

console.log(
  myName,
  friendName1,
  [friendName2, friendAge2, gender],
  [friendName3, friendAge3, [friendFather3, friendFatherAge3]]
);

/*
const [myName, friendName1, [, ,], [, , [friendFather3, friendFatherAge3]]] =
  nested;

console.log(myName, friendName1, [[friendFather3, friendFatherAge3]]);
*/

// SWAPPING NORMAL WAY

/* // THIS IS NORMAL WAY OF SWAPPING

let temp = food1;
food1 = food2;
food2 = temp;
console.log(food1, food2, food3, food4, food5);

*/
// SWAPPING DESTRUCTURING WAY
[food2, food1, food4, food5, food3] = [food1, food2, food3, food4, food5];
console.log(food1, food2, food3, food4, food5);

// IN DESTRUCTURE: Default value assiging
const contact = [202036, 5543225, 763561];
const [ibrahim = 111111, masud = 2222222, zanin = 333333, dihan = 222222] =
  contact;
console.log(ibrahim, masud, zanin, dihan);

// DESTRUCTURING: Assigining function return value into destructuring variables

const [person, food] = resturent.order(2, 4);
console.log(person, food);
