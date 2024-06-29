// Call Stack: the mechanism the JS interpreter uses to keep track of its place in a script that calls multiple function
// How 'JS' knows what function is currently being run and what function  are called from within that function.

// How it works: 

// -when a script calls a function, the intepreter adds it to call stack and then starts carrying out the function
// - Any function that are called by that a function are added to the call stack further up and run where their calls are reached.
// - When the current function is finished, the intepreter takes it off the stack nad resumes execution where it left off in last code listing

const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
    square(a) + square(b) === square(c)
}
isRightTriangle(3,4,5)

// Call stack of above: 

// [multiply (3,3): 9]
// [square(3): multiply(3,3)]
//[isRightTrinagle(3,4,5) square(3) + square(4) === square(5)]