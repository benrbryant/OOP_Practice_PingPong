const players = require("./data/players");
const { League } = require("./models")

const league = new League();

league.bulkAdd(players)

league.simulateGames(40);

league.displayRankings();