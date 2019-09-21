// Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
// C = (5/9) * (F - 32)
// F = C * (9/5) + 32

const FAHRENHEIT_INPUT = document.querySelector("#fahrenheit");
const CELSIUS_INPUT = document.querySelector("#celsius");

// listen to F keyup, then run convertToCelsius function after 800 ms
FAHRENHEIT_INPUT.addEventListener('keyup', function(){
  setTimeout(convertToCelsius, 800);
})

// listen to C keyup, then run convertToFahrenheit function after 800 ms
CELSIUS_INPUT.addEventListener('keyup', function(){
  setTimeout(convertToFahrenheit, 800);
})

function convertToCelsius(fa){
  fa = Number(FAHRENHEIT_INPUT.value);
  let c = Math.floor((5/9) * (fa - 32));
  return CELSIUS_INPUT.value = c;
}

function convertToFahrenheit(cel){
  cel = Number(CELSIUS_INPUT.value);
  let fa = Math.floor(cel * (9/5) + 32);
  return FAHRENHEIT_INPUT.value = fa;
}

// function resetFahrenheitInput(){
//   FAHRENHEIT_INPUT.value = "";
//   clearTimeout(convertToCelsius);
// }
//
// function resetCelsiusInput(){
//   CELSIUS_INPUT.value = "";
//   clearTimeout(convertToFahrenheit);
// }
