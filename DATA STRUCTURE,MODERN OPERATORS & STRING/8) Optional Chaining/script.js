"use strict";

let openingDays = ['sat','sun','mon','tue','wed','thu','fri'];
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
    
};

// console.log(resturent);

// ######### Without optional Chaining Start ###########

// console.log(resturent.open.fri.open); // Here,Friday is not mentioned so it will encounter undefined. But here I tried to access the 'open' property on the property which is not mentioned. So it will show an error. Which is not user friendly and not efficient way to code.

// We can solve this issue by using conditional statement
if(resturent.open && resturent.open.fri){
    console.log(resturent.open.fri.open);
}else{
    console.log("No Data Found");
}

// ######### Without optional Chaining End ###########

// ######### USING optional Chaining START ###########

/**
 * If property doesn't exist then optional chaining (?) will show undefined Instead of showing error.
 * We should always use the Nullish Collescing (??) operator for catching the 0 and undefined more precisely
 * It's Only Works for Objects
 * It's ES11 [ES2020] Features
 * It will work on modern browser which support | older browser might not support it.
 */


console.log(resturent.open?.fri?.open ?? "Property Doesn't Exist");
console.log(resturent.open?.sat?.open ?? "Nothing exist");
console.log(resturent?.open?.sun?.open ?? "Nothing exist");


// using for of loops
console.log("\n############### LOOPS #####################");
let days = ['sat','sun','mon','tue','wed','thu','fri'];
for(const day of days){
    let OpenTime =  resturent?.open[day]?.open ?? "Soon !! Under Maintanance";
    console.log(`Resturent will open at ${OpenTime}`);
}
console.log("\n################# METHODS #####################");


// We Can Access methods as well inside of Objects Optional Chaining


    console.log(resturent.Delivery?.("Md Ibrahim Khalil","Mirpur 10 Dhaka","Pizza","01770202036") ?? "Something went wrongs");

    console.log(resturent?.Cancel?.(4,5) ?? "Invalid function");


console.log("\n############## Arrays ##################");

// We can also access arrays
console.log(resturent?.openingDays[7] ?? "Days Not found");

console.log("\n##############################################");

// ######### USING optional Chaining END ###########
