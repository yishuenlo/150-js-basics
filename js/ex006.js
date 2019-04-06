// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.

const YEARINPUT = document.querySelector("#leapYearInput");
const YEARDISPLAY = document.querySelector("#leapYearDisplay");
var leapYear;

YEARINPUT.addEventListener('keyup', function(e) {
  if(YEARINPUT.value == ""){
    YEARDISPLAY.innerHTML = "Leap Year?";
    clearTimeout(isLeapYear);
  } else {
    leapYear = Number(e.target.value);
    setTimeout(isLeapYear, 1500);
  }
})

function isLeapYear(year) {
  let leapYearResult = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
  return YEARDISPLAY.innerHTML = `Leap Year? ${leapYearResult}`;
}
