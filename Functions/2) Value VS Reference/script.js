/* ############# VALUE VS REFERENCE ############### 
*Pass by Value:
    When you pass a primitive data type (such as numbers, strings, booleans) to a function, it is passed by value. This means that the function receives a copy of the actual value, and any changes made to the parameter within the function do not affect the original value outside of the function.

Pass by Reference:
    When you pass an object (including arrays and functions) to a function, it is passed by reference. This means that the function receives a reference to the original object in memory. As a result, any modifications made to the object within the function will affect the original object outside of the function.


    In JavaScript, even though objects are passed by reference, variables themselves are still passed by value. When you pass an object to a function, you are passing the value of the reference to the object, not the reference itself.
*/

const ibrahim = {
    name: "Ibrahim Khalil",
    passport: 2547894562153
}
const checkIn = function (flightName, passenger) {
    flightName = "D051";
    if (passenger.passport === 2547894562153) {
        alert('Check In Successfull');
    } else {
        alert('Check in Failed!');
    }
}

const passportCheck = function (passenger) {
    passenger.name = "Md " + passenger.name;
    passenger.passport = Math.trunc(Math.random() * 1000000000000);
    if (passenger.passport === 2547894562153) {
        alert("Passport Matched");
    } else {
        alert("Wrong Passoport");
        alert(passenger.name);
    }
}

checkIn("D450", ibrahim);
checkIn("D865", ibrahim);

passportCheck(ibrahim, ibrahim);

console.log(ibrahim);