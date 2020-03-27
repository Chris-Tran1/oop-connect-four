export class GameJsonSerializer {
    constructor(game) {
        this.game = game;
    }
    serialize() {
        const data = {
            playerOneName: this.game.player1,
            playerTwoName: this.game.player2,
            tokens: [[], [], [], [], [], []],
        };
        for (let rowIndex = 0; rowIndex < 6; rowIndex += 1) {
            for (let columnIndex = 0; columnIndex < 7; columnIndex += 1) {
                const tokenValue = this.game.getTokenAt(rowIndex, columnIndex);
                data.tokens[rowIndex][columnIndex] = tokenValue;
            }
            // TOKEN ARRAYS  AS ROWS      COLUMNS
            //[[1], [], [], [], [], []],   1
            //[[2], [], [], [], [], []],   2
            //[[3], [], [], [], [], []],   3 
            //[[4], [], [], [], [], []],   4
            //[[5], [], [], [], [], []],   5
            //[[6], [], [], [], [], []],   6
            //[[7], [], [], [], [], []],   7
        }
        return JSON.stringify(data);
    }
}