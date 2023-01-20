function wonCheck(board, playerTurn) {

    let won = "";

    const a = [0, 3, 6, 0, 1, 2, 0, 2];
    const b = [1, 4, 8, 3, 4, 5, 4, 4];
    const c = [2, 5, 8, 6, 7, 8, 8, 6];

    a.forEach((num1, index) => {
        const num2 = b[index]
        const num3 = c[index]
        console.log(num1, num2, num3)

        if (new Set([board[num1], board[num2], board[num3]]).size == 1 && playerTurn == true) {
            return won = "player"
        } else if (new Set([board[num1], board[num2], board[num3]]).size == 1 && playerTurn == false) {
            return won = "bot"
        }
    })

}


module.exports = wonCheck;
