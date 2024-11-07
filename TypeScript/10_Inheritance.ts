class User {
    protected _courseCount = 1
    readonly city: string = "Jaipur"
    constructor(public email: string, public name: string) {}
}

// protected is used to make a property or method accessible only to the class and its subclasses.
class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 2
    }
}

const user = new User("h@h.com", "Rahul");

export {}