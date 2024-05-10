let input = prompt("What would you like to do")
let newArray = [];
while(true)
{
    console.log(`******************`);
    if(input === "new")
    {
        let newelement = prompt("Enter your new to-do");
        newArray.push(newelement);
        console.log(`${newelement} added to list`);
        input = prompt("What would you like to do");
    }

    else if(input === "list")
    {
        for(let i = 0; i < newArray.length; i++)
        {
            console.log(`${i}: ${newArray[i]}`);
        }
        input = prompt("What would you like to do");
    }

    else if(input === "delete")
    {
        let idx = prompt("Enter index of to-do to delete");
        newArray.splice(idx-1,1);
        console.log(`To do removed`);
        input = prompt("What would you like to do");
    }

    else if(input === "quit")
    {
        console.log("Ok you quit");
        break;
    }

    else{
        input = prompt("Enter a valid command");

    }

}