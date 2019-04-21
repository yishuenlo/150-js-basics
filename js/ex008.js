// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

const DISPLAY_RANDOM_NUM = document.querySelector("#computer-message"); //computer message
const USER_NUM_GUESS = document.querySelector(".user-input input"); //user input
const PREVIOUS_GUESSES = document.querySelectorAll(".previous-guess-visual span"); // list of guesses
const RESET_RANDOM_NUM = document.querySelector("#reset-random-num"); //button

var randomNum;
var inputNum;

//generate a random number
genRandomNum();

//listen to enter key, and grab user's input from USER_NUM_GUESS
USER_NUM_GUESS.addEventListener('keyup', function(e){
  if (e.keyCode == 13){

    inputNum = Number(this.value);

    if (inputNum <= 10){
      guessRandomNum(inputNum);
      PREVIOUS_GUESSES[0].innerHTML = inputNum;
    } else {
      DISPLAY_RANDOM_NUM.innerHTML =  "Pick a number between 1 & 10";
    }

  }
})


USER_NUM_GUESS.addEventListener('keypress', function(){
  DISPLAY_RANDOM_NUM.innerHTML = "press ENTER to guess";
})


// compaure USER_NUM_GUESS with randomNum
function guessRandomNum(inputNum){
  if (randomNum == inputNum){
    DISPLAY_RANDOM_NUM.innerHTML = "GOOD WORK!";
    USER_NUM_GUESS.disabled = true;
  } else if (randomNum > inputNum){
    DISPLAY_RANDOM_NUM.innerHTML = "Not matched. Number too low.";
  } else {
    DISPLAY_RANDOM_NUM.innerHTML = "Not matched. Number too high.";
  }
}

// record USER_NUM_GUESS and display it in PREVIOUS_GUESSES


// reset game when clicked on button
RESET_RANDOM_NUM.addEventListener('mouseup', function(){
  //generate a random number
  genRandomNum();

  USER_NUM_GUESS.disabled = false;

  DISPLAY_RANDOM_NUM.innerHTML = "GUESS A NUMBER!"
})

function genRandomNum(){
  USER_NUM_GUESS.value = "";
  randomNum = Math.floor(Math.random() * 10)
}
