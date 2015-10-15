
document.getElementById("createButton").addEventListener("click", createFeatButtons);
document.getElementById("unaliveIt").addEventListener("click", unaliveIt);
document.getElementById("aliveIt").addEventListener("click", aliveIt);
document.getElementById("firstAbScore4").addEventListener("change", firstAbscoreClicked);
document.getElementById("secondAbScore4").addEventListener("change", secondAbscoreClicked);
document.getElementById("createStuff").addEventListener("click", creatingStuff);

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

function creatingStuff(){
  var feat ="retrain a feat"
  var power = "retrain a power"
  var theme = "retrain a theme"

  for (var i = 2; i <= 30; i++) {

    var retrainpara = document.createElement("P");
    retrainpara.setAttribute("id","retrainLvl" + i);
    retrainpara.setAttribute("data-lvl",i);

    retrainpara.innerHTML = "Level " + i + " retrain: " ;
    //var paraText = document.createTextNode("Level " + i + " retrain: " );
    //retrainpara.appendChild(paraText);

    //Create retrain feat button
    var retrainFeat = document.createElement("BUTTON");
    retrainFeat.setAttribute("id", "retrainFeat" + i);
    retrainFeat.setAttribute("data-retFeat", i);
    var featText = document.createTextNode("retrain a feat");
    retrainFeat.appendChild(featText);
    retrainpara.appendChild(retrainFeat);

    //Create retrain Power button
    var retrainPower = document.createElement("BUTTON");
    retrainPower.setAttribute("id", "retrainPower" + i);
    retrainPower.setAttribute("data-retPower", i);
    var powerText = document.createTextNode("retrain a power");
    retrainPower.appendChild(powerText);
    retrainpara.appendChild(retrainPower);

    //Create retrain Theme button
    var retrainTheme = document.createElement("BUTTON");
    retrainTheme.setAttribute("id", "retrainTheme" + i);
    retrainTheme.setAttribute("data-retTheme", i);
    var themeText = document.createTextNode("retrain character theme");
    retrainTheme.appendChild(themeText);
    retrainpara.appendChild(retrainTheme);

    //Create reset button
    var retrainReset = document.createElement("BUTTON");
    retrainReset.setAttribute("id", "retrainReset" + i);
    retrainReset.setAttribute("data-retReset", i);
    var resetText = document.createTextNode("reset");
    retrainReset.appendChild(resetText);
    retrainpara.appendChild(retrainReset);

    var testParagraph = document.getElementById("testNode");
    testParagraph.appendChild(retrainpara);

  }

}
