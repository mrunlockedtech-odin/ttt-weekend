/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
//Create variables to track state of game
// board - state of squares, turn is tracking the turn of player, and winner if 
// a player has won or tied

let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
//Create CER to store all elements with class squareBlock to a nodeList with
// querySelectorAll so they can be accessed via a node list

const squareEls = document.querySelectorAll(".squareBlock")
//console.log(squareEls)

//Create messageEl CER to store the element that displays the game status

const messageEl = document.getElementById("message")
//console.log(messageEl)


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

