const Game = require('./Game');

test('it should be able to manage a gutter game', () => {
  game = new Game();
  for(let i = 0; i < 20; i++){
    game.roll(0);
  }
  expect(game.calculateScore()).toEqual(0);
});

test('it should be able to manage a game with all ones ', () => {
  game = new Game();
  for(let i = 0; i< 20; i++){
    game.roll(1);
  }
  expect(game.calculateScore()).toEqual(20);
});