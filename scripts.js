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

// big function

function test() {
  if (event.target.className == "sq") {
    let nearbyMines = 0
    event.target.className += " safe"
    let squareId = +event.target.id
    if(squares[squareId + 1] && squares[squareId + 1].className == "sq mine" && (squareId - 7) % 8) {
      console.log('right')
      nearbyMines ++
    }
    if(squares[squareId - 1] && squares[squareId - 1].className == "sq mine" && squareId % 8) {
      console.log('left')
      nearbyMines ++
    }
    if(squares[squareId + 8] && squares[squareId + 8].className == "sq mine") {
      console.log('down')
      nearbyMines ++
    }
    if(squares[squareId - 8] && squares[squareId - 8].className == "sq mine") {
      console.log('up')
      nearbyMines ++
    }
    if(squares[squareId -7] && squares[squareId -7].className == "sq mine" && (squareId - 7) % 8) {
      console.log('up right')
      nearbyMines ++
    }
    if(squares[squareId - 9] && squares[squareId - 9].className == "sq mine" && squareId % 8) {
      console.log('up left')
      nearbyMines ++
    }
    if(squares[squareId + 9] && squares[squareId + 9].className == "sq mine" && (squareId - 7) % 8) {
      console.log('down right')
      nearbyMines ++
    }
    if(squares[squareId + 7] && squares[squareId + 7].className == "sq mine" && squareId % 8) {
      console.log('down left')
      nearbyMines ++
    }
    event.target.innerHTML += nearbyMines
    if (nearbyMines == 0) {
      //recursive function
    }
  } else if(event.target.className == "sq mine") {
    event.target.className += " explode"
  }
  console.log(event.target)
}

function recursiveTest(recSquare) {
  if (recSquare.className == "sq") {
    let nearbyMines = 0
    recSquare.className += " safe"
    let squareId = +recSquare.id
    if(squares[squareId + 1] && squares[squareId + 1].className == "sq mine" && (squareId - 7) % 8) {
      console.log('right')
      nearbyMines ++
    }
    if(squares[squareId - 1] && squares[squareId - 1].className == "sq mine" && squareId % 8) {
      console.log('left')
      nearbyMines ++
    }
    if(squares[squareId + 8] && squares[squareId + 8].className == "sq mine") {
      console.log('down')
      nearbyMines ++
    }
    if(squares[squareId - 8] && squares[squareId - 8].className == "sq mine") {
      console.log('up')
      nearbyMines ++
    }
    if(squares[squareId -7] && squares[squareId -7].className == "sq mine" && (squareId - 7) % 8) {
      console.log('up right')
      nearbyMines ++
    }
    if(squares[squareId - 9] && squares[squareId - 9].className == "sq mine" && squareId % 8) {
      console.log('up left')
      nearbyMines ++
    }
    if(squares[squareId + 9] && squares[squareId + 9].className == "sq mine" && (squareId - 7) % 8) {
      console.log('down right')
      nearbyMines ++
    }
    if(squares[squareId + 7] && squares[squareId + 7].className == "sq mine" && squareId % 8) {
      console.log('down left')
      nearbyMines ++
    }
    recSquare.innerHTML += nearbyMines
    if (nearbyMines == 0) {
      //recursive function
    }
  } else if(recSquare.className == "sq mine") {
    recSquare.className += " explode"
  }
  console.log(recSquare)
}

