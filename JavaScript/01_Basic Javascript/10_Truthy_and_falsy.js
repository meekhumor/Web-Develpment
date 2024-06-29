// Falsy values: 
// false
// 0
// ""
// null
// undefined
// NaN

// Everything else is truthy

const userInput = prompt("Enter something: ");

if(userInput){
    console.log("Truthy!");
}
else{
    console.log("Falsy!");
}

if(0){
    console.log("Truthy!");
}
else{
    console.log("Falsy!");
}