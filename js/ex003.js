const DIGITAL_CLOCK = document.querySelector("#digital-clock");
const LOCATIONS_LIST = document.querySelectorAll(".locations p");

let timeZone;
let interval;

//create an array of toLocalString timezone property
//leave first as empty for local time
let locationList = [, "Europe/London", "Asia/Shanghai"];

//make sure Local is darker, indicating it is selected
LOCATIONS_LIST[0].classList.add("world-location-selected");

//default time to display current location
window.onload = setTimeZone();
interval = setInterval(setTimeZone, 1000);

function precedingZero(time){
  if(time <= 9){
    return `0${time}`;
  } else {
    return time;
  }
}

function setTimeZone(location){
  // let digitalTime = new Date();
  timeZone = new Date().toLocaleString("en-US", {timeZone: location});
  timeZone = new Date(timeZone);

  let digitalHr = timeZone.getHours();
  let digitalMin = timeZone.getMinutes();
  let digitalSec = timeZone.getSeconds();

  //standard time display
  var period = (digitalHr >= 12) ? "PM" : "AM";
  digitalHr = (digitalHr > 12) ? digitalHr - 12 : digitalHr; //not military time
  digitalHr = (digitalHr == 0) ? 12 : digitalHr; //display 12am instead of 00am

  //display in HTML
  DIGITAL_CLOCK.innerHTML =  `${precedingZero(digitalHr)}:${precedingZero(digitalMin)}:${precedingZero(digitalSec)} ${period}`
}

function resetTimeZone(){
  clearInterval(interval);
  timeZone = ""; //reset time to local zone
  LOCATIONS_LIST.forEach((text) => {
    text.classList.remove("world-location-selected");
  })
}

//listen to click on location list
for (let i = 0; i <= locationList.length-1; i++){
  LOCATIONS_LIST[i].addEventListener('mouseup', function(){
    resetTimeZone();
    window.onload = setTimeZone(locationList[i]);
    interval = setInterval(setTimeZone, 1000, locationList[i]); //run time every second
    this.classList.add("world-location-selected");
  })
}
