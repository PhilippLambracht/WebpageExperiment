
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

var trainedCheckfields =  document.querySelectorAll('[data-trained]');

for (var i = 0; i < trainedCheckfields.length; i++) {
  trainedCheckfields[i].addEventListener("click",clalcSkillpoints);
}
//Global variables

// A Map with the Pointbuy values
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

// A map with skills and their ability mod

var skillsWithAbilMods = new Map();
skillsWithAbilMods.set("Acrobatics", "dexMod");
skillsWithAbilMods.set("Arcana" , "intMod");
skillsWithAbilMods.set("Athletics", "strMod");
skillsWithAbilMods.set("Bluff", "chaMod");
skillsWithAbilMods.set("Diplomacy", "chaMod");
skillsWithAbilMods.set("Dungeoneering", "conMod");
skillsWithAbilMods.set("Endurance", "conMod");
skillsWithAbilMods.set("Heal", "wisMod");
skillsWithAbilMods.set("History", "intMod");
skillsWithAbilMods.set("Insight", "wisMod");
skillsWithAbilMods.set("Intimidate", "chaMod");
skillsWithAbilMods.set("Nature", "wisMod");
skillsWithAbilMods.set("Perception", "wisMod");
skillsWithAbilMods.set("Religion", "intMod");
skillsWithAbilMods.set("Stealth", "dexMod");
skillsWithAbilMods.set("Streetwise", "chaMod");
skillsWithAbilMods.set("Thievery", "dexMod");

// A map with skills misc Bonus

var skillMiscBonus = new Map();
skillMiscBonus.set("Acrobatics", 0);
skillMiscBonus.set("Arcana" , 0);
skillMiscBonus.set("Athletics", 0);
skillMiscBonus.set("Bluff", 0);
skillMiscBonus.set("Diplomacy", 0);
skillMiscBonus.set("Dungeoneering",0);
skillMiscBonus.set("Endurance", 0);
skillMiscBonus.set("Heal", 0);
skillMiscBonus.set("History", 0);
skillMiscBonus.set("Insight", 0);
skillMiscBonus.set("Intimidate", 0);
skillMiscBonus.set("Nature", 0);
skillMiscBonus.set("Perception", 0);
skillMiscBonus.set("Religion", 0);
skillMiscBonus.set("Stealth", 0);
skillMiscBonus.set("Streetwise", 0);
skillMiscBonus.set("Thievery", 0);

var allLvl11Bonus = 0;
var allLvl21Bonus = 0;
var strEtcBonus = 0;
var conEtcBonus = 0;
var dexEtcBonus = 0;
var intEtcBonus = 0;
var wisEtcBonus = 0;
var chaEtcBonus = 0;

var armorPenalty = 0;



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
  if (lvl <1 ) {
    lvl =1;
  } else if (lvl > 30) {
    lvl=30;
  }
  document.getElementById('lvl').value = lvl;
  document.getElementById('lvl').innerHTML = lvl;
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
  abilityScoreStr = parseFloat(document.getElementById("strSelect").value) + sumLvlBonus("STR") + allLvl11Bonus + allLvl21Bonus + racialBonus("STR") + etcBonus("STR");
  abilityScoreCon = parseFloat(document.getElementById("conSelect").value) + sumLvlBonus("CON") + allLvl11Bonus + allLvl21Bonus + racialBonus("CON") + etcBonus("CON");
  abilityScoreDex = parseFloat(document.getElementById("dexSelect").value) + sumLvlBonus("DEX") + allLvl11Bonus + allLvl21Bonus + racialBonus("DEX") + etcBonus("DEX");
  abilityScoreInt = parseFloat(document.getElementById("intSelect").value) + sumLvlBonus("INT") + allLvl11Bonus + allLvl21Bonus + racialBonus("INT") + etcBonus("INT");
  abilityScoreWis = parseFloat(document.getElementById("wisSelect").value) + sumLvlBonus("WIS") + allLvl11Bonus + allLvl21Bonus + racialBonus("WIS") + etcBonus("WIS");
  abilityScoreCha = parseFloat(document.getElementById("chaSelect").value) + sumLvlBonus("CHA") + allLvl11Bonus + allLvl21Bonus + racialBonus("CHA") + etcBonus("CHA");

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

