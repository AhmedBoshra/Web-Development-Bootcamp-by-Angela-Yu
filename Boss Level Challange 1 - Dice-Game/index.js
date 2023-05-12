var randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);

var randomImageSourceOne = "images/dice" + randomNumber1 + ".png";
var randomImageSourceTwo = "images/dice" + randomNumber2 + ".png";

var imageOne = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomImageSourceOne);

var imageTwo = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSourceTwo);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
