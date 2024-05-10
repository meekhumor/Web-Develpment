// push: add to end
// pop: remove from end
// shift: remove from start
// unshift: add to start

// concat: merge array
// includes: look for a value
// indexOf: just like string
// join:  creates a string from array 
// reverse: reverses an array 
// slice: copies a portion on an array 
// splice: removes/replaces element 
// sort: sorts an array

let movie = ["nancy", "harry", "eva", "oliver"];
let person = movie.pop(); // person stores "oliver"

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2); // array1 comes first

console.log(array1.includes("a")); //true

// splice(start, deleteCount, item1, item2, /* …, */ itemN)
let ele = movie.splice(0, 2, "om"); // ele contains deleted items 
console.log(movie);

let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
console.log(scores.sort()); // it just sorts on the basis on first number in a digit