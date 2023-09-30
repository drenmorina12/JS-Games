const playerChoiceDisplay = document.querySelector('.player-choice')
const computerChoiceDisplay = document.querySelector('.computer-choice')
const possibleChoices = document.querySelectorAll('.option')


let playerChoice
let playerMove
let playerColor
let result
let computerChoice
let computerMove
let computerColor

console.log(possibleChoices)

function playerAttributes() {
    playerMove = document.createElement('img')
    playerMove.setAttribute('id', playerChoice)
    console.log('Player: ' + 'images/' + playerColor + '.png')
    playerMove.setAttribute('src', 'images/' + playerColor + '.png')
    playerChoiceDisplay.append(playerMove)
}

function computerAttributes() {
    computerMove = document.createElement('img')
    computerMove.setAttribute('id', computerChoice)
    console.log('Computer: ' + 'images/' + computerColor + '.png')
    computerMove.setAttribute('src', ('images/' + computerColor + '.png'))
    computerChoiceDisplay.append(computerMove)
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
    // resultDisplay.innerHTML = result
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