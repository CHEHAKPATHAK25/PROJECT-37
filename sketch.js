var canvas;
var gameState = 0;
var contestantCount, database;
var quiz, question, contestant;

function setup(){
  canvas = createCanvas(800,400);
  //join VSC to firebase
  database=firebase.database();
}

function draw(){
  background("pink");

  getState();
  start();
  //clear the game in tyhe play and call the play function from Quiz class
  if(gameState === 1) {
    clear();
    game.play();
  }
  //update the game to gameStatre 1
  if(playerCount === 4) {
    game.update(1);
  }
}