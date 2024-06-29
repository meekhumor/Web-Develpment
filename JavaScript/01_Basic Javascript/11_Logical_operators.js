// && :  (if both are true then true otherwise false)
// ||: OR (if anyone is true then true otherwise false)
// !: NOT (it returns true if expression is false)

// Order of precedence: Parenthesis > NOT > AND > OR 

// Switch statement: switch statement is another control flow statement that can replace multiple if statements

const day = 2;
switch (day){
    case 1: 
        console.log("Monday!");
        break;
    case 2: 
        console.log("Tuesday!");
        break;
    case 3: 
        console.log("Wednesday!");
        break;
    case 4: 
        console.log("Thursday!");
        break;
    case 5: 
        console.log("Friday!");
        break;
    case 6: 
    case 7: 
        console.log("Weekend");
        break;
    default:
        console.log("Invalid Number!")
}
