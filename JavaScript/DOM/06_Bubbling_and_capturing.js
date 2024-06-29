// Event Bubbling & Capturing

// Here div is parent of button
let div = document.querySelector("div");
let button = document.querySelector("button");

div.addEventListener("click", (e) => {
  console.log("div clicked");
});
button.addEventListener("click", (e) => {
  e.stopPropagation(); // it will stop propagation of child to parent
  console.log("button clicked");
});
// if we click button then first button listner will execute and then div listner will also execute

// Prevent default
let a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault(); // it will prevent default action of anchor tag
});
