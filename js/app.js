/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0,1,2], [0,4,8], [0,3,6], [1,4,7], [2,5,8], [3,4,5], [6,7,8], [2,4,6]
]


/*---------------------------- Variables (state) ----------------------------*/
//Create variables to track state of game
// board - state of squares, turn is tracking the turn of player, and winner if 
// a player has won or tied

let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
//Create CER to store all elements with class squareBlock to a nodeList with
// querySelectorAll so they can be accessed via a node list

const squareEls = document.querySelectorAll(".squareBlock")
console.log(squareEls)

//Create messageEl CER to store the element that displays the game status

const messageEl = document.getElementById("message")
//console.log(messageEl)

//Create CER to store board and take advantage of bubbling
const boardEl = document.querySelector(".board")

/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener("click",handleClick)


/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  //console.log("Init Check")
  board = [null,null,null,null,null,null,null,null,null]
  turn = 1
  winner = null
  render()
}

function render(){
  board.forEach(function(square,idx){
    //console.log(square)
    if(square === -1){
      squareEls[idx].style.backgroundColor = "black"
    } else if(square === 1){
      squareEls[idx].style.backgroundColor = "white"
    } else if(square === null){
      squareEls[idx].style.backgroundColor = "red"
    }
  })
  if(winner === null){
    if(turn === 1){
      messageEl.textContent = "Player One, It's Your Turn"
    } else {
      messageEl.textContent = "Player Two, It's Your Turn "
    }
  } else if(winner === 'T'){
    messageEl.textContent = "Both Players Have Tied. Let's Play Again!"
  } else if(winner === 1){
    messageEl.textContent = `Player 1 has won!`
  } else {
    messageEl.textContent = `Player 2 has won!`
  }
}

function handleClick(evt){
  //Takes the element clicked from bubbling, gets the id of the element, and takes the char at index 2(ignores the sq), then parses as an Int to get index value
  const sqIdx = parseInt(evt.target.id.charAt(2))
  if(board[sqIdx] != null || winner != null) return
  board[sqIdx] = turn
  turn = turn * -1
  getWinner()
  render()
}

function getWinner(){
  winningCombos.forEach(function(combo){
    let winningTotal = Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]])
    if(winningTotal === 3){
      winner = board[combo[0]]
    } else if(board.every(element => element === 1 || element === -1)){
      winner = 'T'
    } else {
      winner=null
    }
  })
}
