// Scope: Variable "visibility" The location where a variable is defined dictates where we have access to that variable 

let bird = 'mardarin duck';

function birdWatch(){

    let bird = 'golden pheasant';
    console.log(bird); // golden pheasant
}
console.log(bird) // mardarin duck

// Block Scope

if(radius > 0){
    const PI = 3.14; // it has scope within if statement
    let msg = 'HI!';
}

console.log(PI); //Error
// var is independent of scope

// Lexical Scope

function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine', 'Batman'];
    function cryForHelp(){                                   // child function has access to element in parent function
        for (let hero of heroes){
            console.log(`PLEASE HELP UP, ${hero}`);
        }

    }
    cryForHelp()
}

