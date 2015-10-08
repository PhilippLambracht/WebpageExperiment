
//Init applies
document.getElementById("classInfoApply").addEventListener("click", lvlVisibilties);
document.getElementById("abilityApply").addEventListener("click", calcAbilityScores);

//Init ability changes
document.getElementById("strSelect").addEventListener("change", changeAbil);
document.getElementById("conSelect").addEventListener("change", changeAbil);
document.getElementById("dexSelect").addEventListener("change", changeAbil);
document.getElementById("intSelect").addEventListener("change", changeAbil);
document.getElementById("wisSelect").addEventListener("change", changeAbil);
document.getElementById("chaSelect").addEventListener("change", changeAbil);

//Init Ability scores
document.getElementById("strScoreField").innerHTML= document.getElementById("strSelect").value;
document.getElementById("conScoreField").innerHTML= document.getElementById("conSelect").value;
document.getElementById("dexScoreField").innerHTML= document.getElementById("dexSelect").value;
document.getElementById("intScoreField").innerHTML= document.getElementById("intSelect").value;
document.getElementById("wisScoreField").innerHTML= document.getElementById("wisSelect").value;
document.getElementById("chaScoreField").innerHTML= document.getElementById("chaSelect").value;

var abilityScoreMap = new Map();
abilityScoreMap.set(8, -2);
abilityScoreMap.set(9, -1);
abilityScoreMap.set(10, 0);
abilityScoreMap.set(11, 1);
abilityScoreMap.set(12, 2);
abilityScoreMap.set(13, 3);
abilityScoreMap.set(14, 5);
abilityScoreMap.set(15, 7);
abilityScoreMap.set(16, 9);
abilityScoreMap.set(17, 12);
abilityScoreMap.set(18, 16);

var allLvl11Bonus = 0;
var allLvl21Bonus = 0;
var racialBonus = 0;
var etcBonus = 0;
//
var lvl4AbilBonus =  document.querySelectorAll('[data-lvl4Check]');
var lvl8AbilBonus =  document.querySelectorAll('[data-lvl8Check]');
var lvl14AbilBonus =  document.querySelectorAll('[data-lvl14Check]');
var lvl18AbilBonus =  document.querySelectorAll('[data-lvl18Check]');
var lvl24AbilBonus =  document.querySelectorAll('[data-lvl24Check]');
var lvl28AbilBonus =  document.querySelectorAll('[data-lvl28Check]');

for(var i= 0; i < 6; i++){
  lvl4AbilBonus[i].addEventListener("click", abilClicked);
  lvl8AbilBonus[i].addEventListener("click", abilClicked);
  lvl14AbilBonus[i].addEventListener("click", abilClicked);
  lvl18AbilBonus[i].addEventListener("click", abilClicked);
  lvl24AbilBonus[i].addEventListener("click", abilClicked);
  lvl28AbilBonus[i].addEventListener("click", abilClicked);
}







function lvlVisibilties(){

  var visibleElements = document.querySelectorAll('[data-lvl]');
  var lvl = parseFloat(document.getElementById('lvl').value);
  calcLvlBonus();
  abilPlusToAll();
  for(var i = 0 ; i < visibleElements.length; i++){
      if(parseFloat(visibleElements[i].getAttribute("data-lvl")) <= lvl){
        visibleElements[i].style.display ="";
      } else{
          visibleElements[i].style.display ="none";
      }
  }
}

function changeAbil(){
  var strPoints = parseFloat(document.getElementById("strSelect").value);
  var conPoints = parseFloat(document.getElementById("conSelect").value);
  var dexPoints = parseFloat(document.getElementById("dexSelect").value);
  var intPoints = parseFloat(document.getElementById("intSelect").value);
  var wisPoints = parseFloat(document.getElementById("wisSelect").value);
  var chaPoints = parseFloat(document.getElementById("chaSelect").value);

  var pointsSpent = 2 + abilityScoreMap.get(strPoints) + abilityScoreMap.get(conPoints) + abilityScoreMap.get(dexPoints) + abilityScoreMap.get(intPoints) + abilityScoreMap.get(wisPoints) + abilityScoreMap.get(chaPoints)
  document.getElementById("pointsSpend").innerHTML = pointsSpent;
}

