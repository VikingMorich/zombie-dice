function Dice(type) {
    if (type !== 'GREEN' && type !== 'YELLOW' && type !== 'RED') {
        console.error(`Dice type must be 'GREEN' 'YELLOW' OR 'RED'`)
        return;
    }
    this.type = type
}

Dice.prototype.roll = function() {
    const roll = Math.floor(Math.random() * 6) + 1;
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

module.exports = Dice;