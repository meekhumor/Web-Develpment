let store = document.querySelector("#btn1");
let cave = document.querySelector("#btn2");
let dragon = document.querySelector("#btn3");

let text = document.querySelector("p");
let xp = document.querySelector("#xp");
let health = document.querySelector("#health");
let gold = document.querySelector("#gold");

let monster = document.querySelector(".attack");
let monname = document.querySelector("#monster-name")
let monhealth = document.querySelector("#monster-health")

monster.style.display = 'none';

store.addEventListener('click', ()=>{
    monster.style.display = 'none'; 
    store.innerHTML = "Buy 10 Health (10 gold)";
    cave.innerHTML = "Buy Weapon (30 gold)";
    dragon.innerHTML = "Go to town square";
    text.innerText = "You enter the store.";
        store.addEventListener('click', ()=>{
            
            gold.innerHTML = parseInt(gold.innerText) - parseInt(10); 
            health.innerHTML = parseInt(health.innerText) + parseInt(10); 
            store.innerHTML = "Buy 10 Health (10 gold)";
            cave.innerHTML = "Buy Weapon (30 gold)";
            dragon.innerHTML = "Go to town square";
            text.innerText = "You enter the store.";
            return;
        })
        cave.addEventListener('click', ()=>{
            store.innerHTML = "Fight slime";
            cave.innerHTML = "Fight fanged beast";
            dragon.innerHTML = "Go to town square";
            text.innerText = "You enter the cave. You see some monster.";
            return;
        })
        dragon.addEventListener('click', ()=>{
            monster.style.display = 'none';
            store.innerHTML = "Go to Store";
            cave.innerHTML = "Go to cave";
            dragon.innerHTML = "Fight dragon";
            text.innerText = "You are in the town square. You see a sign that says Store.";
            return;
        })
        return;
})
cave.addEventListener('click', ()=>{
    store.innerHTML = "Fight slime";
    cave.innerHTML = "Fight fanged beast";
    dragon.innerHTML = "Go to town square";
    text.innerText = "You enter the cave. You see some monster.";
        store.addEventListener('click', ()=>{
            store.innerHTML = "Attack";
            cave.innerHTML = "Dodge";
            dragon.innerHTML = "Run";
            text.innerText = "You are fighting a monster.";
            monster.style.display = 'flex';
            monname.innerText = "Slime";
            monhealth.innerText = "15";
        })
        cave.addEventListener('click', ()=>{
            store.innerHTML = "Attack";
            cave.innerHTML = "Dodge";
            dragon.innerHTML = "Run";
            text.innerText = "You are fighting a monster.";
            monster.style.display = 'flex';
            monname.innerText = "Fanged Beast";
            monhealth.innerText = "60";
        })
        dragon.addEventListener('click', ()=>{
            monster.style.display = 'none';
            store.innerHTML = "Go to Store";
            cave.innerHTML = "Go to cave";
            dragon.innerHTML = "Fight dragon";
            text.innerText = "You are in the town square. You see a sign that says Store.";
        })
})
dragon.addEventListener('click', ()=>{
    store.innerHTML = "Attack";
    cave.innerHTML = "Dodge";
    dragon.innerHTML = "Run";
    text.innerText = "You are fighting a monster.";
    monster.style.display = 'flex';
    monname.innerText = "Dragon";
    monhealth.innerText = "300";
        store.addEventListener('click', ()=>{
            store.innerHTML = "Buy 10 Health (10 gold)";
            cave.innerHTML = "Buy Weapon (30 gold)";
            dragon.innerHTML = "Go to town square";
            text.innerText = "You enter the store.";
        })
        cave.addEventListener('click', ()=>{
            store.innerHTML = "Fight slime";
            cave.innerHTML = "Fight fanged beast";
            dragon.innerHTML = "Go to town square";
            text.innerText = "You enter the cave. You see some monster.";
        })
        dragon.addEventListener('click', ()=>{
            monster.style.display = 'none';
            store.innerHTML = "Go to Store";
            cave.innerHTML = "Go to cave";
            dragon.innerHTML = "Fight dragon";
            text.innerText = "You are in the town square. You see a sign that says Store.";
        })
})