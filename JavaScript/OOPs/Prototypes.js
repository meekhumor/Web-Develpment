// all the methods of string and array are basically a prototype you can modify existing method and create new method using prototype

String.prototype.grumpus = () => alert("Go Away");
const cat = "Blue";
cat.grumpus();

// prototype v/s proto 
// Array._proto_ is reference or property name on the array or string 
// Array.prototype is actual object which stores all methods and properties of all array and string

// _proto_ is reference to string prototype