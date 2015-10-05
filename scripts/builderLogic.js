document.getElementById("classInfoApply").addEventListener("click", lvlVisibilties);





function lvlVisibilties(){

  var visibleElements = document.querySelectorAll('[data-lvl]');
  var lvl = parseFloat(document.getElementById('lvl').value);

  for(var i = 0 ; i < visibleElements.length; i++){
      if(parseFloat(visibleElements[i].getAttribute("data-lvl")) <= lvl){
        visibleElements[i].style.display ="";
      } else{
          visibleElements[i].style.display ="none";
      }
  }


}
