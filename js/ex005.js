const MARQUEE = document.querySelector("#marquee");
let text = MARQUEE.innerHTML;

window.onload = () => {
  setInterval(runningMarquee, 500);
}

function runningMarquee() {
  text = text[text.length - 1] + text.substring(0, text.length - 1);
  MARQUEE.innerHTML = text;
}
