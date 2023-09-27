const gridDisplay = document.querySelector('.grid')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const playButton = document.querySelector('.play-game')
const notification = document.querySelector('#notification')
const squares = []
const numberOfSquares = 9

let currentTime = 10
timeLeft.textContent = currentTime
let result = 0
let hitPosition
let timerId = null
let countDownTimerId = null

function createBoard(){
    for (let i = 0; i < numberOfSquares; i++){
        const square = document.createElement('div')
        square.setAttribute('class', 'square')
        square.setAttribute('id', i+1)
        gridDisplay.append(square)
        squares.push(square)
    }
}

createBoard()

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * numberOfSquares)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.id == hitPosition)
        result ++
        score.textContent = result
        hitPosition = null
    })
})


function moveMole(){

    timerId = setInterval(randomSquare, 500)
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
    console.log('COUNTING DOWN')
    if (currentTime <= 0){
        timeLeft.textContent = currentTime
        clearInterval(countDownTimerId)
        hitPosition = null
        clearInterval(timerId)
        showNotification("Game Over! Your final socre is " + result)
        console.log('IT STOPPED')
        // setTimeout(function () {
        //     alert("Game Over! Your final score is " + result);
        // }, 100)
        return
    }
    timeLeft.textContent = currentTime


function playGame(){
    clearInterval(timerId)
    clearInterval(countDownTimerId)
    console.log('moveMole')
    moveMole()
    console.log('countDown')

    countDownTimerId = setInterval(countDown, 1000)
    result = 0
    currentTime = 10
    timeLeft.textContent = currentTime
    score.textContent = result
}

playButton.addEventListener('click', playGame)
