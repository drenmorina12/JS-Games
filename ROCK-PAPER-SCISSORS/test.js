const possibleChoices = document.querySelectorAll('.option')
const playerChoiceImg = document.querySelector('.player-choice-img')
const computerChoiceImg = document.querySelector('.computer-choice-img')

let playerChoice
let playerColor
let result
let computerChoice
let computerColor


function playerAttributes() {
    playerChoiceImg.setAttribute('src', 'images/' + playerColor + '.png')
    playerChoiceImg.classList.add('player-img')
}

function computerAttributes() {
    computerChoiceImg.setAttribute('src', ('images/' + computerColor + '.png'))
    computerChoiceImg.classList.add('computer-img')
}


function generateComputerChoice() {
    const randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)].id
    computerChoice = randomChoice
    computerColor = computerChoice
}

function colorDistinction(){
    if (result == 'win'){
        playerColor += '-green'
        computerColor += '-red'
    }
    else if (result == 'lose'){
        playerColor += '-red'
        computerColor += '-green'
    }
}

function getResult() {
    if (computerChoice === playerChoice){
        result = "draw"
    }

    else if (computerChoice === 'rock' && playerChoice === 'paper'){
        result = "win"
    }

    else if (computerChoice === 'paper' && playerChoice === 'scissors'){
        result = "win"
    }

    else if (computerChoice === 'scissors' && playerChoice === 'rock'){
        result = "win"
    }

    else
        result = "lose"
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    const clickedOption = e.target.closest('.option')

    if(clickedOption){
        playerChoice = clickedOption.id
        playerColor = playerChoice
        generateComputerChoice()
        getResult()
        colorDistinction()
        playerAttributes()
        computerAttributes()
    }
}))