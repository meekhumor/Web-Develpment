setTimeout(() => {
    console.log("...are you still there?") // it prints after delay of 3sec
},3000)  // 3000 ms

console.log("Hello!!");

const id = setInterval(() => {
    console.log(Math.random()) // it executes after every 2 sec in loop
},2000) // to stop it clearInterval(id)