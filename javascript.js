
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const computerChoice = choices[Math.floor(Math.random() *choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === 'rock' && computerSelection === 'rock'){
    return "tie";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return "computerWin";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return "playerWin";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "playerWin";
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return "tie";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return "computerWin";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return "computerWin";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "playerWin";
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return "tie";
  }
}

function game() {

  // set playerLife to 5
  let playerLife = 5;
  // set computerLife to 5
  let computerLife = 5;

  // start first round
  while (playerLife > 0 && computerLife > 0) {
    // set value for playerSelection and computerSelection
    const playerSelection = prompt('Choose your weapon!').toLowerCase();
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    // set loserLife = loserLife -1...
    if (playRound(playerSelection, computerSelection) == "playerWin") {
      computerLife -= 1;
      console.log(`You've won! Player: ${playerLife} | Computer: ${computerLife}`)
    } else if (playRound(playerSelection, computerSelection) == "computerWin") {
      playerLife -= 1;
      console.log(`You've lost! Player: ${playerLife} | Computer: ${computerLife}`)
    // ...or if no one wins, leave Life as is and start new round
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

game();