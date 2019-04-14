const DIGITAL_CLOCK = document.querySelector("#digital-clock");

function precedingZero(time){
  if(time <= 9){
    return `0${time}`;
  } else {
    return time;
  }
}

function displayTime(){
  let digitalTime = new Date();
  let digitalHr = digitalTime.getHours();
  let digitalMin = digitalTime.getMinutes();
  let digitalSec = digitalTime.getSeconds();
  var period;

  if (digitalHr >= 12){
    period = "PM";
  } else {
    period = "AM"
  }

  DIGITAL_CLOCK.innerHTML =  `${precedingZero(digitalHr)}:${precedingZero(digitalMin)}:${precedingZero(digitalSec)} ${period}`
}

window.onload = setInterval(displayTime, 1000);
