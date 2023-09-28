const gridDisplay = document.querySelector('.grid')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const playButton = document.querySelector('.play-game')
const notification = document.querySelector('#notification')
const squares = []
const NUMBER_OF_SQUARES = 9
const MOLE_INTERVAL = 1000 - 0.1
const TIME_INTERVAL = 1000
const INITIAL_TIME = 15
const MAX_SCORE = Math.floor(TIME_INTERVAL/MOLE_INTERVAL * INITIAL_TIME - 1)

let currentTime = INITIAL_TIME
let result = 0
let hitPosition
let timerId = null
let countDownTimerId = null
timeLeft.textContent = currentTime

score.textContent = (result + '/' + MAX_SCORE)

function createBoard(){
    for (let i = 0; i < NUMBER_OF_SQUARES; i++){
        const square = document.createElement('div')
        square.setAttribute('class', 'square')
        square.setAttribute('id', i+1)
        gridDisplay.append(square)
        squares.push(square)
    }
}



function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * NUMBER_OF_SQUARES)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id

}

function moveMole(){
    timerId = setInterval(randomSquare, MOLE_INTERVAL)
}

function updateScore(){
    result++
    score.textContent = (result + '/' + MAX_SCORE)
    hitPosition = null
}

function gameOver(){
    clearInterval(countDownTimerId)
    hitPosition = null
    clearInterval(timerId)
}

function showNotification(message){
    notification.textContent = message
    notification.style.display = 'block'

    setTimeout(() => {
        notification.style.display = 'none'
    }, 3000)
}


function countDown(){
    currentTime --
    if (currentTime <= 0){
        timeLeft.textContent = currentTime
        showNotification("Game Over! Your final score is " + result)
        gameOver()
        // setTimeout(function () {
        //     alert("Game Over! Your final score is " + result);
        // }, 100)
        return
    }
    timeLeft.textContent = currentTime
}

function playGame(){
    gameOver()
    moveMole()
    countDownTimerId = setInterval(countDown, TIME_INTERVAL)
    result = 0
    currentTime = INITIAL_TIME
    timeLeft.textContent = currentTime
    score.textContent = (result + '/' + MAX_SCORE)
}

createBoard()

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.id == hitPosition){
            updateScore()
        }

    })
})

playButton.addEventListener('click', playGame)