// Arrow function:
// syntactically compact alternative to a regular function expression 

const square = (x) => { // we dont write function rather we use arrow
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

// implicit return

var isEvem = function(num){ // regular function expression
    return num%2 === 0;
}
var isEvem = (num) => { // arrow function with parenthesis around parameter
    return num%2 === 0;
}
var isEvem = num => {   // no parenthesis around parameter
    return num%2 === 0;
}
var isEvem = num => (  // implicit return
    num%2 === 0
); // semicolon outside the parenthesis is important
var isEvem = num => num%2 === 0; // one-linear implicit return



