// cached elements
const gameBoard = document.querySelector(".game-board")

console.log(gameBoard)

// constants
let difficulty = ['easy', 'medium', 'hard']
let currDifficulty = difficulty[0]

// functions

function init() {
  if (currDifficulty == 'easy') {
    const mines = 10
    const width = 8
    for (let i=0; i < width*width; i++) {
      let square = document.createElement("div")
      // console.log(square)
      gameBoard.append(square)
    }
  } else if (currDifficulty == 'medium') {
    console.log(currDifficulty)
  } else {
    console.log(currDifficulty)
  }
}

init()