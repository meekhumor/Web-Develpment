const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function(e){
    container.style.backgroundColor = makeRandomColor();
    e.stopPropagation   // to stop bubbling effect
})
container.addEventListener('click', function(){
    container.classList.toggle('hide');
})

const makeRandomColor = () => {
    
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    return `rgb(${red},${green},${blue})`;
}

// Event delegation















