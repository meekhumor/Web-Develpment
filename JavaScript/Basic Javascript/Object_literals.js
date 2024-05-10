// Objects:

// Objects are collection of properties
// Properties are a key-value pair
// Rather than accessing data using an index, we use custom keys

const fitBitData = {
    totalSteps : 308727,
    totalMiles : 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2.13'
};

// to access the object
console.log(fitBitData["totalSteps"]);  
let newstep = ++fitBitData.totalSteps; 
console.log(newstep); 

// Array of objects

const shoppingcart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1,
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3,
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2,
    },

]

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exam: {                         // Nested Object 
        midterm: 92,
        final: 88
    }
}

console.log(shoppingcart[0].product); // Jenga Classic
console.log(student.exam.midterm); // 92
