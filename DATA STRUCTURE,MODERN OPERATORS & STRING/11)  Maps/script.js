/**
 * MAP : In Js,Map is a datastructure that we can use to map values to keys. Sp,data is stored as key,value pair in maps.
 * 
 * ############# MAP VS OBJECT ################
 * In MAP, The key can be any data types. [arrays,objects,string,map,anything]
 * But In OBJECT,the key should be only string
 * 
 * ############## MAP METHODS ################
 * 
 * 'set(key,value)' -> By this method we can insert data into map.
 * 'get(key) -> By this method we can only get the value of the specified keys.
 * 'delete(key)' -> By this method we can delete certain property associate with the keys
 * 'clear()' -> By this method the Map will be completly empty
 * 'has(key)' -> By this method we can search that the property exist or not , It will result Boolean.
 * 'size' -> It will return the size of arrays
 */

console.log("#################### MAP ######################");
let rest = new Map();
let country = {
    "Bangladesh": 1,
    "FR": 2,
    "GE": 3,
    "UK": 4,
    "USA": 5,
}
// console.log(typeof country);
let bool = [true, false], arr = [1, 2], time = 15;

rest.set('name', 'MD IBRAHIM KHALIL');
rest.set('age', '24');
rest.set('qualification', 'BSC in CSE');
rest.set(1, 'Mirpur | Bata Company');
rest.set(2, 'Uttara | Bata Company');
rest.set(arr, 'Love');
rest.set(country, "4 Country");
rest.set('open', 11);
rest.set('close', 21);
rest.set(true, 'Friend');
rest.set(false, 'Enemy');
// rest.set([true, false], "Trust Or Not | Vary on Persons"); // Output will be undefined
rest.set(bool, "Trust Or Not | Vary on Persons");


rest
    .set('chair', '40 chairs')
    .set('table', '10 tables')
    .set('waiter', '10 waiter');
rest.set((document.querySelector('h1')), "Hello HTML ");
console.log(rest);
// console.log(rest.get('open'));


console.log(rest.get('name'));
console.log(rest.get('age'));
console.log(rest.get('qualification'));
console.log(rest.get(1));
console.log(rest.get(2));
console.log(rest.get(arr));
console.log(rest.get(country));
console.log(rest.get(true));
console.log(rest.get(false));

// console.log(rest.get([true, false])); // It will undefined

console.log(rest.get(bool));
console.log(rest.size);

let check = rest.get(time > rest.get('open') && time < rest.get('close')); // here the both condition is true that's why it execute the value of true
console.log(`Check data output is : ${check}`);

rest.clear();







console.log("#################### MAP ITERABLE ######################");

/**
 * The best way to insert data into map is using array way. set method should use for user input or later input on need of program essentials,Instead of inserting data into the map by using constantly set method
 * 
*/

let quizApp = new Map([
    ['question', 'Who is your family?'],
    [1, 'parents'],
    [2, 'friends'],
    [3, 'teachers'],
    [4, 'students'],
    ['correct', 1],
    [true, 'Correct 🎊🎉'],
    [false, 'Try Again 👎👎']
]);

let container = document.querySelector('#container');

let message = document.querySelector('.message');
let question = document.createElement('p');

question.className = 'question';
question.textContent = quizApp.get('question');
container.appendChild(question);

for (let [key, value] of quizApp) {
    if (typeof key === 'number') {
        let optionBtn = document.createElement('button');


        message.style.fontWeight = 'bold';
        message.style.display = 'flex';
        message.style.justifyContent = 'center';
        message.style.margin = '0 35%';

        optionBtn.classList = 'option-div';
        optionBtn.onclick = function (selected) {
            if (key === quizApp.get('correct')) {
                this.classList.add('correct');
                message.innerHTML = quizApp.get(true)
            } else {
                this.classList.add('incorrect');
                message.innerHTML = quizApp.get(false)
            }
        };
        optionBtn.textContent = value;
        container.appendChild(optionBtn);
    }
}


