var prompt = require('prompt-sync')();

function robotGame() {
    console.log("Foolish human you dare challenge the robot overlord, how foolish. Just to give you a chance I will let you make the first move!")

    var playerMove = Number(prompt("Enter a number below 10: "))
    let robotChoice = ""

    switch (true) {
        case playerMove == 1 && board[0] == "_":
            board[0] = "O";
            while (board[robotChoice] != "_") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X";
            break;
        case playerMove == 2 && board[1] == "_":
            board[1] = "O";
            while (board[robotChoice] != "_") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        case playerMove == 3 && board[2] == "_":
            board[2] = "O";
            while (board[robotChoice] != "_") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        case playerMove == 4 && board[3] == "_":
            board[3] = "O";
            while (board[robotChoice] != "_") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X";
            break;
        case playerMove == 5 && board[4] == "_":
            board[4] = "O";
            while (board[robotChoice] != "_") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        case playerMove == 6 && board[5] == "_":
            board[5] = "O";
            while (board[robotChoice] != "_") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        case playerMove == 7 && board[6] == "_":
            board[6] = "O";
            while (board[robotChoice] != "_") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X";
            break;
        case playerMove == 8 && board[7] == "_":
            board[7] = "O";
            while (board[robotChoice] != "_") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        case playerMove == 9 && board[8] == "_":
            board[9] = "O";
            while (board[robotChoice] != "_") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        default: console.log("Invalid move, please try again.");
    }
    displayBoard();
}
module.exports = robotGame;
