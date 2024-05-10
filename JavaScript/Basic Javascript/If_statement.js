let rating = 3;

if(rating === 3){
    console.log("Yo Yo");
}

// Else if: if not the first thing, maybe this other thing 

if(rating === 3){
    console.log("rating is 3");
}
else if(rating === 2){
    console.log("rating is 2");
}

// 0-5 - Free
// 5-10 - Child $10
// 10-65 - Adult $20
// 65+ - Senior $10 

const age = 2;

if(age < 5){
    console.log("You are a baby. You get it for free!");
}
else if(age < 10){
    console.log("You are a child. You pay $10");
}
else if(age < 65){
    console.log("You are a adult. You pay $20");
}
else{
    console.log("You are a senior. You pay $10");
}

const password = prompt("Please enter a new password:"); 

// Password must be 6+ characters
// Password cannot include space

if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("Good Job");
    }
    console.log("Password cannot contain space");
}
else{
    console.log("Password too short! must be 6+ character");
}