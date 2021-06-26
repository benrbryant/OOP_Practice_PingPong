class Opponent {
    constructor(firstName, lastName, nationality, skillLevel = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nationality = nationality;
        this.skillLevel = skillLevel;
        this.record = {
            wins: 0,
            losses: 0,
            games: 0
        }
    }

    updateRecord(didWin) {
        this.record[didWin ? 'wins' : 'losses']++;
        this.record.games++;
    }
}

module.exports = Opponent;