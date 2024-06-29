// At any given point in time, that single JS thread is running at most one line of JS code

// -Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout)
// -The JS call stack recognizes these Web API functions and passes them off to the browser to take care of 
// -Once the browser finishes those tasks, they return and are pushed onto the stack as a callback

console.log('I print first'); // <-- js does this execution
setTimeout(() => {
    console.log('I print after 3 seconds'); // <--js say to setTimeout() to web api, once completed it callbacks js
}, 3000);
console.log('I print second') // <-- until then js does further execution