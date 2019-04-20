// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

const DISPLAY_RANDOM_NUM = document.querySelector("#computer-message"); //computer message
const USER_NUM_GUESS = document.querySelector(".user-input input"); //user input
const PREVIOUS_GUESSES = document.querySelectorAll(".previous-guess-visual span"); // list of guesses
const RESET_RANDOM_NUM = document.querySelector("#ex008 button"); //button

var randomNum;
var inputNum;

genRandomNum();

function genRandomNum(){
  randomNum = Math.floor(Math.random() * 10)
}

function guessRandomNum(inputNum){
  if (randomNum == inputNum){
    console.log("Good work!");
    genRandomNum();
  } else if (randomNum > inputNum){
    console.log("Not matched. Number too low.");
  } else {
    console.log("Not matched. Number too high.");
  }
}
