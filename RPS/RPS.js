let choices = ["rock", "paper", "scissors"];

function humanF() {
  let human = document.querySelector("#round-text");
  human.textContent = "you win this round";
}

function computerF() {
  let computer = document.querySelector("#round-text");
  computer.textContent = "computer wins this round";
}

function tieF() {
  let tie = document.querySelector("#round-text");
  tie.textContent = "tie, play again";
}

let playerScore = 0;
let computerScore = 0;
let round = 1;

// document.getElementById("rock").onclick = game;
// document.getElementById("paper").onclick = game;
// document.getElementById("scissors").onclick = game;

// function game() {
//   const playerSelection = this.id;
//   const computerSelection = computerPlay();
//   playRound(playerSelection, computerSelection);
// }

const selection = document.querySelectorAll(".choices");
selection.forEach((option) => {
  option.addEventListener("click", function () {
    const playerSelection = this.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    newScore();
    reset();
    endSeries();
  });
});

function computerPlay() {
  let num = choices[Math.floor(Math.random() * 3)];
  return num;
}

function playRound(playerChoice, computerChoice) {
  let roundIndividual = `${playerChoice} vs ${computerChoice}`;
  let versus = document.querySelector("#versus");
  versus.textContent = roundIndividual;
  if (playerChoice === computerChoice) {
    return tieF();
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    round++;
    playerScore += 1;
    return humanF();
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    round++;
    playerScore += 1;
    return humanF();
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    round++;
    playerScore += 1;
    return humanF();
  } else {
    round++;
    computerScore += 1;
    return computerF();
  }
}

function newScore() {
  let scoreHuman = document.querySelector("#playerScore");
  scoreHuman.textContent = `Your score\n${playerScore}`;
  let scoreComp = document.querySelector("#computerScore");
  scoreComp.textContent = `Computer score\n${computerScore}`;
}

function endSeries() {
  let end = document.querySelector("#gameOverString");
  if (playerScore >= 5) {
    end.textContent = "YOU ARE THE CHAMPION\nmake a choice to play again";
    return true;
  }
  if (computerScore >= 5) {
    end.textContent = "COMPUTER IS THE CHAMPION\nmake a choice to play again";
    return true;
  }
  return false;
}

function reset() {
  let end = document.querySelector("#gameOverString");
  end.textContent = "";
  let endRoundText = document.querySelector("#round-text");
  endRoundText = "";
  if (endSeries()) {
    playerScore = 0;
    computerScore = 0;
    return true;
  }
  return false;
}
