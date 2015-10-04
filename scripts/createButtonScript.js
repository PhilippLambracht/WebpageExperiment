
document.getElementById("createButton").addEventListener("click", createFeatButtons);


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
