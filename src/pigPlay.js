export default function Player(yourTurn, rollCount, totalScore, turnScore, rollValue) {
  this.yourTurn = yourTurn;
  this.rollCount = rollCount; 
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.rollValue = rollValue;
}

Player.prototype.rollDice = function() {
  this.rollValue = Math.floor(Math.random() * 6) + 1;

  if (this.rollValue === 1) {
    this.turnScore = 0;
    this.rollCount = 0;
    this.yourTurn = false;
  
  } else {
    this.turnScore += this.rollValue;
    this.rollCount ++;
    this.yourTurn = true;
  } 

  if (this.totalScore >= 100) {
    console.log("YOU WIN!!!");
  }
};


Player.prototype.hold = function() {
  this.yourTurn = false;
  this.rollCount = 0;
  this.totalScore += this.turnScore
  this.turnScore = 0;
};

