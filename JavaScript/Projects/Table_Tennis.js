const select = document.querySelector("select");
const btn1 = document.querySelector('#id1');
const btn2 = document.querySelector('#id2');
const btn3 = document.querySelector('#id3');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

let number1 = 0;
let number2 = 0;
let isGameOver = false;
let winningScore 

select.addEventListener('change', function(){
    winningScore = parseInt(this.value) 
})

btn1.addEventListener('click', function(){
    if(!isGameOver){
        number1 = number1 + 1;
        if(number1 === winningScore){
            isGameOver = true;
            num1.style.color = "green";
            num2.style.color = "red";
        }
        num1.innerText = `${number1}`;
    }   
})
btn2.addEventListener('click', function(){
    if(!isGameOver){
        number2 = number2 + 1;
        if(number2 === winningScore){
            isGameOver = true;
            num2.style.color = "green";
            num1.style.color = "red";
        }
        num2.innerText = `${number2}`;
    }   
})
btn3.addEventListener('click', function(){
    number1 = 0;
    number2 = 0;
    num1.innerText = `${number1}`;
    num2.innerText = `${number2}`;
    num2.style.color = "black";
    num1.style.color = "black";
    isGameOver = false;s
})
