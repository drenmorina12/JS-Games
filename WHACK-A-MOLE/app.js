const gridDisplay = document.querySelector('.grid')
// const mole = document.querySelector('mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const playButton = document.querySelector('.play-game')
const squares = []
const numberOfSquares = 9

let currentTime = 10
timeLeft.textContent = currentTime
let result = 0
let hitPosition
let timerId = null
let countDownTimerId

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



moveMole()


function countDown(){
    currentTime --

    if (currentTime <= 0){
        timeLeft.textContent = currentTime
        clearInterval(countDownTimerId)

        clearInterval(timerId)
        setTimeout(function () {
            alert("Game Over! Your final score is " + result);
        }, 100)
        return
    }
    timeLeft.textContent = currentTime
}
countDownTimerId = setInterval(countDown, 1000)
// function playGame(){
//     console.log('moveMole')
//     moveMole()
//     console.log('countDown')

//     setInterval(countDown, 1000)
//     result = 0
//     currentTime = 10
//     timeLeft.textContent = currentTime
//     score.textContent = result
// }

// playButton.addEventListener('click', playGame)

// playButton.addEventListener('click', moveMole)
// playButton.addEventListener('click', function() {
//     countDownTimerId = setInterval(countDown, 1000)
//     result = 0
//     currentTime = 10
//     timeLeft.textContent = currentTime
//     score.textContent = result
// })
