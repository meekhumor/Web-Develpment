type User = {
    readonly _id: string
    name: string
    email: string
    isActive: true
    creditCardDetails?: number // optional
}

let myUser: User = {
    _id: '123',
    name: 'John',
    email: 'om17092004@gmail.com',
    isActive: true
}

myUser.email = 'om1709@gmail.com'
// myUser._id = '1234' // can't change as it is in read only

// combining types

type cardNumber = {
    carNumber: string
}

type cardData = {
    cardNumber: string
}

type UserWithCard = User & cardNumber // combined

export {}