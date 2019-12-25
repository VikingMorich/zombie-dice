function Dice(type) {
    if (type !== 'GREEN' && type !== 'YELLOW' && type !== 'RED') {
        console.error(`Dice type must be 'GREEN' 'YELLOW' OR 'RED'`)
        return;
    }
    this.type = type
}

Dice.prototype.setState = function(state) {
  if (type !== 'BRAIN' && type !== 'STEPS' && type !== 'SHOT') {
    console.error(`Dice state must be 'BRAIN' 'STEPS' OR 'SHOT'`)
  }
  this.state = state;
  return this.state
}

Dice.prototype.roll = function() {
    const roll = Math.floor(Math.random() * 6) + 1;
    switch(this.type) {
        case 'GREEN':
            if (roll < 4) return this.setState('BRAIN');
            if (roll < 6) return this.setState('STEPS');
            return this.setState('SHOT');
        case 'YELLOW':
            if (roll < 3) return this.setState('BRAIN');
            if (roll < 5) return this.setState('STEPS');
            this.setState('SHOT');
        case 'RED':
            if (roll < 3) return this.setState('SHOT');
            if (roll < 5) return this.setState('STEPS');
            return this.setState('BRAIN');
    }
}

module.exports = Dice;