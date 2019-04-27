var xmasToday = new Date();
const xmas = new Date(xmasToday.getFullYear(), 11, 25);

const XMAS_DAYS = document.querySelector("#xmas-day");
const XMAS_HR = document.querySelector("#xmas-hr");
const XMAS_MIN = document.querySelector("#xmas-min");
const XMAS_SEC = document.querySelector("#xmas-sec");

// if today is after 12/25, add another year
if (xmasToday.getMonth() == 11 && today.getDate() > 25){
  xmas.setFullYear(xmas.getFullYear() + 1);
}

const ONE_DAY = 24 * 60 * 60 * 1000; //one day = 86,400,000 milliseconds

// Date().getTime() is in milliseconds, use days as calculation base.
var xmasCountdown = Math.ceil((xmas.getTime() - xmasToday.getTime())); // in milliseconds

//convert milliseconds to days
var dayLeftDecimal = xmasCountdown / ONE_DAY;
var dayLeftInteger = Math.floor(dayLeftDecimal);

//convert days decimals to hours
var hourLeftDecimal = (dayLeftDecimal - dayLeftInteger)*24;
var hourLeftInteger = Math.floor(hourLeftDecimal);

//convert hours decimals to minutes
var minLeftDecimal = (hourLeftDecimal - hourLeftInteger) * 60;
var minLeftInteger = Math.floor(minLeftDecimal);


XMAS_DAYS.innerHTML = dayLeftInteger;
XMAS_HR.innerHTML = hourLeftInteger;
XMAS_MIN.innerHTML = minLeftInteger;
