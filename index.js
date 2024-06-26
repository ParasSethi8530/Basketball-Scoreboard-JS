let teamAScore = 0;
let teamBScore = 0;

let teamA = document.getElementById("teamAScore");
let teamB = document.getElementById("teamBScore");

function add1() {
  teamAScore++;
  teamA.textContent = teamAScore;
}
function add2() {
  teamAScore += 2;
  teamA.textContent = teamAScore;
}
function add3() {
  teamAScore += 3;
  teamA.textContent = teamAScore;
}
function plus1() {
  teamBScore++;
  teamB.textContent = teamBScore;
}
function plus2() {
  teamBScore += 2;
  teamB.textContent = teamBScore;
}
function plus3() {
  teamBScore += 3;
  teamB.textContent = teamBScore;
}

function reset() {
  teamA.textContent = 0;
  teamB.textContent = 0;
}
