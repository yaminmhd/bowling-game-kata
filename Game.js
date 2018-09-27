class Game {
  constructor() {
    this.score = 0;
  }

  roll(pins){
    this.score += pins;
  }

  calculateScore(){
    return this.score;
  }
}

module.exports = Game;