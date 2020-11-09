var hypnoticBall, database;
var position;
var car1_img, car2_img, car3_img, car4_img, track_img, ground_img

function preload(){
  car1_img = loadImage("images/car1.png")
  car2_img = loadImage("images/car2.png")
  car3_img = loadImage("images/car3.png")
  car4_img = loadImage("images/car4.png")
  track_img = loadImage("images/track.jpg")
  ground_img = loadImage("images/ground.png")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth - 20, displayHeight - 30);
  game = new Game()
  game.getState()
  game.start()

}

function draw(){
  if (playercount == 4){
    game.update(1)
  }
  if (gamestate == 1){
      clear()
      game.play()
  }
  if (gamestate == 2){
    game.end()
  } 
}