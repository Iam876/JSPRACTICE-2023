/*
 Short ciruting OR: In short ciruiting Or, If the first value appear as truthy then it will immediatly execute execute the first value. Also it will not even see the rest part.

 * But If the first value is falsy then it will execute the second value if that a truthy value.
 * Also, If none of the value is truthy,means if every value is falsy then it will simply execute the last value.
 *If there are multiple values then it will check , when it gets a value which is truthy it will then execute that one. otherwise the last falsy one.
*/
console.log(`-------------- OR ---------------
|--------------------------------|
`);
console.log(3 || 4); // here the first value is truthy
console.log('Ibrahim' || 5); // here the first value is truthy
console.log(true || 0);
console.log(0 || true);
console.log(undefined || null);
console.log(null || undefined);

console.log(null || 0 || undefined || '' || 'Masud');
console.log(null || 0 || null || '' || '');

let Ibrahim;
console.log(Ibrahim || 10);

// In here has a issue which should solved by nulish colescing;
Ibrahim = 0;
console.log(Ibrahim || 10); // logical error part
console.log(Ibrahim ?? 10); // ?? -> this is nul colescing operator
// End

Ibrahim = 5;
console.log(Ibrahim || 10);

const person = {
  name: ['ibrahim', 'masud', 'zanin'],
  order: function (...name) {
    let message = `Names are ${this.name}`;
    return message;
  },
};

console.log(person.order() || 45);

/*
SHORT CIRCUITING && : if the first value is falsy then it will immediatly execute the first value.

*But,if the first value is truthy then it will execute the second value.
* If the first and second both value is truthy then it will simply execute the second one.
*If there are multiple values then it will check , when it gets a value which is falsy it will then execute that one.otherwise,the last one.
*/
console.log(`-------------- AND --------------
|--------------------------------|
`);
console.log(3 && 4); // here the first value is truthy
console.log('Ibrahim' && 5); // here the first value is truthy
console.log(true && 0);
console.log(0 && true);
console.log(false && 0);
console.log(0 && false);
console.log(true && false);
console.log(undefined && null);
console.log(null && undefined);

console.log(1 && 2 && 'Zanin' && 'Masud' && 'haha');
console.log(
  null || (0 && undefined && '' && 'Masud') || ('bangladesh' && 'UK')
);
console.log(true && true && true && 1 && false);

let rony;
console.log(rony && 10);
rony = 0;
console.log(rony && 50);

console.log(person.order() && null);
console.log(true && person.order());
