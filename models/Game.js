class Game {
    constructor(opp1, opp2) {
        this._totalScore = 11;
        this._isPlaying = true;
        this.winner = null;
        this.loser = null;
        this.opp1 = opp1;
        this.opp2 = opp2;
        this.score = {
            player1: 0,
            player2: 0
        }
    }

    displayResults() {
        console.log(`${this.winner.firstName} beat ${this.loser.firstName}, ${this.score.player1 > this.score.player2 ? `${this.score.player1} - ${this.score.player2}` : `${this.score.player2} - ${this.score.player1}`}`)
    }

    simulate() {
        while(this._isPlaying) {
            let scorer = Math.round(Math.random()) ? "player1": "player2";
            this.score[scorer]++;
            if((this.score.player1 == this._totalScore && this.score.player1 >= this.score.player2 + 2) || (this.score.player2 == this._totalScore && this.score.player2 >= this.score.player1 + 2)) {
                this._isPlaying = false;
                if(this.score.player1 > this.score.player2) {
                    this.winner = this.opp1;
                    this.loser = this.opp2;
                } else {
                    this.winner = this.opp2
                    this.loser = this.opp1
                }

                this.winner.updateRecord(true);
                this.loser.updateRecord(false);

                this.displayResults();
            } else if(this.score.player2 + this.score.player1 >= 100) {
                this._isPlaying = false
            }
        }
    }
}

module.exports = Game;