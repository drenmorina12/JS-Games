const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
let isChecking = false;

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank-1.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    console.log(optionOneId)
    console.log(optionTwoId)
    console.log(cardsChosen[0])
    console.log(cardsChosen[1])    
    
    if ((cardsChosen[0] === cardsChosen[1]) && (optionOneId != optionTwoId)){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen[0])
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank-1.png')
        cards[optionTwoId].setAttribute('src', 'images/blank-1.png')
    }
    resultDisplay.innerHTML = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length ===cardArray.length/2){
        resultDisplay.innerHTML = "You won !!!"
    }

    isChecking = false
}


function flipCard() {
    if (isChecking){
        return
    }

    const cardId = this.getAttribute('data-id')
    
    if (cardsChosenIds[0] !== cardId){
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
    }

    console.log('Clicked', cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        isChecking = true
        setTimeout(checkMatch, 500)
    }

}