// Default paramaters: you can set default parameters by specifying it in argument

function rollDie(numSides = 6){     // if user doesn't pass a parameter then it executes taking 6 as default parameter
    Math.floor(Math.random() * numSides) + 1;
}

// Spread: Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or
// elements (for array literals) are expected

const nums = [13, 4, 5, 21, 3, 3, 6, 4, 2]

Math.max(nums)  // NaN
Math.max(...nums) // 21
console.log(...'hello') // h e l l o

const dogs = ['Rusty', 'Wyatt'];
const cats = ['Blue', 'Scout', 'Rocket'];

const allPets = [...cats, ...dogs] // Blue Scout Rocket Rusty Wyatt
// object can also be spreaded by ...

// Rest Parameters

function sum(...nums){      // now nums can be array rather than a single parameter
    console.log(nums);
}

sum(3,4,5,6,7) // valid

// Array Destructuring

const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

const [gold, silver, bronze] = raceResults;
gold;   // Eliud Kipchoge
silver; // Feyisa Lelisa
bronze; // Galen Rupp

// Object Destructuring

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt',
    state:'California',
    born: 1996
}

const {email, state, password} = user; 
email;  // harvey@gmail.com
password; // sCoTt
state; // California

const{born: birthYear} = user;
born; // Error
birthYear; // 1996

// Parameter Destructuring



