// Set all needed variables
let playerPoints = 0;
let computerPoints = 0;
const playerP = document.querySelector("#playerP");
const computerP = document.querySelector("#computerP");
const choices = document.querySelector(".choices");
const moderator = document.querySelector(".moderator p");

// Feed argument to game() based on button selection
choices.addEventListener('click', (e) => {
  game(e.target.id);
})

// Get Computer Choice
function getComputerChoice() { 
  const choices = ['rock', 'paper', 'scissors']
  const computerChoice = choices[Math.floor(Math.random() *choices.length)];
  return computerChoice;
}

// Run SINGLE ROUND and determine outcome 
function playRound(playerSelection, computerSelection) {
  return (playerSelection === computerSelection) ? "tie"
    : (playerSelection === 'rock' && computerSelection === 'scissors' ||
       playerSelection === 'scissors' && computerSelection === 'paper' ||
       playerSelection === 'paper' && computerSelection === 'rock') ? "playerWin"
    : "computerWin";
}

// Determine Player and Computer Choice for each round, keep track of points, and eventually declare winner
function game(weapon) {
  const playerSelection = weapon;
  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);

  if (playRound(playerSelection, computerSelection) == "playerWin") {
      playerPoints += 1;
      let msg = `You've won! ${playerSelection.substring(0, 1).toUpperCase()+playerSelection.substring(1)}` +
                ` beats ${computerSelection.substring(0, 1).toUpperCase()+computerSelection.substring(1)}.`
      console.log(msg);
      // alert(msg);
      moderator.textContent = msg;
      playerP.textContent = `Player: ${playerPoints}`;
  } else if (playRound(playerSelection, computerSelection) == "computerWin") {
      computerPoints += 1;
      let msg = `You've lost! ${computerSelection.substring(0, 1).toUpperCase()+computerSelection.substring(1)}` +
                ` beats ${playerSelection.substring(0, 1).toUpperCase()+playerSelection.substring(1)}.`
      console.log(msg);
      // alert(msg);
      moderator.textContent = msg
      computerP.textContent = `Machine: ${computerPoints}`;
  } else {
      let msg = `That was a tie, try again.`
      console.log(msg);
      // alert(msg);
      moderator.textContent = msg;
  }
  // Declare WINNER of game
  if (playerPoints == 5 || computerPoints == 5) {
    if (computerPoints == 5) {
        console.log("The computer won, as you knew he would! - Game Over");
        let msg = "The computer won, as you knew he would! - Game Over";
        moderator.textContent = msg;
    } else {
        console.log("Hurray! Once again the human brain conquered the machine! - Game Over");
        let msg = "Hurray! Once again the human brain conquered the machine! - Game Over";
        moderator.textContent = msg;
    }
    showReset();
  }
}

// Reset the game
const reset = document.querySelector("#reset");
reset.addEventListener('click', gameReset);

function gameReset() {
  playerPoints = 0;
  computerPoints = 0;
  playerP.textContent = `Player: 0`
  computerP.textContent = `Machine: 0`
  moderator.textContent = "And so it begins..."
  startAgain();
}

// Deactivate / Activate Choice Buttons when game ends
const btn = document.querySelectorAll(".btn");

function showReset () {
  reset.classList.remove("hiddenBtn");
  for (i = 0; i < btn.length; i++) {
    btn[i].classList.add("hiddenBtn");
  }
}

function startAgain() {
  reset.classList.add("hiddenBtn");
  for (i = 0; i < btn.length; i++) {
    btn[i].classList.remove("hiddenBtn");
  }
}