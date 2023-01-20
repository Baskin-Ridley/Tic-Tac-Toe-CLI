var prompt = require('prompt-sync')();

function ticTacToe(){

    console.log("Welcome to the exciting game of Tic Tac Toe! This is a battle to decide the fate of the world. The name of the game is to be the first person to dominate the battlefield with three in a row! The first player is represented by the O and the second player the X.")

    ticTacToeMove();

}


// Create board for game
var board = ["_", "_", "_",
             "_", "_", "_",
             "_", "_", "_"];


// variables to keep track of current player

let playerTurn = true; 

// create function to display board 
function displayBoard() {
	console.log(board[0] + " | " + board[1] + " | " + board[2]);
    console.log("---------");
	console.log(board[3] + " | " + board[4] + " | " + board[5]);
    console.log("---------");
	console.log(board[6] + " | " + board[7] + " | " + board[8]);
}

displayBoard();


// create function to check for who's won



function ticTacToeMove() { 

    var playerMove =  Number(prompt("Enter a number below 10: "))

    switch(true) {
        case playerMove == 1 && board[0] == "_":
            if(playerTurn == true){
                board[0] = "O";
                playerTurn = false;
                console.log("we went in!")
            }else{
                board[0] = "X";
                playerTurn = true;
            }
          break;
        case playerMove == 2 && board[1] == "_":
            if(playerTurn == true){
                board[1] = "O";
                playerTurn = false;
                console.log("we went in!")
            }else{
                board[1] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 3 && board[2] == "_":
            if(playerTurn == true){
                board[2] = "O";
                playerTurn = false;
            }else{
                board[2] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 4 && board[3] == "_":
            if(playerTurn == true){
                board[3] = "O";
                playerTurn = false;
            }else{
                board[3] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 5 && board[4] == "_":
            if(playerTurn == true){
                board[4] = "O";
                playerTurn = false;
            }else{
                board[4] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 6  && board[5] == "_":
            if(playerTurn == true){
                board[5] = "O";
                playerTurn = false;
            }else{
                board[5] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 7 && board[6] == "_":
            if(playerTurn == true){
                board[6] = "O";
                playerTurn = false;
            }else{
                board[6] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 8 && board[7] == "_":
            if(playerTurn == true){
                board[7] = "O";
                playerTurn = false;
            }else{
                board[7] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 9 && board[8] == "_":
            if(playerTurn == true){
                board[8] = "O";
                playerTurn = false;
            }else{
                board[8] = "X";
                playerTurn = true;
            }
            break;
        default: console.log("Invalid move, please try again.");
}

}

// ask player for current move (location on board)


//ticTacToe();
