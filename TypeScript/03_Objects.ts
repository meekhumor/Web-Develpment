const User = {
    name: "om",
    email: "om170904@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}
createUser({name: "hitesh", isPaid: false})

function createCourse(): {name: string, price: number}{
    return {name: "reactjs", price: 399}
}

// type

type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createNewUser(user: User) {}
createNewUser({name: "om", email: "om170904@gmail.com", isActive: true})

export {}