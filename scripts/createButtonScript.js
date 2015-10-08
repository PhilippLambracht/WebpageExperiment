
document.getElementById("createButton").addEventListener("click", createFeatButtons);
document.getElementById("unaliveIt").addEventListener("click", unaliveIt);
document.getElementById("aliveIt").addEventListener("click", aliveIt);
document.getElementById("firstAbScore4").addEventListener("change", firstAbscoreClicked);
document.getElementById("secondAbScore4").addEventListener("change", secondAbscoreClicked);

function AddBewButton (){
alert('funtion triggert')
  var newButton = document.createElement("BUTTON");
  var buttonText =document.createTextNode("Hi, I am the new BUTTON");
  newButton.appendChild(buttonText);
  var featPara = document.getElementById("feats")
  featPara.appendChild(newButton);
}

function createFeatButtons (){
  //var lvls = parseFloat(document.getElementById('lvls').value);
  var lvlinput = parseFloat(document.getElementById('lvls').value);
  alert(lvlinput);

}

function makeAButton (lvl){
  //var lvls = parseFloat(document.getElementById('lvls').value);


}

function unaliveIt(){
  var target =  document.getElementById("happy");
  target.style.display ="none";
}

function aliveIt(){
  var target =  document.getElementById("happy");
  target.style.display ="";
}

function firstAbscoreClicked() {
  var secondAbScore = document.getElementById("secondAbScore4");
  // enable all Options in the other box
  for (var i = 0; i < secondAbScore.length ; i++){
    secondAbScore.options[i].disabled = false;
  }

  var disabledScore = document.getElementById("firstAbScore4").value;
  secondAbScore.options[disabledScore].disabled = true;
}
5

function secondAbscoreClicked() {
  var firstdAbScore = document.getElementById("firstAbScore4");
  // enable all Options in the other box
  for (var i = 0; i < firstdAbScore.length ; i++){
    firstdAbScore.options[i].disabled = false;
  }

  var disabledScore = document.getElementById("secondAbScore4").value;
  firstdAbScore.options[disabledScore].disabled = true;
}
