var prompt = require('prompt-sync')();

function robotGame() {
    var playerMove = Number(prompt("Enter a number from 1 to 9: "))
    let robotChoice = ""

    switch (true) {
        case playerMove == 1 && board[0] == "":
            board[0] = "O";
            while (board[robotChoice] != "") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X";
            break;
        case playerMove == 2 && board[1] == "":
            board[1] = "O";
            while (board[robotChoice] != "") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        case playerMove == 3 && board[2] == "":
            board[2] = "O";
            while (board[robotChoice] != "") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        case playerMove == 4 && board[3] == "":
            board[3] = "O";
            while (board[robotChoice] != "") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X";
            break;
        case playerMove == 5 && board[4] == "":
            board[4] = "O";
            while (board[robotChoice] != "") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        case playerMove == 6 && board[5] == "":
            board[5] = "O";
            while (board[robotChoice] != "") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        case playerMove == 7 && board[6] == "":
            board[6] = "O";
            while (board[robotChoice] != "") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X";
            break;
        case playerMove == 8 && board[7] == "":
            board[7] = "O";
            while (board[robotChoice] != "") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        case playerMove == 9 && board[8] == "":
            board[9] = "O";
            while (board[robotChoice] != "") {
                robotChoice = Math.floor(Math.random() * 9 + 1);
            }
            board[robotChoice] = "X"
            break;
        default: console.log("Invalid move, please try again.");
    }
    displayBoard();
}
module.exports = robotGame;
