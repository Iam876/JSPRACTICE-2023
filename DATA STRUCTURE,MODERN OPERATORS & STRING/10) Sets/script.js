/**
 * In the past javascript has a few data structures. like (Objects , Arrays)
 * But In ES6,two more data structure was finally introduce - (sets , maps)
 * 
 * ########### SET ############ 
 * Defination : Set is a collection of unique values,So it means that set can never have any duplicates.
 * Set's are similar like arrays. but if any duplicate value founds then it will ignore them and only take one unique values of the duplicate ones.
 * also set has no key,value pair. So it could be iterable as like the array.
 * 
 * As,I mentioned earlier that set is like or similar to an array. But it's not totally similar to array.
 * 
 * 'size' In set we could get the length by using 'size' not 'length'
 * 'has()' method to find a values (Boolean form)
 * 'add()' to insert data or values into set
 * 'delete()' to delete data or values from set
 *  set has no method to retrieve value by index method like arrays. Because,Set has no indexes also there has no way to out value from the sets. Because All values of set is 'unique' and 'order' is not an issue. 
 * 'clear()' it will delete all the values inside the set. And the set will encounter as empty
 * 
 * ######## PURPOSE OF SET ########
 * To identify the unique values from an array
 * After that we can use (...) spread operator to make a replica of the set to a new array
 * 
 * Set is not used to replace array,which is not good and possible.
 * When only need to work with unique values then only we should use 'set' otherwise arrays. 
 */

console.log("#################### SET ######################");
let friends = new Set(["akash",'akash',"masud","zanin","masud","shahin","dihan","robin"]);
console.log(friends);

console.log("#################### Set (add) ######################");
friends.add("Sabuj");
friends.add("Sabuj");
friends.add("Sajib");
friends.add("Sakib");
friends.add("Nafiul");

console.log(friends);

console.log("#################### Set (delete) ######################");
friends.delete("akash");
friends.delete("robin");
console.log(friends);

console.log("#################### Set (has) ######################");

console.log(friends.has("zanin"));

console.log("#################### Set (size) ######################");

console.log(`Size of the friends is : ${friends.size}`);


console.log("#################### Set (Loop) ######################");

for(let value of friends){
    console.log(value);
}

console.log("#################### Set (clear) ######################");
friends.clear();
console.log(friends);



console.log("#################### Set (spread) ######################");

let jobs = ["IT","Freelancer","Worker","Bank","Labour","Bank","Bank"];

console.log(new Set(jobs));
console.log(...new Set(jobs));

