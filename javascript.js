let playerLife = 0;
let computerLife = 0;
const playerP = document.querySelector("#playerP");
const computerP = document.querySelector("#computerP");
const choices = document.querySelector(".choices");
const moderator = document.querySelector(".moderator");

choices.addEventListener('click', (e) => {
  game(e.target.id);
})

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
      computerLife += 1;
      let msg = `You've won! ${playerSelection.substring(0, 1).toUpperCase()+playerSelection.substring(1)}` +
                ` beats ${computerSelection.substring(0, 1).toUpperCase()+computerSelection.substring(1)}.` +
                ` Player: ${playerLife} | Computer: ${computerLife}`;
      console.log(msg);
      // alert(msg);
      moderator.textContent = msg;
      playerP.textContent = `Player: ${playerLife}`;
  } else if (playRound(playerSelection, computerSelection) == "computerWin") {
      playerLife += 1;
      let msg = `You've lost! ${computerSelection.substring(0, 1).toUpperCase()+computerSelection.substring(1)}` +
                ` beats ${playerSelection.substring(0, 1).toUpperCase()+playerSelection.substring(1)}.` + 
                ` Player: ${playerLife} | Computer: ${computerLife}`;
      console.log(msg);
      // alert(msg);
      moderator.textContent = msg
      computerP.textContent = `Machine: ${computerLife}`;
  } else {
      let msg = `That was a tie, try again. Player: ${playerLife} | Computer: ${computerLife}`
      console.log(msg);
      // alert(msg);
      moderator.textContent = msg
  }
  // Declare WINNER of game
  if (playerLife == 5 || computerLife == 5) {
    if (playerLife == 5) {
        console.log("The computer won, as you knew he would! - Game Over");
        let msg = "The computer won, as you knew he would! - Game Over";
        moderator.textContent = msg
    } else {
        console.log("Hurray! Once again the human brain conquered the machine! - Game Over");
        let msg = "Hurray! Once again the human brain conquered the machine! - Game Over";
        moderator.textContent = msg
    }
  }
}

function gameReset() {
  playerLife = 0;
  computerLife = 0;
  playerP.textContent = `Player: 0`
  computerP.textContent = `Machine: 0`
  moderator.textContent = "And so it begins..."
}