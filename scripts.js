// cached elements
const gameBoard = document.querySelector(".game-board")

console.log(gameBoard)

// constants
let difficulty = ['easy', 'medium', 'hard']
let currDifficulty = difficulty[0]
let squares = []
let mineSquares = []

// init function

function init() {
  if (currDifficulty == 'easy') {
    const mines = 10
    const width = 8
    for (let i=0; i < width*width; i++) {
      let square = document.createElement("div")
      square.className = "sq"
      square.setAttribute('id', i)
      gameBoard.append(square)
    }
    squares = document.querySelectorAll('.sq')
    plantMines()
    mineSquares.forEach(elem => {
      squares[elem].className += " mine"
    })
  } else if (currDifficulty == 'medium') {
    console.log(currDifficulty)
  } else {
    console.log(currDifficulty)
  }
}

init()

// mine function

function plantMines() {
  for (let i=0; i< 10; i++) {
    mineSquares.push(randomSquare())
  }
}

function randomSquare() {
  let possibleSquare = Math.floor(Math.random()*64)
  while (mineSquares.includes(possibleSquare)) {
    possibleSquare = Math.floor(Math.random()*64)
  }
  return possibleSquare
}

// click functions

gameBoard.addEventListener('click', test)

function test() {
  if (event.target.className == "sq") {
    let nearbyMines = 0
    event.target.className += " safe"
    let squareId = +event.target.id
    if(squares[squareId + 1] && squares[squareId + 1].className == "sq mine") {
      console.log('right')
      nearbyMines ++
    }
    if(squares[squareId - 1] && squares[squareId - 1].className == "sq mine") {
      console.log('left')
      nearbyMines ++
    }
    console.log(squares[squareId + 8])
    if(squares[squareId + 8] && squares[squareId + 8].className == "sq mine") {
      console.log('down')
      nearbyMines ++
    }
    if(squares[squareId - 8] && squares[squareId - 8].className == "sq mine") {
      console.log('up')
      nearbyMines ++
    }
    event.target.innerHTML += nearbyMines
  } else {
    event.target.className += " explode"
  }
  console.log(event.target)
}