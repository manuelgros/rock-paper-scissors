
function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors']
  let computerChoice = choice[Math.floor(Math.random() *choice.length)];
  return computerChoice;
}

console.log(getComputerChoice())

const playerSelection = prompt('Choose your weapon!').toLowerCase()
const computerSelection = getComputerChoice()

   console.log(playerSelection);

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'rock'){
    return "It's a tie! Try again";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "You win! Paper beats Rock";
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return "It's a tie! Try again";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "You win! Scissors beats Paper";
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return "It's a tie! Try again"
  }
}

console.log(singleRound(playerSelection, computerSelection));