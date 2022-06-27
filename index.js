let randomNumber1 = Math.floor( Math.random() * 6 ) +1;
console.log(randomNumber1);

dice1 = "images/dice"+randomNumber1+".png"
console.log(dice1);
document.querySelector(".img1").setAttribute("src", dice1);


let randomNumber2 = Math.floor( Math.random() * 6 ) +1;
console.log(randomNumber2);

dice2 = "images/dice"+randomNumber2+".png"
console.log(dice2);
document.querySelector(".img2").setAttribute("src", dice2);

  var naslov = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  naslov.innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  naslov.innerHTML = "Player 2 Wins!🚩";
}
else {
  naslov.innerHTML = "Draw!";
}
