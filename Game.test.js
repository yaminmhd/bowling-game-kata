const Game = require('./Game');

beforeEach(()=>{
  game = new Game();
})

const rollMultipleRounds = (numberOfTimesBallRolled, pinsHits) => {
  for(let i = 0; i< numberOfTimesBallRolled; i++){
    game.roll(pinsHits);
  }
}

test('it should be able to manage a gutter game', () => {
  rollMultipleRounds(20,0);
  expect(game.calculateScore()).toEqual(0);
});

test('it should be able to manage a game with all ones ', () => {
  rollMultipleRounds(20,1);
  expect(game.calculateScore()).toEqual(20);
});