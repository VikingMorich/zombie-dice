const uuidv4 = require("uuid/v4")

function Player(options = {}) {
  this.name = options.name || `Guest${rand(9999)}`;
  this.id = options.id || uuidv4();
  this.score = options.score || 0;
};

function rand(n) {
  return Math.floor(Math.random() * n + 1)
}

module.exports = Player;