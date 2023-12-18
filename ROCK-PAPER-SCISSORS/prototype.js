const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let playerChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomChoice =
    possibleChoices[Math.floor(Math.random() * possibleChoices.length)].id;
  computerChoice = randomChoice;

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === playerChoice) {
    result = "It's a Draw";
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    result = "You won";
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    result = "You won";
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    result = "You won";
  } else result = "You lose";

  resultDisplay.innerHTML = result;
}
