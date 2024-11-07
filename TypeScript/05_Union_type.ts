let score: number | string = 33

score = 44
score = '55'

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number,
}

let hitesh: User | Admin = {name: "hitesh", id: 334}
hitesh = {username: "hc", id: 334}

function getDbId(id: number | string){
    if (typeof id === 'string'){
        id.toLowerCase()
    }
}

// array

// number[]: array of numbers
// string[]: array of strings
// (number | string)[]: array of numbers and strings
// number[] | string[]: array of numbers or strings

const data: (number | string)[] = [1, 2, "3", "4"]

export {}