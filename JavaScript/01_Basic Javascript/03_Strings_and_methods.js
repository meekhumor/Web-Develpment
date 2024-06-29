// String represent text, and must be wrapped in quotes

let firstName = "ziggy";

// Each character in string has a corresponding index starting with 0
firstName[0];

firstName.length; // no parenthesis

// we can add two strings by '+'
1+"hello" // (here 1 behaves as string)


//String Methods

// Syntax: thing.method()
let msg = "hello";
msg.toUpperCase(); 

// although msg remains unchanged we can store this in other variable
let upmsg = msg.toUpperCase();

greeting.trim() // removes space at start and end of string

msg.trim().toUpperCase(); // we can chain on methods

// for certain methods we need to pass an argument in parenthesis
// Syntax: thing.method(arg)

let message = "I want my car keys";
msg.indexOf('c');
 
str.slice(beginIndex, endIndex); // just like substring
str.slice(-1) // its slices from backwards

str.replace(toreplace, replacing)
"hello".replace("","_") // this gives _hello

str.repeat(2) // it repeats the string for 2 times

