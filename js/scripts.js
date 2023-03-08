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
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

playerSelection = getPlayerChoice();
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
