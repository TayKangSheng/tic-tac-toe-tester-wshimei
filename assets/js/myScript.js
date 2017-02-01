window.addEventListener('DOMContentLoaded', function () {
  // console.log('Intialised')

  var grid = []
  var player = 1
  var boxes = document.querySelectorAll('.container > div')
  // console.log('grid: '+grid)
  // console.log('player: '+player)

  boxes.forEach(function (box) {
    // console.log('forEach Item: ')
    // console.log(box)
    box.addEventListener('click', function () {
      var data = $(this).data('num')
      // console.log("data: "+data)
      // console.log("grid: "+grid)
      if (playTurn(data)) {
        if (player === 1) {
          $(this).text('X')
        } else {
          $(this).text('O')
        }
        if (isGameOver() === true) {
          restart()
          $('.box').empty()
        }
      }
    })
  })

  function playTurn (index) {
    // console.log('play turn')
    if (grid[index]) {
      alert('This square is taken!')
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

  function isGameOver () {
    // console.log('is Game Over')
    var status = whoWon()
    // console.log('whoWon: '+status)
    if (status === 1 || status === 2) {
      // console.log("whoWon === 1 || 2 || 3")
      alert('GAME OVER! PLAYER ' + whoWon() + ' WON!!')
      return true
    } else if (status === 3) {
      alert('GAME DRAW!')
      return true
    } else {
      return false
    }
  }

  function restart () {
    grid = []
    player = 1
  }
})
