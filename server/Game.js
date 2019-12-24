const Dice = require('./Dice');

function Game() {
    this.turn = null;
    this.dices = [];

    const times = x => f => {
        if (x > 0) {
          f()
          times (x - 1) (f)
        }
      }

    this.createDice = function(color) {
        this.dices.push(new Dice(color))
    }
    
    this.createDices = function() {
        for (let i = 0; i < 6; i++ ) {
            this.createDice('GREEN')
        }
        for (let i = 0; i < 4; i++ ) {
            this.createDice('YELLOW')
        }
        for (let i = 0; i < 3; i++ ) {
            this.createDice('RED')
        }
    }
};

Game.prototype.addPlayer = function(player) {
    if (typeof player !== Game) {
        console.error(`A player has to be an instance of 'Player' object`);
    }
    this.players.push(player);
    return this.players;
}

Game.prototype.start = function(player) {
    this.createDices();
    this.dices.map(dice => {
        console.log(`${dice.type}: ${dice.roll()}`);
    });
}

module.exports = Game;