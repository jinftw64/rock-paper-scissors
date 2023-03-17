function getComputerChoice() {
  const handSigns = ['rock', 'paper', 'scissors'];
  var computerChoiceIndex = Math.floor(Math.random() * handSigns.length);
  console.log(handSigns[computerChoiceIndex]);
  return handSigns[computerChoiceIndex];
}

function playRound(playerSelection, computerSelection) {
  const scoreboard = document.querySelector('.scoreboard');
  const victory = {
    rock: 'scissors', 
    paper: 'rock', 
    scissors: 'paper'
  };

  if (playerScore == 5) {
    scoreboard.textContent = `Player wins the game! Player: ${playerScore}  Computer: ${computerScore}`;
    return;
  } else if (computerScore == 5) {
    scoreboard.textContent = `Computer wins the game! Player: ${playerScore}  Computer: ${computerScore}`;
    return;
  }

  if (playerSelection == computerSelection) {
    scoreboard.textContent = `Round = Draw! Player: ${playerScore}  Computer: ${computerScore}`;
  } else if (computerSelection == victory[playerSelection]) {
    playerScore++;
    scoreboard.textContent = `Round = Win! Player: ${playerScore}  Computer: ${computerScore}`;
  } else {
    computerScore++;
    scoreboard.textContent = `Round = Loss! Player: ${playerScore}  Computer: ${computerScore}`;
  }
}

function writeScore(round) {
  const p = document.createElement('p');
  p.textContent = round;
  return p;
}

let playerScore = 0;
let computerScore = 0;

const signs = Array.from(document.querySelectorAll('.sign'));
signs.forEach(sign => {
  sign.addEventListener('click', function () {
    playRound(sign.classList[0], getComputerChoice());
  })
})
