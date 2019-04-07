const BIRTHYEARINPUT = document.querySelector("#birth-year");
const YEARLISTDISPLAY = document.querySelector("#sundayYearOutput");

const NUMYEARSDISPLAY = document.querySelector("#numYears");

const CALCHOLIDAYBTN = document.querySelector("#calculate-holiday");
const RESETHOLIDAYBTN = document.querySelector("#reset-holiday");

let jan1Sunday = []; //an empty array of january 1 sundays
let select = document.querySelector("#birth-year");
let currentYear = new Date().getFullYear();

//populate dropdown list
for(let i = currentYear; i >= currentYear-60; i--){
  let option = document.createElement("option");
  option.text = option.value = i;
  select.add(option, 0);
}

function calcMissingHolidays() {
  if (BIRTHYEARINPUT.value !== "") {
    let birthYear = Number(BIRTHYEARINPUT.value);

    //find jan 1 sundays between 2014 and 2050
    for (let year = birthYear + 6; year <= birthYear + 65; year++) {
      let jan1 = new Date(year, 0, 1); //year january 1

      //if january 1 is a sunday
      if (jan1.getDay() === 1 || jan1.getDay() === 5) {
        jan1Sunday.push(year); //store years in the array
        YEARLISTDISPLAY.innerHTML = `List of years: ${jan1Sunday.join(', ')}`; //display array as a list
      }
    }

    NUMYEARSDISPLAY.innerHTML = jan1Sunday.length; //display total years
    BIRTHYEARINPUT.disabled = true; //disable input to prevent change
  }
}

function resetHolidayCalc() {
  BIRTHYEARINPUT.disabled = false;
  jan1Sunday = [];
  YEARLISTDISPLAY.innerHTML = "";
  NUMYEARSDISPLAY.innerHTML = "";
  BIRTHYEARINPUT.value = currentYear;
}

RESETHOLIDAYBTN.addEventListener('mouseup', resetHolidayCalc);
CALCHOLIDAYBTN.addEventListener('mouseup', calcMissingHolidays);
