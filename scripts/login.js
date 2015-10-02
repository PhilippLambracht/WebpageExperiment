alert("script startes");
var user = document.getElementById('username');
var pw = document.getElementById('password');
var reset = document.getElementById('reset');
var login = document.getElementById('login');

reset.addEventListener("click", resetvalues);
login.addEventListener("click", startLogin);

function resetvalues(){
  alert("RESET");
  user.value="" ;
  pw.value="" ;
}

function startLogin(){
  alert("hi");
}
