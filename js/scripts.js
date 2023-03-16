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

  if (playerSelection == computerSelection) {
    scoreboard.appendChild(writeScore(`Draw! ${playerSelection} vs ${computerSelection}.`));
  } else if (computerSelection == victory[playerSelection]) {
    //playerScore++;
    scoreboard.appendChild(writeScore(`You win! ${playerSelection} beats ${computerSelection}.`));
  } else {
    //computerScore++;
    scoreboard.appendChild(writeScore(`You lose! ${computerSelection} beats ${playerSelection}.`));
  }
}

function writeScore(round) {
  const p = document.createElement('p');
  p.textContent = round;
  return p;
}

const signs = Array.from(document.querySelectorAll('.sign'));
signs.forEach(sign => {
  sign.addEventListener('click', function () {
    playRound(sign.classList[0], getComputerChoice());
  })
})
