const possibleChoices = document.querySelectorAll('.option')
const playerChoiceImg = document.querySelector('.player-choice-img')
const computerChoiceImg = document.querySelector('.computer-choice-img')


let playerChoice
let playerMove
let playerColor
let result
let computerChoice
let computerMove
let computerColor



console.log(possibleChoices)

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
    console.log('Computer choice is: ' + computerChoice)
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

    playerChoice = e.target.id
    console.log('Player choice is: ' + playerChoice)
    playerColor = playerChoice
    generateComputerChoice()
    getResult()
    console.log('Result is: ' + result)
    colorDistinction()
    console.log('Player color is: ' + playerColor)
    console.log('Computer color is: ' + computerColor)
    playerAttributes()
    computerAttributes()
}))