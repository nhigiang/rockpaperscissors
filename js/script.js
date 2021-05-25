// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

document.querySelector("#shoot").onclick = function() {
  let user = document.querySelector("#input").value;
  document.querySelector("#userChoice").innerHTML = user;
  let computer= Math.random();
  let computerChoice;
  if (computer< 0.33) {
    document.querySelector("#computerChoice").innerHTML = "rock";
    computerChoice = "rock";
  } else if (computer> 0.33 && computer < 0.6) {
    document.querySelector("#computerChoice").innerHTML = "paper";
    computerChoice="paper";
  } else {
    document.querySelector("#computerChoice").innerHTML = "scissors";
    computerChoice="scissors";
  }
  if (user=== "rock" && computerChoice=== "paper"){
   $("#result").text("computer wins");
}else if (user==="rock" && computerChoice==="scissors"){
  $("#result").text("user wins");
}else {
  $("#result").text("peace");
}

  console.log(computer);
return computerChoice;
};

// Looking good!
// make sure to try it out and that you get all the options for computer when you click it
