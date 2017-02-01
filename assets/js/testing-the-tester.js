window.addEventListener('DOMContentLoaded', function () {
// create logic for tic tac toe
  var grid = []
  var player = 1
  var draw = 3

  function restart () {
    grid = []
    player = 1
  }

  function isGameOver () {
    if (whoWon()) {
      return true
      alert(whoWon() + 'won this round. Play again!')
    } else {
      return false
    }
  }

  var boxes = document.querySelectorAll('.container > div')

  boxes.forEach(function (box) {
    // add event listener to box
    box.addEventListener('click', function (e) {
      // e is the click event
      // e.target is the where the click happened, which is the dom element
      // e.target => <div id="grid[5]"></div>
      // find the index of the target
      // call playturn(index)
      // update pictures on the grids
      //    if 1 setGrid to x
      //    else if 2 setgrid to o
      //    else setgrid to nothing
      // checkwhowin
      //
    // })
  // })
  //
  // boxes.forEach(function (event) {
  //   event.addEventListener('click', function (e) {
  //     // event = 'click' event
  //     // e.target = target that got clicked
  //     playTurn() // set index as argument
  //     // update DOM
  //   })
  // })

  function playTurn (index) {
    if (grid[index]) {
      return false
    } else {
      grid[index] = player
    }
    if (player === 1) {
      player = 2
    } else {
      player = 1
    }
    return true
  }

  function whoWon () {
// check the grid here
// check horizontal
    if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
    if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
    if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
// check vertical
    if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
    if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
    if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
// check diagonal
    if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
    if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
// check draw
    if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8]) {
      return 3
    } else {
      return 0
    }
  }
})
