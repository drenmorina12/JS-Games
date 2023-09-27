const gridDisplay = document.querySelector('.grid')
const mole = document.querySelector('mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const squares = []
const numberOfSquares = 9

let result = 0






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
console.log(squares)

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random() * numberOfSquares)]
    console.log(randomPosition)




}

randomSquare()