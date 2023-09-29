const playerChoiceDisplay = document.querySelector('.player-choice')
const computerChoiceDisplay = document.querySelector('.computer-choice')
const possibleChoices = document.querySelectorAll('.option')

let playerChoice
let computerChoice
let result
let playerMove
let computerMove

console.log(possibleChoices)

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerMove = document.createElement('img')
    playerMove.setAttribute('id', playerChoice)
    playerMove.setAttribute('src', 'images/' + playerChoice + '.png')
    playerChoiceDisplay.append(playerMove)
    generateComputerChoice()

}))


function generateComputerChoice() {
    const randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)].id
    computerChoice = randomChoice
    computerMove = document.createElement('img')
    computerMove.setAttribute('id', computerChoice)
    computerMove.setAttribute('src', ('images/' + computerChoice + '.png'))
    // computerMove.setAttribute('src', 'images/paper.png')
    computerChoiceDisplay.append(computerMove)
    // display computer choice
    console.log('suiii')
}

function getResult() {
    if (computerChoice === playerChoice){
        result = "It's a Draw"
    }

    else if (computerChoice === 'rock' && playerChoice === 'paper'){
        result = "You won"
    }



    else if (computerChoice === 'paper' && playerChoice === 'scissors'){
        result = "You won"
    }



    else if (computerChoice === 'scissors' && playerChoice === 'rock'){
        result = "You won"
    }

    else
        result = "You lose"
 
    resultDisplay.innerHTML = result
}