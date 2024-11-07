class User {
    private _courseCount = 1
    readonly city: string = "Jaipur"
    constructor(public email: string, public name: string) {}
}

const user = new User("h@h.com", "Rahul");

export {}