function wonCheck(board, turnPlayer) {
       
    let won = "";

    const a = [0, 3, 6, 0, 1, 2, 0, 2];
    const b = [1, 4, 7, 3, 4, 5, 4, 4];
    const c = [2, 5, 8, 6, 7, 8, 8, 6];

    a.forEach((num1, index) => {
        const num2 = b[index]
        const num3 = c[index]

        if (new Set([board[num1], board[num2], board[num3]]).size == 1 && turnPlayer == true && board[num1] != "") {
            return console.log(won = "player")
        } else if (new Set([board[num1], board[num2], board[num3]]).size == 1 && turnPlayer == false && board[num1] != "") {
            return won = "bot"
        }
    })

}


module.exports = wonCheck;

