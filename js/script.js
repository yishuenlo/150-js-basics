window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0;};

//automatically create navigation list based on sections
const NAV_LIST  = document.querySelector("#nav-list");
const SECTIONS = document.querySelectorAll("section h3 a");
const TILES = document.querySelectorAll("section");

for (let i = 0; i <= SECTIONS.length-1; i++){
  var newLi = document.createElement("li");
  var newAnchor = document.createElement("a");

  //title of sections
  var newTitle = document.createTextNode(SECTIONS[i].innerHTML);

  //id of sections
  var navHref = "#ex" + SECTIONS[i].innerHTML.slice(0, 3);

  //set up anchor tag with proper class and href attributes
  newAnchor.appendChild(newTitle);
  newAnchor.setAttribute("class", "nav-link");
  newAnchor.setAttribute("href", navHref);

  // insert anchor tag within li tag
  newLi.append(newAnchor);

  //insert li tag within ul
  NAV_LIST.appendChild(newLi);
}


//change border color when section is selected
var currentAddress;
var focusedAddress;

window.addEventListener("hashchange", function(){
  currentAddress = window.location.hash;

  for(let i = 0; i <= TILES.length-1; i++){
    focusedAddress = `#ex${SECTIONS[i].innerHTML.slice(0,3)}`

    //check for url address
    //highlights border then fades - using CSS
    if(currentAddress == focusedAddress){
      TILES[i].classList.add("focus-animate");
      // TILES[i].style.borderColor = "#FFB300";
      // TILES[i].style.borderWidth = "2px";
    } else {
      TILES[i].classList.remove("focus-animate");
    }

    // else {
    //   TILES[i].style.borderColor = "rgba(131, 131, 131, 0.2)";
    //   TILES[i].style.borderWidth = "1px";
    // }
  }
})

function resizeMaonsryItem(item){
  var grid = document.querySelectorAll('.masonry')[0],
      rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
      rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

  var rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

  item.style.gridRowEnd = 'span '+rowSpan;
}

//open new tab if link starts with http
const ANCHOR_TAGS = document.querySelectorAll('a');
let anchorHref = ANCHOR_TAGS[0].getAttribute('href');
anchorHref = anchorHref.slice(0,4);

for(i=0; i<ANCHOR_TAGS.length; i++){
  if (anchorHref == 'http') {
    ANCHOR_TAGS[i].setAttribute("target", "_blank");
  };
};

