let max = parseInt(prompt("Welcome! enter your max number: ")); // parseInt of any alphabet is NaN(falsy)
while(!max){
    max = parseInt(prompt("Enter a valid number: "));
}
const targetNum =  Math.floor(Math.random()*max) + 1;

let guess = parseInt(prompt("Enter your first guess: "));
let count = 1;

while(parseInt(guess) !== targetNum){

    if(guess === 'q') break;
    count++;
    if(guess > targetNum){
        guess = prompt("Too high. Guess again");
    }
    else {
        guess = prompt("Too low. Guess again");
    }
    
}
if(guess === 'q') {
    console.log("I Quit")
}
alert(`You Got it! you took ${count} guesses`);
