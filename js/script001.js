const dayOfWeek = document.querySelector("#day");
const timeOfDay = document.querySelector("#time");

let today = new Date();
let day = today.getDay(); //returns number 0-6
let month = today.getMonth(); //returns number 0-11
let date = today.getDate();
let year = today.getFullYear();

//create array of day
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//create array of month
let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// console.log("Today is " + dayList[day]);
dayOfWeek.innerHTML = dayList[day] + ", " + monthList[month] + " " + date + ", " + year;

let hour = today.getHours();
let min = today.getMinutes();

var period = (hour >= 12) ? "PM" : "AM";
// if(hour >=12 ){
//   period = " PM ";
// } else {
//   period = " AM ";
// }

hour = (hour > 12) ? hour - 12 : hour;
// if( hour >=12 ){
//   hour = hour -12;
// } else {
//   hour = hour;
// }

//add preceding 0;
if (min <= 9) {
  min = "0" + min;
}

// console.log("Current Time is " + hour + ":" + min + " " + period);
timeOfDay.innerHTML = hour + ":" + min + " " + period;
