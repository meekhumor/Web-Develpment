class Pet{
    constructor(name,age) {
        this.name =name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet{ // cat class inherits all properties and value of pet class
    constructor(name,age,livesLeft = 9) {
        super(name,age) // super to inherit attributes of parameter from parent class
        this.livesLeft = livesLeft
    }
    eat() {
        return `${this.name} is eating!`;
    }
    meow() {
        return "Meow!!";
    }
}
const c1 = new Cat('monty',9);

class Dog extends Pet{
    bark(){
        return "Woof!!";
    }
}
const d1 = new Dog('tommy',18);

