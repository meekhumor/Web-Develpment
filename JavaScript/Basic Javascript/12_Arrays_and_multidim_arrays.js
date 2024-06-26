let colors = ['red', 'orange'] // Array of string
let num = [1,2,3] // Array of number
let mix = [true, 68, 'cat'] // Array of number and string

colors[1][3] // n (it can be chained)

// string doesn't alter after making changes to index whereas array does 

// Arrays in js works on the principle of references and hence if equality is checked between two arrays which contains same data , then the wequality 
// turns out to be false . this is due to the fact that their references are different, if equality comes out to true they are the same reference arrays
// (identical) this can be thought similar to a arrow pointing a certain location.

// Though const is used in array, the values can change as long as reference remains same  
// We can use array methods but can't change array

// Nested Arrays

const board = [ 
    ['O', null, 'X'],
    [null, 'X', 'O'],
    ['X', 'O', null]
]

console.log(board[1][1]);
