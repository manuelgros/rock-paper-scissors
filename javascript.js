
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const computerChoice = choices[Math.floor(Math.random() *choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {

  const playerSelection = prompt('Choose your weapon!').toLowerCase()
  const computerSelection = getComputerChoice()

  if (playerSelection === 'rock' && computerSelection === 'rock'){
    return tie;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return computerSelection;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return playerSelection;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return playerSelection;
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return tie;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return computerSelection;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return computerSelection;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return playerSelection;
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return tie
  }
}

function game() {

  // set playerLife to 5
  let playerLife = 5;
  // set computerLife to 5
  let computerLife = 5;

  // start first round
  while (playerLife > 0 || computerLife > 0) {
    playRound(playerSelection, computerSelection);
    // set loserLife to (*Life -1)
    if (playRound(playerSelection, computerSelection) = playerSelection) {
      playerLife -= 1;
      console.log(`You've won! Player: ${playerLife} | Computer: ${computerLife}`)
    } else if (playRound(playerSelection, computerSelection) = computerSelection) {
      computerLife -= 1;
      console.log(`You've lost! Player: ${playerLife} | Computer: ${computerLife}`)
    } else {
      console.log(`That was a tie, try again. Player: ${playerLife} | Computer: ${computerLife}`)
    }
  // start next round - repeat until playerLife or computerLife reaches 0 
  }
  // Declare winner of Game
  if (playerLife == 0) {
    console.log("The computer won, as you knew he would! - Game Over")
  } else {
    console.log("Hurray! Once again the human brain conquered the machine! - Game Over")
  }
}