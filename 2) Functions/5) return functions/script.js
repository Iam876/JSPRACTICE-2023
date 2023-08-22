let greet = function (greetings) {
    return function (name) {
        console.log(`${greetings} : ${name}`);
    }
}

greet('Hey')('Ibrahim');
let greetings = greet('Hello');
greetings('Masud');


console.log("############ USING ARROW FUNCTION #############");

let student = (name) => {
    return (university) => {
        console.log(`${name} : ${university}`);
    }
}

student('Ibrahim')('Eastern Univesity');