const playerChoiceDisplay = document.getElementsByClassName('.player-choice')
const computerChoiceDisplay = document.getElementsByClassName('.computer-choice')
const possibleChoices = document.querySelectorAll('.option')

let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    //display computer choice
    // call functions neccesary when event is clicked
}))

function generateComputerChoice() {
    const randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)].id
    computerChoice = randomChoice

    // display computer choice
}

function getResult() {

}