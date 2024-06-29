const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // it prevents redirecting into new webpage
  const newLi = document.createElement("li");
  newLi.innerText = input.value; // we can manipulate words written in input
  ul.append(newLi);
  input.value = ""; // form reset() also empties the input box
});

