function getComputerChoice() {
  const handSigns = ['rock', 'paper', 'scissors'];
  var computerChoiceIndex = Math.floor(Math.random() * handSigns.length);
  console.log(handSigns[computerChoiceIndex]);
  return handSigns[computerChoiceIndex];
}

function getPlayerChoice() {
  return prompt('Rock, Paper, or Scissors?').toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  const victory = {
    rock: 'scissors', 
    paper: 'rock', 
    scissors: 'paper'
  };

  if (playerSelection == computerSelection) {
    return `Draw! ${playerSelection} vs ${computerSelection}.`;
  } else if (computerSelection == victory[playerSelection]) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(),getComputerChoice()));
  }

  if (playerScore == computerScore) {
    console.log(`Game is a Draw! Player: ${playerScore} ComputerScore: ${computerScore}`);
  } else if (playerScore > computerScore) {
    console.log(`Player Wins!: ${playerScore} ComputerScore: ${computerScore}`);
  } else {
    console.log(`Player Loses!: ${playerScore} ComputerScore: ${computerScore}`);
  }
}

var playerScore = 0;
var computerScore = 0;
game();
