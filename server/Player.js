const uuidv4 = require("uuid/v4")

function Player({
  name = 'Guest' + rand(9999),
  id = uuidv4(),
  score = 0,
}) {
  this.name = name;
  this.id = id;
  this.score = score;
};

function rand(n) {
  return Math.floor(Math.random() * n + 1)
}

module.exports = Player;