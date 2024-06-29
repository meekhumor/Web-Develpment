// Try/Catch is used to find error 

try{
    hello.toUpperCase(); // will cause error in console
}
catch{console.log("Error!!!")}

// if we dont have try and catch then code stops due to error

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }
    catch(e){
        console.log("Please pass a string");
    }
}