// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const PLUS2_BTN = document.querySelector('#plus-btn');
const MINUS2_BTN = document.querySelector('#minus-btn');
const TIMES2_BTN = document.querySelector('#times-btn');
const DIVIDE2_BTN = document.querySelector('#divide-btn');
const NUM_CALC_RESULT = document.querySelector('.num2-calc-result');

let NUM_1;
let NUM_2;

function grabNums(){
  NUM_1 = Number(document.querySelector('#num1').value);
  NUM_2 = Number(document.querySelector('#num2').value);
}

PLUS2_BTN.addEventListener("click", function(){
  grabNums();
  NUM_CALC_RESULT.value = NUM_1 + NUM_2;
})

MINUS2_BTN.addEventListener("click", function(){
  grabNums();
  NUM_CALC_RESULT.value = NUM_1 - NUM_2;
})

TIMES2_BTN.addEventListener("click", function(){
  grabNums();
  NUM_CALC_RESULT.value = NUM_1 * NUM_2;
})

DIVIDE2_BTN.addEventListener("click", function(){
  grabNums();
  NUM_CALC_RESULT.value = NUM_1 / NUM_2;
})
