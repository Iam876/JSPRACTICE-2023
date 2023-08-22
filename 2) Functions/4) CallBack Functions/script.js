"use strict";
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const upperText = function (str) {
    return str.toUpperCase();
}

const ConvertFunctions = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String:${fn(str)}`);

    console.log(`Transformed by : ${fn.name}`);
}
let str = "i love to stay alone!! because of introvert things";
ConvertFunctions(str, upperFirstWord);
console.log("\n");
console.log("\n");
console.log("\n");
ConvertFunctions(str, oneWord);

