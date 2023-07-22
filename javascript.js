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

// Determine START and END of game and keep track of points
function game() {
  let playerLife = 0;
  let computerLife = 0;

  while (playerLife < 5 && computerLife < 5) {
    const playerSelection = prompt('Choose your weapon! Pick from: Rock, Paper, or Scissors').toLowerCase();
    const computerSelection = getComputerChoice();
    const playerP = document.querySelector("#playerP");
    const computerP = document.querySelector("#computerP");

    playRound(playerSelection, computerSelection);

    if (playRound(playerSelection, computerSelection) == "playerWin") {
        computerLife += 1;
        let msg = `You've won! ${playerSelection.substring(0, 1).toUpperCase()+playerSelection.substring(1)}` +
                  ` beats ${computerSelection.substring(0, 1).toUpperCase()+computerSelection.substring(1)}.` +
                  ` Player: ${playerLife} | Computer: ${computerLife}`;
        console.log(msg);
        alert(msg);
        playerP.textContent = `Player: ${playerLife}`;
    } else if (playRound(playerSelection, computerSelection) == "computerWin") {
        playerLife += 1;
        let msg = `You've lost! ${computerSelection.substring(0, 1).toUpperCase()+computerSelection.substring(1)}` +
                  ` beats ${playerSelection.substring(0, 1).toUpperCase()+playerSelection.substring(1)}.` + 
                  ` Player: ${playerLife} | Computer: ${computerLife}`;
        console.log(msg);
        alert(msg);
        computerP.textContent = `Machine: ${computerLife}`;
    } else {
        let msg = `That was a tie, try again. Player: ${playerLife} | Computer: ${computerLife}`
        console.log(msg);
        alert(msg);
    }
  }
  // Declare WINNER of game
  if (playerLife == 5) {
      console.log("The computer won, as you knew he would! - Game Over")
      alert("The computer won, as you knew he would! - Game Over");
  } else {
      console.log("Hurray! Once again the human brain conquered the machine! - Game Over")
      alert("Hurray! Once again the human brain conquered the machine! - Game Over")
  }
}
