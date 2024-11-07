class User {
    readonly city: string = "Jaipur"
    constructor(public email: string, public name: string) {}
}

// Public can be used outside class whereas private can be used only inside class

const user = new User("h@h.com", "Rahul");

export {}