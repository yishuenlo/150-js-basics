// Write a JavaScript program to test the first character of a string is uppercase or not.

function upper_case(str){
  regex = /^[A-Z]/;
  if(regex.test(str)){
    console.log("First character is uppercase");
  } else {
    console.log("First character is NOT uppercase");
  }
}


// what do your credit card number means https://computersolving.com/computer-tips-tricks/what-your-credit-card-numbers-mean/


// word Count
const WORD_COUNT_INPUT = document.querySelector(".word-count-input")
const WORD_COUNT_BTN = document.querySelector(".word-count-btn");
const WORD_COUNT_DISPLAY = document.querySelector(".word-count-display");
let inputString;

WORD_COUNT_BTN.addEventListener("click", function(){
  inputString =WORD_COUNT_INPUT.value;
  wordCount(inputString);
});

function wordCount(inputString){
  // excluse start and end white-space
  inputString = inputString.replace(/(^\s*)|(\s*$)/gi, "");

  // convert 2 or more spaces to 1
  inputString = inputString.replace(/[ ]{2,}/gi, " ");

  // exclude newline with a start spacing
  inputString = inputString.replace(/\n /, "\n");

  //split at ' ', aka space
  return WORD_COUNT_DISPLAY.value = inputString.split(' ').length;
}
