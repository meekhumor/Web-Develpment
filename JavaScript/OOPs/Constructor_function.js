// Constructor Function

// Creates a blank, plain Javascript object
// Links (set the contructor of) this object to another object;
// Passes the newlycreated object from Step 1 as the this context
// Returns this if  the function doesn't return its own object 

function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this); // 'this' was earlier refering to global object 
}

Color.prototype.rgb = function() {  // now we can access rgb() function by Color.rgb(), because its a method now
    const {r,g,b} =this;
    return `rgb(${r},${g},${b})`
}
Color.prototype.rgba = function(a) {  // dont use arrow function
    const {r,g,b} =this;
    return `rgb(${r},${g},${b},${a})`
}

const color1 = new Color(255,40,100) // during call when we used 'new' then 'this' refered to newly created object  