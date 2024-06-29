const makeRandomColor = () => {
    
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

const buttons = document.querySelectorAll('#this');

for (let button of buttons) {
    button.addEventListener('mouseenter', function(){
        button.style.backgroundColor = makeRandomColor()
    })
}

const h2s = document.querySelectorAll('h2');
for(let h2 of h2s){
    h2.addEventListener('click', () => {
        this.style.backgroundColor = makeRandomColor(); // 'this' is used here so that any tag can execute
        this.style.color = makeRandomColor()
    });
}


   