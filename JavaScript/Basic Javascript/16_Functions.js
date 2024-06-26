// Function: we define a 'chunk' of code that we can then execute at a later point 

// Syntax: function funcname(arg1, arg2,...arg3){
//     // do something
//     // return
// }

function greet(firstName, lastname){
    console.log(`firstName is: ${firstName} and lastname is: ${lastname}`);
}

greet('om','mukherjee');

// Function expressions: function can be stored in a variable

const add = function(x,y){ // You can this function with add(1,3)
    return x + y;
}

// Higher order function: 
// Function that operate on/with other function
// -accept other function as arguments
// -returns a function

function callTenTimes(func){        // we passed a word in argument
    for(let i = 0; i < 10; i++){
        func();                     // we called rolldie function
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}

callTenTimes(rollDie);

// --------------------------------------

function makeBetweenfunc(min, max){
    return function(num){
        return num >= min && num <= max
    }
}
const isChild = makeBetweenfunc(10,20);
isChild(4);   // 40 is num