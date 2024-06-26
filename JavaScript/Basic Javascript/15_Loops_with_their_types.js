// Types of Loop:

// for loop

for(let i = 1; i <= 10; i++)
{
    console.log(i);
}

// looping over an array

const animals = ['lion', 'tigers', 'bears'];
for(let i = 0; i < animals.length; i++){
    console.log(i,animals[i]);
}

// nested for loop

for(let i = 1; i <= 10; i++){
    for(let j = 1; j < 4; j++){
        console.log(`i is ${i} and j is ${j}`);
    }
}

// while loop

let input = prompt("Hey, say something!");
while(true)
{
    input = prompt(input);
    if(input === "stop copying me"){
        break;
    }
}
console.log("OK YOU WIN!");

// for of loop

for(variable of iterable){
    statement;
}

const subreddits = ['cringe', 'books', 'chicken', 'funny'] // it can also be a string

for(let sub of subreddits){
    console.log(sub); // cringe books chicken funny
}

// for in loop (to iterate objects)

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91
};

for(let person in testScores){
    console.log(`${person} scored ${testScores[person]}`);
}

let score = Object.values(testScores); // it makes an array named scored containing all testscores(80, 67, 89,91)
