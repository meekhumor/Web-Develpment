const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener('submit', function(e){
    e.preventDefault();     // it prevents redirecting into new webpage
    const newLi = document.createElement("li");     
    newLi.innerText = input.value;     // we can manipulate words written in input
    list.append(newLi);
    input.value = "";   // form reset() also empties the input box
})

// input and change events

const input2 = document.querySelector('#changeAndInput');

input2.addEventListener('input', function(e){   // its runs everytime we type something
    console.log("Input Event");
    
})

const change = document.querySelector('#changeAndInput');

input2.addEventListener('change', function(e){  // its runs everytime we change input
    console.log("Change Event");
})

