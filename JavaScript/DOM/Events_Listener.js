// -clicks

const btn = document.querySelector('#v2');
btn.onclick = function() {
    console.log("You clicked it");
}
function scream(){
    console.log("AAAAH");
    console.log("Noo!!!");
}
btn.onmouseenter = scream;

// does every job with one syntax
const button = document.querySelector('h1');
button.addEventListener('mouseenter', function(){
    console.log("You just hovered over h1")
})

function shout(){
    console.log("Shout");
}
function twist(){
    console.log("Twist");
}
const tasButton = document.querySelector('#tas');

tasButton.addEventListener('click', twist, {once: true}); // run only one time
tasButton.addEventListener('click', shout ); // run many times

// -drags
// -drops
// -hovers
// -scrolls 
// -form submission 
// -key presses 
// -focus / blur 
// -mouse wheel 
// -double click 
// -copying
// -pasting 
// -audio start 
// -screen resize 
// -printing 


// Capturing and Bubbling:

parent.addEventListener("click", () => {
    console.log("Parent Bubble")
  })
  
  parent.addEventListener(
    "click",
    () => {
      console.log("Parent Capture")
    },
    { capture: true }
  )
  
  child.addEventListener("click", () => {
    console.log("Child Bubble")
  })
  
  child.addEventListener(
    "click",
    () => {
      console.log("Child Capture")
    },
    { capture: true }
  )
  
  // Output: 
  
  // Parent Capture
  // Child Capture
  // Child Bubble
  // Parent Bubble
  
parent.addEventListener("click", () => {
    console.log("Parent Bubble")
  })
  
  parent.addEventListener(
    "click",
    () => {
      console.log("Parent Capture")
    },
    { capture: true }
  )
  
  child.addEventListener("click", () => {
    console.log("Child Bubble")
  })
  
  child.addEventListener(
    "click",
    (e) => {
      e.stopPropagation;            // Stops any further propagation
      console.log("Child Capture")
    },
    { capture: true }
  )

  // Output:

  // Parent Capture
  // Child 
  
  // Remove Event Listener:

    button.addEventListener("click", sayHi)
    button.removeEventListener("click", sayHi)

    function sayHi() {
      console.log("Hi")   // We need to always make a function for this
    }

    button.addEventListener("click", () => {
      console.log("Hi")
    })
    
    button.removeEventListener("click", () => {
      console.log("Hi")
    })

