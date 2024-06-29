const changeColor = document.querySelector('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');



changeColor.addEventListener('click', function(){
    
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    h1.innerText = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
})