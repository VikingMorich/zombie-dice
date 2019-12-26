const testData = require('./testData');
const Game = require('../Game');
const Player = require('../Player');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('When a game is created', () => {
    it('should set turn correctly', () => {
      expect(game.turn).toEqual({
        playerId: null,
        score: 0,
      });
    });
    
    it('should set pickedDices correctly', () => {
      expect(game.pickedDices).toBeNull();
    });

    it('should set players correctly', () => {
      expect(game.players).toEqual([]);
    });

    it('should set dices correctly', () => {
      expect(game.dices).toEqual([]);
    });
  });

  describe('When adding a single', () => {
    describe('When the game had no previous players', () => {
      beforeEach(() => {
        game.addPlayer(testData.players[0]);
      });
      it('should add player correctly', () => {
        expect(game.players).toEqual([testData.players[0]]);
      });
    });

    describe('When the game had previous players', () => {
      const prevPlayer = new Player();
      beforeEach(() => {
        game.addPlayer(prevPlayer);
      });
      it('should add player correctly', () => {
        expect(
          game.addPlayer(testData.players[0])
        ).toEqual([prevPlayer, testData.players[0]]);
      });
    });
  });

  describe('When adding multiple players', () => {
    describe('When the game had no previous players', () => {
      beforeEach(() => {
        game.addPlayers(testData.players);
      });
      it('should add players correctly', () => {
        expect(game.players).toEqual(testData.players);
      });
    });

    describe('When the game had previous players', () => {
      const prevPlayer = new Player();
      beforeEach(() => {
        game.addPlayer(prevPlayer);
      });
      it('should add players correctly', () => {
        expect(
          game.addPlayers(testData.players)
        ).toEqual([prevPlayer, ...testData.players]);
      });
    });
  });
});