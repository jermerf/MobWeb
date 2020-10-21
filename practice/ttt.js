const readline = require('readline-sync')

/*  0 nobody has played there yet
    1 X
    2 O
    
    0 1 2
    3 4 5
    6 7 8
*/

var game = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
]
const X = 1
const O = 2

const winningCombos = [
  // Horizontal Lines
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  // Vertical Lines
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  // Diagizontal Lines
  [0, 4, 8], [2, 4, 6]
]

function playerWins() {
  for (var combo of winningCombos) {
    var i0 = combo[0]
    var i1 = combo[1]
    var i2 = combo[2]
    if (game[i0] == game[i1] && game[i1] == game[i2]) {
      if (game[i0] != 0) return true
    }
  }
}

function showBoard() {
  var line = ""
  for (var i = 0; i < game.length; i++) {
    line += getMarker(game[i]) + " "
    if (i % 3 == 2) {
      console.log(line)
      line = ""
    }
  }
}
function getMarker(code) {
  switch (code) {
    case 0: return "-";
    case 1: return "X";
    case 2: return "O";
  }
}

// var yourName = readline.question("Your name?")
// console.log(`You are ${yourName}`)

var hasWinner = false
var player = X
while (!hasWinner) {
  showBoard()
  var playPosition = readline.question(`Where would ${getMarker(player)} like to play?`)

  if (game[playPosition]) {
    console.log(`Someone has played there already`)
    continue
  } else if (!(playPosition >= 0 && playPosition <= 8)) {
    console.log(`Enter a valid position`)
    continue
  }

  game[playPosition] = player

  if (playerWins()) {
    hasWinner = true
  } else {
    // Swap players
    if (player == X) player = O; else player = X
  }
}
showBoard()
console.log(`Player ${getMarker(player)} Wins!!!`)