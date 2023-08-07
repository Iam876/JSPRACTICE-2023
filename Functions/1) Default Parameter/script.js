console.log("############# DEFAULT PARAMETER ###############");

const bookings = [];

// ES6 DEFAULT PARAMETER
let createBookings = function (flightNum = "A201F", numPassenger = 1, price = 250 * numPassenger) {

    //######## ES5 DEFAULT PARAMETER ########
    // flightNum = flightNum || 1;
    // numPassenger = numPassenger || 1;
    // price = price || 1;

    const booking = {
        flightNum,
        numPassenger,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBookings();
createBookings('A32RF');
createBookings('A32RF', 60);
createBookings('A32RF', 60, undefined);
// console.log(bookings);
// console.log(typeof (bookings));