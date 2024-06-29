const figlet = require("figlet")
const color = require("colors")

figlet("Hello World!!", (err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.rainbow);
} );

// every packages has there own way of calling

// to make a package.json write in terminal npm init
// package.json is file which contain all data about author, licence and dependencies(packages used)

