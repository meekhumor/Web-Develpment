const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");

const select1 = document.querySelector(".select1");
const select2 = document.querySelector(".select2");
const select3 = document.querySelector(".select3");

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

const cart_qty = document.querySelector(".cart-quantity");

let cart_value = parseInt(cart_qty.innerHTML);
let select1_val = 1;
let select2_val = 1;
let select3_val = 1;

select1.addEventListener("change", function () {
  select1_val = parseInt(this.value);
});

select2.addEventListener("change", function () {
  select2_val = parseInt(this.value);
});

select3.addEventListener("change", function () {
  select3_val = parseInt(this.value);
});

button1.addEventListener("click", function () {
  cart_value += select1_val;
  cart_qty.innerHTML = `${cart_value}`;
});
button2.addEventListener("click", function () {
  cart_value += select2_val;
  cart_qty.innerHTML = `${cart_value}`;
});
button3.addEventListener("click", function () {
  cart_value += select3_val;
  cart_qty.innerHTML = `${cart_value}`;
});
