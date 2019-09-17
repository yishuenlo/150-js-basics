// Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
// C = (5/9) * (F - 32)
// F = C * (9/5) + 32

function convertToCelsius(fa){
  let c = Math.floor((5/9) * (fa - 32));
  return `${fa} degrees Fahrenheit is ${c} degrees Celsius`;
}

function convertToFahrenheit(cel){
  let fa = Math.floor(cel * (9/5) + 32);
  return `${cel} degrees Celsius is ${fa} degrees Fahrenheit`;
}
