// Create board for game
let board = [" ", " ", " ",
             " ", " ", " ",
             " ", " ", " "];


// variables to keep track of current player

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


// ask player for current move (location on board)
