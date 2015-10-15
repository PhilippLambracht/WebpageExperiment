



createRetrainingButtons();
initAbilityScores();
initLevel();

//Creates the buttons for retraining
function createRetrainingButtons(){
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

    var parentNode = document.getElementById("retraining");
    parentNode.appendChild(retrainpara);
  }

}

//Init ability scores
function initAbilityScores(){
  document.getElementById("strScoreField").innerHTML= document.getElementById("strSelect").value;
  document.getElementById("conScoreField").innerHTML= document.getElementById("conSelect").value;
  document.getElementById("dexScoreField").innerHTML= document.getElementById("dexSelect").value;
  document.getElementById("intScoreField").innerHTML= document.getElementById("intSelect").value;
  document.getElementById("wisScoreField").innerHTML= document.getElementById("wisSelect").value;
  document.getElementById("chaScoreField").innerHTML= document.getElementById("chaSelect").value;

  var strScore = parseFloat(document.getElementById('strScoreField').innerHTML);
  var conScore = parseFloat(document.getElementById('conScoreField').innerHTML);
  var dexScore = parseFloat(document.getElementById('dexScoreField').innerHTML);
  var intScore = parseFloat(document.getElementById('intScoreField').innerHTML);
  var wisScore = parseFloat(document.getElementById('wisScoreField').innerHTML);
  var chaScore = parseFloat(document.getElementById('chaScoreField').innerHTML);

  var strMod = Math.floor(strScore /2) -5;
  var conMod = Math.floor(conScore /2) -5;
  var dexMod = Math.floor(dexScore /2) -5;
  var intMod = Math.floor(intScore /2) -5;
  var wisMod = Math.floor(wisScore /2) -5;
  var chaMod = Math.floor(chaScore /2) -5;

  document.getElementById('strMod').innerHTML = strMod;
  document.getElementById('conMod').innerHTML = conMod;
  document.getElementById('dexMod').innerHTML = dexMod;
  document.getElementById('intMod').innerHTML = intMod;
  document.getElementById('wisMod').innerHTML = wisMod;
  document.getElementById('chaMod').innerHTML = chaMod;
}

function initLevel(){
  var visibleElements = document.querySelectorAll('[data-lvl]');
  var lvl = parseFloat(document.getElementById('lvl').value);
  //calcLvlBonus();
  //abilPlusToAll();
  for(var i = 0 ; i < visibleElements.length; i++){
      if(parseFloat(visibleElements[i].getAttribute("data-lvl")) <= lvl){
        visibleElements[i].style.display ="";
      } else{
          visibleElements[i].style.display ="none";
      }
  }
}
