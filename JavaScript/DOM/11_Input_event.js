let select = document.querySelector('select')
let ul = document.querySelector('ul')

select.addEventListener('change', () => {
    const newLi = document.createElement("li");
    newLi.innerText = select.value; 
    ul.append(newLi);
})