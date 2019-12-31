const DISPLAY_RANDOM_NUM = document.querySelector("#guess-message"); //computer message
const USER_NUM_GUESS = document.querySelector(".user-input input"); //user input
const PREVIOUS_GUESS = document.querySelector(".previous-guess span");
const RESET_RANDOM_NUM = document.querySelector(".reset-random-num"); //button

var randomNum = 5;
var inputNum;

//generate a random number
genRandomNum();

//listen to enter key, and grab user's input from USER_NUM_GUESS
USER_NUM_GUESS.addEventListener('keyup', function(e) {
  if (e.keyCode == 13) {

    inputNum = Number(this.value);

    if (inputNum <= 10) {
      guessRandomNum(inputNum);
      PREVIOUS_GUESS.innerHTML = inputNum;
    } else {
      DISPLAY_RANDOM_NUM.innerHTML = "Pick a number between 1 & 10";
    }

  }
})

USER_NUM_GUESS.addEventListener('keypress', function() {
  DISPLAY_RANDOM_NUM.innerHTML = "press ENTER to guess";
})

// compaure USER_NUM_GUESS with randomNum
function guessRandomNum(inputNum) {
  if (randomNum == inputNum) {
    DISPLAY_RANDOM_NUM.innerHTML = "GOOD WORK!";
    USER_NUM_GUESS.disabled = true;
    RESET_RANDOM_NUM.classList.remove("reset-random-num")
    RESET_RANDOM_NUM.classList.add("reset-random-num-highlight");
  } else if (randomNum > inputNum) {
    DISPLAY_RANDOM_NUM.innerHTML = "Not matched. Number too low.";
  } else {
    DISPLAY_RANDOM_NUM.innerHTML = "Not matched. Number too high.";
  }
}


// reset game when clicked on button
RESET_RANDOM_NUM.addEventListener('mouseup', function() {
  //generate a random number
  genRandomNum();

  // reset input and buttons
  USER_NUM_GUESS.disabled = false;
  RESET_RANDOM_NUM.classList.remove("reset-random-num-highlight");
  RESET_RANDOM_NUM.classList.add("reset-random-num")

  //reset HTML display
  DISPLAY_RANDOM_NUM.innerHTML = "GUESS A NUMBER!"
  PREVIOUS_GUESS.innerHTML = "";
})

//generate a random number
function genRandomNum() {
  USER_NUM_GUESS.value = "";
  randomNum = Math.floor(Math.random() * 10)
}