function calcAbilityScores(){
  abilityScoreStr = parseFloat(document.getElementById("strSelect").value) + sumLvlBonus("STR") + allLvl11Bonus + allLvl21Bonus + racialBonus + etcBonus;
  abilityScoreCon = parseFloat(document.getElementById("conSelect").value) + sumLvlBonus("CON") + allLvl11Bonus + allLvl21Bonus + racialBonus + etcBonus;
  abilityScoreDex = parseFloat(document.getElementById("dexSelect").value) + sumLvlBonus("DEX") + allLvl11Bonus + allLvl21Bonus + racialBonus + etcBonus;
  abilityScoreInt = parseFloat(document.getElementById("intSelect").value) + sumLvlBonus("INT") + allLvl11Bonus + allLvl21Bonus + racialBonus + etcBonus;
  abilityScoreWis = parseFloat(document.getElementById("wisSelect").value) + sumLvlBonus("WIS") + allLvl11Bonus + allLvl21Bonus + racialBonus + etcBonus;
  abilityScoreCha = parseFloat(document.getElementById("chaSelect").value) + sumLvlBonus("CHA") + allLvl11Bonus + allLvl21Bonus + racialBonus + etcBonus;

  document.getElementById("strScoreField").innerHTML= abilityScoreStr;
  document.getElementById("conScoreField").innerHTML= abilityScoreCon;
  document.getElementById("dexScoreField").innerHTML= abilityScoreDex;
  document.getElementById("intScoreField").innerHTML= abilityScoreInt;
  document.getElementById("wisScoreField").innerHTML= abilityScoreWis;
  document.getElementById("chaScoreField").innerHTML= abilityScoreCha;
  calcAbilMod();
  isAbilScoreLegit();

}

// A Helper function that calc the chosen abilities for the lvls 4,8,...
function sumLvlBonus (abilityScore){

  if (abilityScore.localeCompare("STR") === 0){
    var lvlBonus = document.querySelectorAll('[data-strChecked]');
    var sum = 0;
    for (var i = 0; i < lvlBonus.length; i++) {
      if (lvlBonus[i].checked == true){
        sum++;
      }
    }
    return sum;

  } else if (abilityScore.localeCompare("CON") === 0) {
    var lvlBonus = document.querySelectorAll('[data-conChecked]');
    var sum = 0;
    for (var i = 0; i < lvlBonus.length; i++) {
      if (lvlBonus[i].checked == true){
        sum++;
      }
    }
    return sum;

  } else if (abilityScore.localeCompare("DEX") === 0){
    var lvlBonus = document.querySelectorAll('[data-dexChecked]');
    var sum = 0;
    for (var i = 0; i < lvlBonus.length; i++) {
      if (lvlBonus[i].checked == true){
        sum++;
      }
    }
    return sum;

  } else if (abilityScore.localeCompare("INT") === 0){
    var lvlBonus = document.querySelectorAll('[data-intChecked]');
    var sum = 0;
    for (var i = 0; i < lvlBonus.length; i++) {
      if (lvlBonus[i].checked == true){
        sum++;
      }
    }
    return sum;

  } else if (abilityScore.localeCompare("WIS") === 0){
    var lvlBonus = document.querySelectorAll('[data-wisChecked]');
    var sum = 0;
    for (var i = 0; i < lvlBonus.length; i++) {
      if (lvlBonus[i].checked == true){
        sum++;
      }
    }
    return sum;

  } else if (abilityScore.localeCompare("CHA") === 0){
    var lvlBonus = document.querySelectorAll('[data-chaChecked]');
    var sum = 0;
    for (var i = 0; i < lvlBonus.length; i++) {
      if (lvlBonus[i].checked == true){
        sum++;
      }
    }
    return sum;

  } else {
    alert('Something is wrong');
  }

}

