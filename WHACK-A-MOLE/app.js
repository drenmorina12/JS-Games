const gridDisplay = document.querySelector('.grid')
const mole = document.querySelector('mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const squares = []
const numberOfSquares = 9

let result = 0
let hitPosition


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


function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}

moveMole()