

"use strict";

let openingDays = ['sat','sun','mon','tue','wed','thu','fri'];
let years = ["1990","1991","1992","1993","1994","1995"];
const resturent = {
    open:{
        [openingDays[1]]:{
            open:"10:08 AM",
            close:"10:00PM",
        },
        [openingDays[3]]:{
            open:"9:08 AM",
            close:"10:00PM",
        },
        [openingDays[5]]:{
            open:"5:08 AM",
            close:"0",
        },
        [openingDays[0]]:{
            open:"0",
            close:"09:00PM",
        }
    },
    Delivery:function(Name,Address,FoodName,Contact){
        return `
            Hello ${Name} , Your Address : ${Address} , Your Food : ${FoodName} , Contact : ${Contact}. Your Food is on the way. Please keep online so we can deliver you on time !! Thanks for being with us!!
        `;
    },
    openingDays,
    years
    
};

console.log("\n################ OBJECTS LOOPING #####################");
let properties = Object.keys(resturent.open);
// console.log(properties);

let msg = `We are open on ${properties.length} days:`;
console.log(msg);

for(let day of properties){
    // console.log(day);
    msg+=` ${day}`;
}
console.log(msg);


console.log("\n################ ENTRIES #####################");

let keyProperty = Object.entries(resturent.open);
for(let [key,{open,close}] of keyProperty){
    // console.log(key);
    msg = `We are open at ${open} and close at ${close} and days ${key}`;
    console.log(msg);
}
// console.log(msg);


console.log("\n################ KEYS #####################");
let YearKeys = Object.keys(resturent.years);
console.log(YearKeys);

console.log("\n################ VALUES #####################");
let YearValues = Object.values(resturent.years);
console.log(YearValues);