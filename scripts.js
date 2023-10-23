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
      gameBoard.append(square)
    }
    squares = document.querySelectorAll('.sq')
    plantMines()
    mineSquares.forEach(elem => {
      squares[elem-1].className += " mine"
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
  if (!mineSquares.includes(possibleSquare)) {
    return possibleSquare
  }
  randomSquare()
}

// click functions
