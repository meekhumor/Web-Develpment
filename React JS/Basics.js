// Immutable vs mutable

var state = [1, 2, 3, 4, 5];
var copy = [...state]; // spread operator (copy without reference)

copy.pop; // only pops from copy not from state

//-----------------------------------------------------------------------------------------
// Array objects

var obj = {
  name: "string",
  social: {
    facebook: {
      first: "haaah",
      second: "laana",
    },
  },
};

const { second } = obj.social.facebook;

//--------------------------------------------------------------------------------------------
// Destructuring objects

var arr = [12, function () {}, true, "string"];
const [first, second2, third, fourth] = arr;

//--------------------------------------------------------------------------------------------
// Import and export

export function Cart() {}

export function Hello() {}

// import {Cart, Hello} from "./script.js";

//---------------------------------------------------------------------------------------------------
// Map / Filter

// Map: har element pe kuch karo and naye array mein rakho

var arr2 = [1, 2, 3, 4, 5];
const ans3 = arr.map((val) => val * 12);

// Filter: har element pe conditiion check karo agar satisfy krta hai toh naye array mein rakho ya toh mt rakho

var arr3 = [
  { name: "harsh", gender: "male" },
  { name: "harshita", gender: "female" },
  { name: "harshika", gender: "female" },
];

const ans2 = arr.filter((elem) => elem.gender === "female");
