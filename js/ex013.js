const ROMAN_NUM_INPUT = document.querySelector('#roman-num-input');
const ROMANIZE_BTN = document.querySelector("#romanize-convert-btn");
const ROMANIZE_RESET_BTN = document.querySelector("#romanize-reset");
const ROMANIZED_DISPLAY = document.querySelector("#roman-numeral-display");

ROMANIZE_BTN.addEventListener("click", romanize);
ROMANIZE_RESET_BTN.addEventListener("click", resetRomanized);

function romanize(num){
    num = Number(ROMAN_NUM_INPUT.value);

    //list out digits numbers
    let digitNum = [
        1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000
    ];

    //list of corresponding roman letters
    let romanLetters = [
        'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CDL', 'D', 'CM', 'M'
    ] 

    //create an empty string to store roman letters
    let romanNumeral = "";

    //start from biggest number, if digits is smaller than input number, substract digits from num
    //continue this for the entire length of the array, and cycle though each options, until input number equals 0
    for (i = 12; i >= 0; i--) {
        //while number is bigger than the digit numbers,
        while (num >= digitNum[i]) {
            //substract that number from input number
            num -= digitNum[i];
            // and grab the corresponding roman letter, and attach it to romanNumberal string
            romanNumeral += romanLetters[i];
        }
    }

    ROMANIZED_DISPLAY.innerHTML = romanNumeral;
    // return romanNumeral;
}

function resetRomanized(){
    ROMANIZED_DISPLAY.innerHTML = "";
    ROMAN_NUM_INPUT.value = "";
}