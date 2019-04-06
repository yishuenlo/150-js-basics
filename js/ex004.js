const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const side3 = document.querySelector("#side3");
const CALCULATE = document.querySelector("#calculate");
const RESET = document.querySelector("#reset-triangles");
const RESULT = document.querySelector("#triangle-area");

var a;
var b;
var c;

side1.addEventListener('change', function(e){
  a = Number(e.target.value);
})

side2.addEventListener('change', function(e){
  b = Number(e.target.value);
})

side3.addEventListener('change', function(e){
  c = Number(e.target.value);
})


CALCULATE.addEventListener('mouseup', function(){
    if(a > 0 && b > 0 && c > 0){
      var p = (a+b+c)/2;
      var area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
      var result = parseFloat(area.toFixed(2));
      console.log(result);

      RESULT.innerHTML = "Triangle Area: " + result;
  } else {
    RESULT.innerHTML = "Please enter three side lengths";
  }
})

RESET.addEventListener('mouseup', function(){
  a = 0;
  b = 0;
  c = 0;

  side1.value= "";
  side2.value= "";
  side3.value= "";
  RESULT.innerHTML = "Please enter three side lengths";
})
