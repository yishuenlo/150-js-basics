const SUNDAYYEARDISPLAY = document.querySelector("#sundayYearOutput");
const BIRTHYEARINPUT = document.querySelector("#birthYear");
const NUMYEARSDISPLAY = document.querySelector("#numYears");
let jan1Sunday = []; //an empty array of january 1 sundays


BIRTHYEARINPUT.addEventListener('change', function(e){
  if (this.value !== "") {
    let birthYear = Number(e.target.value);

    //find jan 1 sundays between 2014 and 2050
    for (let year = birthYear + 1; year <= birthYear + 80; year++) {
      let jan1 = new Date(year, 0, 1); //year january 1

      //if january 1 is a sunday
      if (jan1.getDay() === 0 || jan1.getDay() === 6) {
        jan1Sunday.push(year); //store years in the array
        SUNDAYYEARDISPLAY.innerHTML = `list of years: ${jan1Sunday.join(', ')}`; //display array as a list
      }
    }

    NUMYEARSDISPLAY.innerHTML = jan1Sunday.length;

  } else { //reset displays
    jan1Sunday = [];
    SUNDAYYEARDISPLAY.innerHTML = "";
    NUMYEARSDISPLAY.innerHTML = "";
  }})
