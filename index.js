var prompt = require('prompt-sync')();
const check = require('./wonCheck');
const robotGame = require('./robotGame');
function ticTacToe() {

    var howManyPlayers = Number(prompt("How many people would like to play? (1 or 2): "))
    if (howManyPlayers == 1) {
        console.log("Foolish human you dare challenge the robot overlord, how foolish. Just to give you a chance I will let you make the first move!")
        robotGame();
    } else if (howManyPlayers == 2) {
        console.log("Welcome to the exciting game of Tic Tac Toe! This is a battle to decide the fate of the world. The name of the game is to be the first person to dominate the battlefield with three in a row! The first player is represented by the O and the second player the X.")
        ticTacToeMove();
    }
    else(console.log("Invalid input, please try again."))
}


// Create board for game
var board = ["", "", "",
             "", "", "",
             "", "", ""];

// variables to keep track of current player
let playerTurn = true;

console.log(check(board,playerTurn));

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

    let turn = 1;
do{
    var playerMove = Number(prompt("Enter a number from 1 to 9: "))

    switch (true) {
        case playerMove == 1 && board[0] == "":
            if (playerTurn == true) {
                board[0] = "O";
                playerTurn = false;
                console.log("we went in!")
            } else {
                board[0] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 2 && board[1] == "":
            if (playerTurn == true) {
                board[1] = "O";
                playerTurn = false;
                console.log("we went in!")
            } else {
                board[1] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 3 && board[2] == "":
            if (playerTurn == true) {
                board[2] = "O";
                playerTurn = false;
            } else {
                board[2] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 4 && board[3] == "":
            if (playerTurn == true) {
                board[3] = "O";
                playerTurn = false;
            } else {
                board[3] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 5 && board[4] == "":
            if (playerTurn == true) {
                board[4] = "O";
                playerTurn = false;
            } else {
                board[4] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 6 && board[5] == "":
            if (playerTurn == true) {
                board[5] = "O";
                playerTurn = false;
            } else {
                board[5] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 7 && board[6] == "":
            if (playerTurn == true) {
                board[6] = "O";
                playerTurn = false;
            } else {
                board[6] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 8 && board[7] == "":
            if (playerTurn == true) {
                board[7] = "O";
                playerTurn = false;
            } else {
                board[7] = "X";
                playerTurn = true;
            }
            break;
        case playerMove == 9 && board[8] == "":
            if (playerTurn == true) {
                board[8] = "O";
                playerTurn = false;
            } else {
                board[8] = "X";
                playerTurn = true;
            }
            break;
        default: console.log("Invalid move, please try again.");
    }
	displayBoard();
 }while( turn <= 9 && check(board,playerTurn) != "player" &&  check(board,playerTurn) != "bot" ) 

 if (  check(board,playerTurn) == "player" ||  check(board,playerTurn) == "bot" ){

 }

}

// ask player for current move (location on board)
function playAnother() {
    var playAgain = prompt("Would you like to play again? (Y/N): ").toLowerCase();
    if (playAgain == "y") {
        board = ["_", "_", "_",
        "_", "_", "_",
        "_", "_", "_"];
        playerTurn = true;
        ticTacToe();
    } else if (playAgain == "n") {
        console.log("Thank you for playing!")
    } else {
        console.log("Invalid input, please try again.")
    }
}

//ticTacToe();

