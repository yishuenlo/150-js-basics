//automatically create navigation list based on sections
const NAV_LIST  = document.querySelector("#nav-list");
const SECTIONS = document.querySelectorAll("section h3 a");

for (let i = 0; i <= SECTIONS.length; i++){
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
