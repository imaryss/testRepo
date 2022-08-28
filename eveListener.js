//^Event lISTENERS
//element.addEventListener('clik', function);--------Syntax--------
const button2 = document.querySelector(".btn-2");
function alertBtn() {
  alert("you re not your code");
}
button2.addEventListener("click", alertBtn);

//^MouseOver
const newBackgroundColor = document.querySelector(".box-3");
function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "aquamarine";
}
newBackgroundColor.addEventListener("mouseover", changeBgColor);
//^REVEAL EVENT
const revealEBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function(){
  if()
}