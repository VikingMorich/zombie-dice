const Dice = require('./Dice');
const Player = require('./Player');
function Game() {
  this.turn = {
    playerId: null,
    score: 0,
  };
  this.pickedDices = null;
  this.players = [];
  this.dices = [];
};

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

Game.prototype.createDice = function (color) {
  this.dices.push(new Dice(color));
}

Game.prototype.createDices = function () {
  for (let i = 0; i < 6; i++) this.createDice('GREEN');
  for (let i = 0; i < 4; i++) this.createDice('YELLOW');
  for (let i = 0; i < 3; i++) this.createDice('RED');
}

Game.prototype.pickDices = function() {
  if (!!this.pickedDices) {
    console.error('Dices are already picked');
  }
  const dices = this.dices.filter(dice => dice.state === 'STEPS');
  this.dices = this.dices.filter(dice => dice.state !== 'STEPS');
  this.dices = shuffle(this.dices);
  dices.push(this.dices.splice(0, 3 - dices.length()));
  this.pickedDices = dices;
  return dices
}

Game.prototype.roll = function() {
  if (!this.pickedDices) {
    console.error('You have to pick dices before rolling')
  }
  const dices = this.pickedDices;
  dices.map(dice => dice.roll());
  this.dices.push(dices);
  const shots = this.dices.filter(dice => dice.state === 'SHOT');
  if( shots >= 3) {
    this.turn.score = 0;
  } else {
    const brains = dices.filter(dice => dice.state === 'BRAIN');
    this.turn.score += brains.length;
  }
  this.pickedDices = null;
  return dices;
}

Game.prototype.getScoreboard = function() {
  return this.players.reduce((acc, curr) => {
    acc[curr.name] = curr.score;
  }, {});
}

Game.prototype.playerHasFinished = function(id) {
  return this.players.find(({id}) => id === nextIndex).finished;
}

Game.prototype.getPlayerIndex = function(id) {
  return this.players.findIndex(player => player.id === id);
}

Game.prototype.addScore = function(playerId, score) {
  return this.players.find(({id}) => id === nextIndex).finished;
}

Game.prototype.endTurn = function() {
  const { playerId, score } = this.turn;
  this.addScore(playerId, score);
  const currentIndex = this.getPlayerIndex(playerId);
  const nextIndex = this.players[currentIndex + 1] ? currentIndex + 1 : 0;
  this.turn.playerId = this.players[nextIndex].id;
  if (this.playerHasFinished(nextIndex)) this.endGame();
}

Game.prototype.endGame = function() {
  const winner = this.players.reduce((acc, curr) => {
    if (!acc) return curr;
    return curr.score > acc.score ? curr : acc;
  }, { score: 0});
  console.log(`And the winner is... ${winner.name}`);
  console.log(this.getScoreboard());
}


Game.prototype.addPlayer = function (player) {
  if (!(player instanceof Player)) {
    console.error(`A player has to be an instance of 'Player' object`);
  }
  this.players.push(player);
  return this.players;
}

Game.prototype.addPlayers = function (players) {
  players.map(player => this.addPlayer(player))
  return this.players;
}

Game.prototype.start = function () {
  this.createDices();
  this.dices.map(dice => {
    console.log(`${dice.type}: ${dice.roll()}`);
  });
}

module.exports = Game;