//allows only to clicks on Ability Bonuses per LVL
function abilClicked (){
  var allLvlAbiBonus = [lvl4AbilBonus, lvl8AbilBonus, lvl14AbilBonus, lvl18AbilBonus, lvl24AbilBonus, lvl28AbilBonus];

  for (var i = 0 ; i< allLvlAbiBonus.length; i++){
    var clicked = 0;
    for ( var j= 0; j <allLvlAbiBonus[i].length; j++){
      if (allLvlAbiBonus[i][j].checked == true){
        clicked++
      }
      if (clicked > 2){
        alert('please select only 2 ability scores')
        allLvlAbiBonus[i][j].checked = false;
        break;
      }
    }

  }
}

// clac lvl Bonus
function calcLvlBonus() {
  var lvl = parseFloat(document.getElementById('lvl').value);
  document.getElementById("strLvlBonus").innerHTML= Math.floor(lvl /2);
  document.getElementById("conLvlBonus").innerHTML= Math.floor(lvl /2);
  document.getElementById("dexLvlBonus").innerHTML= Math.floor(lvl /2);
  document.getElementById("intLvlBonus").innerHTML= Math.floor(lvl /2);
  document.getElementById("wisLvlBonus").innerHTML= Math.floor(lvl /2);
  document.getElementById("chaLvlBonus").innerHTML= Math.floor(lvl /2);
}

//Helperfunction to set Bonus to all abilities on 11, 21
function abilPlusToAll(){
  allLvl11Bonus=0;
  allLvl21Bonus=0;
  var lvl = parseFloat(document.getElementById('lvl').value);

  if (lvl >= 11) {
      allLvl11Bonus = 1;
      allLvl21Bonus = 0;
  }
  if (lvl >= 21) {
    allLvl11Bonus = 1;
    allLvl21Bonus = 1;
  }

}
function calcAbilMod() {
  var strScore = parseFloat(document.getElementById('strScoreField').innerHTML);
  var conScore = parseFloat(document.getElementById('conScoreField').innerHTML);
  var dexScore = parseFloat(document.getElementById('dexScoreField').innerHTML);
  var intScore = parseFloat(document.getElementById('intScoreField').innerHTML);
  var wisScore = parseFloat(document.getElementById('wisScoreField').innerHTML);
  var chaScore = parseFloat(document.getElementById('chaScoreField').innerHTML);

  var strMod = Math.floor(strScore /2) -5;
  var conMod = (conScore /2) -5;
  var dexMod = (dexScore /2) -5;
  var intMod = (intScore /2) -5;
  var wisMod = (wisScore /2) -5;
  var chaMod = (chaScore /2) -5;

  document.getElementById('strMod').innerHTML = strMod;
  document.getElementById('conMod').innerHTML = conMod;
  document.getElementById('dexMod').innerHTML = dexMod;
  document.getElementById('intMod').innerHTML = intMod;
  document.getElementById('wisMod').innerHTML = wisMod;
  document.getElementById('chaMod').innerHTML = chaMod;


}

function isAbilScoreLegit(){
  var pointsSpend  = parseFloat(document.getElementById('pointsSpend').innerHTML);
  var abilSelects = document.querySelectorAll('[data-abilScoreChoose]');
  var eightCount = 0;
  if (pointsSpend>22) {
    document.getElementById('legit').innerHTML = "Too many Points, cheater";
  }
  for (var i = 0; i < abilSelects.length; i++) {
    if(parseFloat(abilSelects[i].value)===8){
      eightCount++
    }
  }
  if (eightCount ===2) {
    document.getElementById('legit').innerHTML = "Only one Score can be set to 8, learn the rules";
  }

}
