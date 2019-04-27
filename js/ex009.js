var xmasToday = new Date();
const xmas = new Date(xmasToday.getFullYear(), 11, 25);

const XMAS_DAYS = document.querySelector("#xmas-day");
const XMAS_HR = document.querySelector("#xmas-hr");
const XMAS_MIN = document.querySelector("#xmas-min");
const XMAS_SEC = document.querySelector("#xmas-sec");

// Date().getTime() is in milliseconds, use secnod as calculation base.
var secLeft = Math.ceil((xmas.getTime() - xmasToday.getTime())/1000);

const ONE_DAY = 24 * 60 * 60; //one day = 86400 seconds
const ONE_HOUR = 60 * 60; // one hour = 3600 seconds
const ONE_MINUTE = 60; //one minute = 60 seconds

// if today is after 12/25, add another year
if (xmasToday.getMonth() == 11 && today.getDate() > 25){
  xmas.setFullYear(xmas.getFullYear() + 1);
}

var dayLeft = Math.floor(secLeft / ONE_DAY);
var hourLeft = Math.floor((secLeft / ONE_DAY - dayLeft)*60);
var minLeft = Math.floor(((secLeft / ONE_DAY - dayLeft)*60-hourLeft)*60);

XMAS_DAYS.innerHTML = dayLeft;
XMAS_HR.innerHTML = hourLeft;
XMAS_MIN.innerHTML = minLeft;
