// Methods: We can add functions as properties on objects, we call them methods 

const myMath = {
    PI: 3.14159,
    square: function (num){
        return num*num;
    },
    cube(num){      // this is also valid
        return num*num*num;
    }
};

console.log(myMath.square(2));

// 'This' in methods
// use the keyword this to access other properties on the same object 

const person = {
    first: 'Robert',
    last: 'Hervajec',
    fullName() {   
        return `${this.first} and ${this.last}`
    }
};

console.log(person.fullName());
let indirectExecution = person.fullName
// when invocating the function by 'person2()'(indirect execution) it shows undefined because the value of this depends on the invocation context of the function it is used in.

const man = {
    firstName: 'Viggo',
    lastName: 'Nortensen',
    fullName: function() {       // if you use arrow function then window object is taken into consideration rather than man object 
        return `${this.firstName} ${this.lastName}` 
    },
    shoutName: function(){
        setTimeout(() => {   // if you use normal function then window object is taken into consideration rather than man object, since it is nested
            console.log(this.fullName())
        },3000)
    }
}