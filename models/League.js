const Game = require("./Game");
const Opponent = require("./Opponent");

class League {
    constructor() {
        this.season = {
            "2022": []
        }
        this.players = [];
    }

    addGame(game, year) {
        this.season[year].push(game)
    }

    addPlayer(player) {
        this.players.push(player)
    }

    simulateGames(games) {
        for (let i = 0; i <= games; i++) {
            let randIdx = Math.floor(Math.random() * this.players.length)
            let player1 = this.players[randIdx]
            let temp = this.players.filter(p => p.firstName != player1.firstName)
            let randIdx2 = Math.floor(Math.random() * temp.length)
            let player2 = temp[randIdx2]
            let game = new Game(player1, player2);
            game.simulate();
            this.addGame(game, 2022)
        }
    }

    bulkAdd(players) {
        players.forEach(({firstName, lastName, skillLevel, nationality}) => {
            this.addPlayer(new Opponent(firstName, lastName, nationality, skillLevel))
        })
    }

    displayRankings() {
        this.players.sort((a, b) => {
            if(a.record.wins < b.record.wins) {
                return 1;
            } else return -1
        }).forEach((player, idx) => {
            console.log(`${idx + 1} | ${player.firstName} ${player.lastName} | ${player.record.wins}-${player.record.losses}`)
        })
    }
}

module.exports = League