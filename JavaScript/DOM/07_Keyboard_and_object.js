document.querySelector('#object').addEventListener('click', function(evt) {
    console.log(evt);    // it shows position of buton where the action of clicking has occured, clientX and clientY are object element viewed in console
});

const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
    // console.log("Keypress"); // any key has been pressed
    console.log(e.key); // e refers to event object and we are accessing its object

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
// input.addEventListener('keyup', () => {
//     console.log("Keyrelease");
// })