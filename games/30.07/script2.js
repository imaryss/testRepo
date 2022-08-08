const letters = document.querySelectorAll(".alphabet");

const guessWord = [
  "rainbow",
  "sunshine",
  "absolute",
  "across",
  "adapt",
  "address",
  "adjust",
  "become",
  "black",
  "central",
  "degree",
  "detailed",
  "emergency",
  "enter",
  "fate",
];
let randomWord =
  guessWord[Math.floor(Math.random() * guessWord.length - 1) + 1];
console.log(randomWord);
let filledString = "";
let symbol = "#";
for (let j = 0; j <= randomWord.length - 1; j++) {
  filledString += symbol;
}

let idA = document.querySelector("#A");
let idB = document.querySelector("#B");
let idC = document.querySelector("#C");
let idD = document.querySelector("#D");
let idE = document.querySelector("#E");
let idF = document.querySelector("#F");
let idG = document.querySelector("#G");
let idH = document.querySelector("#H");
let idI = document.querySelector("#I");
let idJ = document.querySelector("#J");
let idK = document.querySelector("#K");
let idL = document.querySelector("#L");
let idM = document.querySelector("#M");
let idN = document.querySelector("#N");
let idO = document.querySelector("#O");
let idP = document.querySelector("#P");
let idQ = document.querySelector("#Q");
let idR = document.querySelector("#R");
let idS = document.querySelector("#S");
let idT = document.querySelector("#T");
let idW = document.querySelector("#W");
let idX = document.querySelector("#X");
let idY = document.querySelector("#Y");
let idZ = document.querySelector("#Z");

idA.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});

idB.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idC.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idD.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idE.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idF.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idG.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idH.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idI.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idJ.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idK.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idL.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idM.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idN.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idO.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idP.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idQ.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idR.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idS.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idT.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idW.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idX.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idY.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
idZ.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});
let word4 = "";
letters.forEach((element) => {
  element.addEventListener("click", function () {
    for (var i = 0; i <= randomWord.length - 1; i++) {
      if (element.innerHTML.toLowerCase() == randomWord[i]) {
        word4 += randomWord[i];
      } else if (element.innerHTML.toLowerCase() !== randomWord[i]) {
        word4 += "#";
        randomWord[i] = "#";
        console.log("else if");
      } else {
        // randomWord[i] = "#";
        console.log("else");
      }
    }
    console.log(word4);
  });
});
// else if randomword[i]="#"
// const word1 = "sunshine";
// let word2 = "########";
// let word3 = "";
// let letter = "n";
// for (var i = 0; i <= word1.length - 1; i++) {
//   word1[i] == letter ? (word3 = word3 + word1[i]) : (word3 = word3 + "#");
// }
// console.log(word3);
// word2 = word3;
// console.log(word2);

//*----------------------REVIN IN 2 MINUTE---------------------------
