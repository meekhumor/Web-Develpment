const input = document.querySelector('input');

input.addEventListener('keydown', (e) => { // key down runs when key is pressed
    // console.log("Keypress"); // any key has been pressed (Yes/No)
    console.log(e.key); // e refers to event object and we are accessing its object
    // e.key stores key which has been pressed such as 's' or 't' on keyboard
    switch(e.code){     // e.code extracts the refrence of the specific key and we modify it accordingly
        case 'ArrowUp': 
        console.log("UP!");
        break;
        case 'ArrowDown': 
        console.log("Down!");
        break;
        case 'ArrowLeft': 
        console.log("Left!");
        break;
        case 'ArrowRight': 
        console.log("Right!");
        break;
        default: 
        console.log("IGNORED!");
    }
})
input.addEventListener('keyup', () => { // keyup runs when key is released
    console.log("Keyrelease");
})