// Returns the etc bonus ccording to the selecct race, a lot to do
function etcBonus(abilityScore) {
  if (abilityScore.localeCompare("STR") === 0){
    return 0;

  } else if (abilityScore.localeCompare("CON") === 0) {
    return 0;

  } else if (abilityScore.localeCompare("DEX") === 0){
    return 0;

  } else if (abilityScore.localeCompare("INT") === 0){
    return 0;

  } else if (abilityScore.localeCompare("WIS") === 0){
    return 0;

  } else if (abilityScore.localeCompare("CHA") === 0){
    return 0;

  } else {
    alert('Something is wrong');
  }

}

// Returns the etc bonus ccording to the selecct race, a lot to do
function racialBonus(abilityScore) {

  if (abilityScore.localeCompare("STR") === 0){
    return 0;

  } else if (abilityScore.localeCompare("CON") === 0) {
    return 0;

  } else if (abilityScore.localeCompare("DEX") === 0){
    return 0;

  } else if (abilityScore.localeCompare("INT") === 0){
    return 0;

  } else if (abilityScore.localeCompare("WIS") === 0){
    return 0;

  } else if (abilityScore.localeCompare("CHA") === 0){
    return 0;

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

  clalcSkillpoints();
}

function isAbilScoreLegit(){
  var pointsSpend  = parseFloat(document.getElementById('pointsSpend').innerHTML);
  var abilSelects = document.querySelectorAll('[data-abilScoreChoose]');
  var lessThanTen = 0;
  if (pointsSpend>22) {
    document.getElementById('tooManyPoints').innerHTML = "Too many Points, cheater";
  }else{
    document.getElementById('tooManyPoints').innerHTML = "";
  }

  for (var i = 0; i < abilSelects.length; i++) {
    if(parseFloat(abilSelects[i].value) < 10){
      lessThanTen++;
    }
  }
  if (lessThanTen >= 2) {
    document.getElementById('tooLowScores').innerHTML = "Only one Score can be set to less than 10, learn the rules";
  }else{
    document.getElementById('tooLowScores').innerHTML = "";
  }

}

//

function clalcSkillpoints(){

  var acrobatics = clacAbilAndLvL("Acrobatics") + skilltrained("Acrobatics") + calcMiscBonus("Acrobatics") - calcArmorPenalty();
  var arcana = clacAbilAndLvL("Arcana") + skilltrained("Arcana") + calcMiscBonus("Arcana");
  var athletics = clacAbilAndLvL("Athletics") + skilltrained("Athletics") + calcMiscBonus("Athletics") - calcArmorPenalty();
  var bluff = clacAbilAndLvL("Bluff") + skilltrained("Bluff") + calcMiscBonus("Bluff");
  var diplomacy = clacAbilAndLvL("Diplomacy") + skilltrained("Diplomacy") + calcMiscBonus("Diplomacy") - calcArmorPenalty();
  var dungeoneering = clacAbilAndLvL("Dungeoneering") + skilltrained("Dungeoneering") + calcMiscBonus("Dungeoneering");
  var endurance = clacAbilAndLvL("Endurance") + skilltrained("Endurance") + calcMiscBonus("Endurance") - calcArmorPenalty();
  var heal = clacAbilAndLvL("Heal") + skilltrained("Heal") + calcMiscBonus("Heal");
  var history = clacAbilAndLvL("History") + skilltrained("History") + calcMiscBonus("History");
  var insight = clacAbilAndLvL("Insight") + skilltrained("Insight") + calcMiscBonus("Insight");
  var intimidate = clacAbilAndLvL("Intimidate") + skilltrained("Intimidate") + calcMiscBonus("Intimidate");
  var nature = clacAbilAndLvL("Nature") + skilltrained("Nature") + calcMiscBonus("Nature");
  var perception = clacAbilAndLvL("Perception") + skilltrained("Perception") + calcMiscBonus("Perception");
  var religion = clacAbilAndLvL("Religion") + skilltrained("Religion") + calcMiscBonus("Religion");
  var stealth = clacAbilAndLvL("Stealth") + skilltrained("Stealth") + calcMiscBonus("Stealth") - calcArmorPenalty();
  var streetwise = clacAbilAndLvL("Streetwise") + skilltrained("Streetwise") + calcMiscBonus("Streetwise") - calcArmorPenalty();
  var thievery = clacAbilAndLvL("Thievery") + skilltrained("Thievery") + calcMiscBonus("Thievery") - calcArmorPenalty();

  document.getElementById("AcrobaticsBonus").innerHTML=acrobatics;
  document.getElementById("ArcanaBonus").innerHTML = arcana;
  document.getElementById("AthleticsBonus").innerHTML = athletics;
  document.getElementById("BluffBonus").innerHTML = bluff;
  document.getElementById("DiplomacyBonus").innerHTML = diplomacy;
  document.getElementById("DungeoneeringBonus").innerHTML = dungeoneering;
  document.getElementById("EnduranceBonus").innerHTML = endurance;
  document.getElementById("HealBonus").innerHTML = heal;
  document.getElementById("HistoryBonus").innerHTML = history;
  document.getElementById("InsightBonus").innerHTML = insight;
  document.getElementById("IntimidateBonus").innerHTML = intimidate;
  document.getElementById("NatureBonus").innerHTML = nature;
  document.getElementById("PerceptionBonus").innerHTML = perception;
  document.getElementById("ReligionBonus").innerHTML = religion;
  document.getElementById("StealthBonus").innerHTML = stealth;
  document.getElementById("StreetwiseBonus").innerHTML = streetwise;
  document.getElementById("ThieveryBonus").innerHTML = thievery;


}

//calculate misc skill bonus
function calcMiscBonus(skill) {
  var miscBonus = skillMiscBonus.get(skill);
  console.log("MiscBonus" + " " + skill +"Misc" + " " + skillMiscBonus.get(skill));
  document.getElementById(skill + "Misc").innerHTML = miscBonus;
  return miscBonus
}
/*
function calcMiscBonus() {
  var allMiscBonus = document.querySelectorAll('[data-miscField]');

  for (var i = 0; i < allMiscBonus.length; i++) {
    if(allMiscBonus[i].getAttribute("Acrobatics")){
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;
    } else if (allMiscBonus[i].getAttribute("Arcana")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Athletics")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Bluff")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Diplomacy")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Dungeoneering")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Endurance")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Heal")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("History")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Insight")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Intimidate")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Nature")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Perception")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Religion")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Stealth")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Streetwise")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;

    } else if (allMiscBonus[i].getAttribute("Thievery")) {
      //Calc specific misc stuff
      var miscBonus = 0;

      allMiscBonus[i].innerHTML =miscBonus;
    } else {
      alert('Something is wrong');
    }
  }

}
*/

function calcArmorPenalty() {
    var allSkills = document.querySelectorAll('[data-armorpenalty]');

    //calculate armorPenalty
    armorPenalty = 0;

    for (var i = 0; i < allSkills.length; i++) {
      allSkills[i].innerHTML = armorPenalty;
    }
    return armorPenalty;

}

function skilltrained (skill){
  console.log("skilltrained" + +" " +skill)
  if(document.getElementById(skill + "Trained").checked == true){
    return 5;
  } else {
    return 0;
  }


}
//calculate ability and Lvl Bonus of the Skills Table


function clacAbilAndLvL(skill){
  var abilAndLvLBonus = 0;
  var lvlBonus = Math.floor(parseFloat(document.getElementById('lvl').value)/2);
  console.log("calcAbilAndLvl " +skill + " " + skillsWithAbilMods.get(skill));
  if (skill.localeCompare("Acrobatics") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  } else if (skill.localeCompare("Arcana") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  }  else if (skill.localeCompare("Athletics") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  } else if (skill.localeCompare("Bluff") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  }  else if (skill.localeCompare("Diplomacy") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  }  else if (skill.localeCompare("Dungeoneering") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  } else if (skill.localeCompare("Endurance") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  } else if (skill.localeCompare("Heal") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  } else if (skill.localeCompare("History") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  } else if (skill.localeCompare("Insight") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  } else if (skill.localeCompare("Intimidate") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  } else if (skill.localeCompare("Nature") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  } else if (skill.localeCompare("Perception") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  } else if (skill.localeCompare("Religion") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  }  else if (skill.localeCompare("Stealth") === 0) {
    abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
    document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
  }  else if (skill.localeCompare("Streetwise") === 0) {
     abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
     document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
   } else if (skill.localeCompare("Thievery") === 0) {
     abilAndLvLBonus = parseFloat(document.getElementById(skillsWithAbilMods.get(skill)).innerHTML) + lvlBonus;
     document.getElementById(skill + "AbilAndLvl").innerHTML = abilAndLvLBonus;
   } else{
     alert(skill + " is Wrong");
  }

  return abilAndLvLBonus;
}

/*
function clacAbilAndLvL() {
  var allAbilAndLvL = document.querySelectorAll('[data-skillType]');
  var strSkillsAbilAndLvL = 0;
  var conSkillsAbilAndLvl = 0;
  var dexSkillsAbilAndLvl = 0;
  var intSkillsAbilAndLvl = 0;
  var wisSkillsAbilAndLvl = 0;
  var chaSkillsAbilAndLvl = 0;

  var lvlBonus = Math.floor(parseFloat(document.getElementById('lvl').value)/2);

  for (var i = 0; i < allAbilAndLvL.length; i++) {
    if(allAbilAndLvL[i].getAttribute("data-skillType").localeCompare("STR") === 0){
      strSkillsAbilAndLvL = parseFloat(document.getElementById('strMod').innerHTML) +  lvlBonus;
      allAbilAndLvL[i].innerHTML =strSkillsAbilAndLvL;

    } else if (allAbilAndLvL[i].getAttribute("data-skillType").localeCompare("CON") === 0) {
      conSkillsAbilAndLvL = parseFloat(document.getElementById('conMod').innerHTML) +  lvlBonus;
      allAbilAndLvL[i].innerHTML =conSkillsAbilAndLvL;

    } else if (allAbilAndLvL[i].getAttribute("data-skillType").localeCompare("DEX") === 0) {
      dexSkillsAbilAndLvL = parseFloat(document.getElementById('conMod').innerHTML) +  lvlBonus;
      allAbilAndLvL[i].innerHTML =dexSkillsAbilAndLvL;

    } else if (allAbilAndLvL[i].getAttribute("data-skillType").localeCompare("INT") === 0) {
      intSkillsAbilAndLvL = parseFloat(document.getElementById('intMod').innerHTML) +  lvlBonus;
      allAbilAndLvL[i].innerHTML =intSkillsAbilAndLvL;

    } else if (allAbilAndLvL[i].getAttribute("data-skillType").localeCompare("WIS") === 0) {
      wisSkillsAbilAndLvL = parseFloat(document.getElementById('wisMod').innerHTML) +  lvlBonus;
      allAbilAndLvL[i].innerHTML =wisSkillsAbilAndLvL;

    } else if (allAbilAndLvL[i].getAttribute("data-skillType").localeCompare("CHA") === 0) {
      chaSkillsAbilAndLvL = parseFloat(document.getElementById('chaMod').innerHTML) +  lvlBonus;
      allAbilAndLvL[i].innerHTML =chaSkillsAbilAndLvL;
    } else {
      alert('Something is wrong');
    }
  }
}
*/
