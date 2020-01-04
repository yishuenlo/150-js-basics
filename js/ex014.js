const ROT13_INPUT = document.querySelector('#ROT13-input');
const ROT13_DISPLAY = document.querySelector('#ROT13-numeral-display');
const ROT13_ENCODE_BTN = document.querySelector('#ROT13-encode-btn');

let alphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

let nonCharacter = /[\W]/gi;

ROT13_ENCODE_BTN.addEventListener('click', encoding);

function encoding(){
    let array = ROT13_INPUT.value.toUpperCase().split('');
    let encodedMessage = "";

    for (let i = 0; i < array.length; i++) {
        //if it's a character
        if (!nonCharacter.test(array[i])) {
            //grab it's current index location
            let codeIndex = alphabets.indexOf(array[i]);

            //shift it 13 units
            let encodedIndex = codeIndex + 13;
            if (encodedIndex > 25) {
                encodedIndex -= 26;
            }

            encodedMessage += alphabets[encodedIndex];
        } else {
            encodedMessage += array[i];
        }
    }
    ROT13_DISPLAY.innerHTML = encodedMessage;
    return encodedMessage;
}


