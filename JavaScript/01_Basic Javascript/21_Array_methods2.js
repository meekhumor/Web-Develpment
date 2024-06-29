// forEach
// It doesn't return a value
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
  console.log(n * n); // prints 81 64 49 36 25 16 9 4 1
});

nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el); // prints 8 6 4 2
  }
});

// map
// creates a new array with operation on every element in array

const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (t) {
  // map's main purpose is to create and return a new array
  return t.toUpperCase();
});
console.log(texts);
console.log(caps);

// filter
// clears a new array with all elements that pass the test implemented by the provided function

const num = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odd = num.filter((n) => {
  return n % 2 === 1; // return a value
});

const smallNum = nums.filter((n) => n < 5);

// find

// reduce
// executes a reducer function on each element of the array, resulting in a single value

const arr = [3, 5, 7, 9, 11];
let accumalator = arr.reduce((accumalator, currValue) => {
  return accumalator + currValue;
},0); // 0 is initial value which goes in accumalator

const price = [9.99, 1.5, 49.99, 30.5];

const minPrice = price.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

// some
// similar to every, but returns true if any of array element pass the test function

const words = ["dog", "dig", "log", "bag", "cupcake", "bag"];
words.some((word) => {
  return word.length > 4; // true
});

// every
// tests whether all elements in the array pass the provided function. it returns a boolean value

const wordsie = ["dog", "dig", "log", "bag", "cup", "bag"];
wordsie.some((word) => {
  return word.length === 3; // true
});
