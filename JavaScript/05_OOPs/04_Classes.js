class Color{
    constructor(r,g,b,name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet(){
        return `Hello from ${this.name}`;
    }
    rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}
const c1 = new Color(255,42,78,'tomato'); // without new keyword you cannot invoke constructor color