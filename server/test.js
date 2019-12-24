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
        console.log(this);
        this.dices.push(new Dice(color))
    }
    
    this.createDices = function() {
        times(6)(this.createDice('GREEN'));
        times(4)(this.createDice('YELLOW'));
        times(2)(this.createDice('RED'));
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
    console.log(this.dices.map(dice => dice.roll()));
}

function Dice(type) {
    if (type !== 'GREEN' || type !== 'YELLOW' || type !== 'RED') {
        console.error(`Dice type must be 'GREEN' 'YELLOW' OR 'RED'`)
    }
    this.type = type
}

Dice.prototype.roll = function() {
    const roll = Math.floor(Math.random(7));
    switch(this.type) {
        case 'GREEN':
            if (roll < 4) return 'BRAIN';
            if (roll < 6) return 'STEPS';
            return 'SHOT';
        case 'YELLOW':
            if (roll < 3) return 'BRAIN';
            if (roll < 5) return 'STEPS';
            return 'SHOT';
        case 'RED':
            if (roll < 3) return 'SHOT';
            if (roll < 5) return 'STEPS';
            return 'BRAIN';
    }
}

const game = new Game();
game.start();