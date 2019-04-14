const DIGITAL_CLOCK = document.querySelector("#digital-clock");
const TAIPEI_BTN = document.querySelector("#taipei");
const LONDON_BTN = document.querySelector("#london");
const MYLOCATION_BTN = document.querySelector("#my-location");

MYLOCATION_BTN.style.opacity = "1";

let tpeTimeZone = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
let timeZone;
var interval;



function precedingZero(time){
  if(time <= 9){
    return `0${time}`;
  } else {
    return time;
  }
}

// function setTimeZone(location){
//   timeZone = new Date().toLocaleString("en-US", {timeZone: location});
//   return timeZone = new Date(timeZone);
// }

function setTimeZone(location){
  // let digitalTime = new Date();
  timeZone = new Date().toLocaleString("en-US", {timeZone: location});
  timeZone = new Date(timeZone);

  let digitalHr = timeZone.getHours();
  let digitalMin = timeZone.getMinutes();
  let digitalSec = timeZone.getSeconds();
  var period;

  if (digitalHr >= 12){
    period = "PM";
  } else {
    period = "AM"
  }

  DIGITAL_CLOCK.innerHTML =  `${precedingZero(digitalHr)}:${precedingZero(digitalMin)}:${precedingZero(digitalSec)} ${period}`
}

//default time - current location
window.onload = setTimeZone();
interval = setInterval(setTimeZone, 1000);

function resetTimeZone(){
  clearInterval(interval);
  timeZone = "";
  TAIPEI_BTN.style.opacity = "0.6";
  LONDON_BTN.style.opacity = "0.6";
  MYLOCATION_BTN.style.opacity = "0.6";
}

TAIPEI_BTN.addEventListener('mouseup', function(){
  resetTimeZone();
  window.onload = setTimeZone("Asia/Shanghai");
  interval = setInterval(setTimeZone, 1000, "Asia/Shanghai"); //run time every second
  this.style.opacity = "1";
})

LONDON_BTN.addEventListener('mouseup', function(){
  resetTimeZone();
  window.onload = setTimeZone("Europe/London");
  interval = setInterval(setTimeZone, 1000, "Europe/London"); //run time every second
  this.style.opacity = "1";
})

MYLOCATION_BTN.addEventListener('mouseup', function(){
  resetTimeZone();
  window.onload = setTimeZone();
  interval = setInterval(setTimeZone, 1000); //run time every second
  this.style.opacity = "1";
})

// window.onload = setTimeZone("Europe/London");
// setInterval(setTimeZone, 1000, "Europe/London");

// Taipei = "Asia/Shanghai"
// london = "Europe/London"
