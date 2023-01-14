//FOR DICE 1
var randomNumber1 = Math.random()*5 + 1;
randomNumber1 = Math.floor(randomNumber1);
var diceImage1 = "resources/dice"+randomNumber1+".png";
document.getElementById("image1").setAttribute("src",diceImage1);


//FOR DICE 2
var randomNumber2 = Math.random()*5 + 1;
randomNumber2 = Math.floor(randomNumber2);
var diceImage2 = "resources/dice"+randomNumber2+".png";
document.getElementById("image2").setAttribute("src",diceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Match Drawn";
}





