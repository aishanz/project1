let diamond;
let ocean;
let lip;
let full;
//let rotation = 0;

let diamondX;
let diamondY;

let diamondXspeed;
let diamondYspeed;

let mouseCollide;

let score = 0;

let endScreenBool = false;

function preload() {
  diamond = loadImage("Image/diamond_PNG.png");
  ocean = loadImage("Image/ocean.png");
  lip = loadImage ("Image/lip.png");
  full = loadImage ("Image/full.png");
}
function resizeCanvas(){
  windowResized(windowWidth,windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  diamondX = random(21, width - 21);
  diamondY = random(21, height - 21);

  diamondXspeed = 2;
  diamondYspeed = 2;

  imageMode(CENTER);
  //rectMode(CENTER);
}

function draw() {
  push();
  imageMode(CORNER);
  background(ocean, width, height);
  pop();

  fill(255);
  textSize(30);
  text("Score" + score + "00", width / 2, 50);

  image(lip,mouseX,mouseY,100,100);
  //rotation++;
  image(diamond,diamondX, diamondY, 50, 50);
  diamondX = diamondX + diamondXspeed;
  diamondY = diamondY + diamondYspeed;

  mouseCollide = dist(mouseX, mouseY, diamondX, diamondY);

  if (diamondX >= width - 20 || diamondX <= 20) {
    diamondXspeed = diamondXspeed * -1;
  }

  if (diamondY >= height - 20 || diamondY <= 20) {
    diamondYspeed = diamondYspeed * -1;
  }


  //if the mouse collision is true
  //trigger all of that stuff
  if (mouseCollide < 30) {
    score++;

    diamondX = random(21, width - 21);
    diamondY = random(21, height - 21);
    diamondXspeed = diamondXspeed * 1.2;
    diamondYspeed = diamondYspeed * 1.2;
  }
  print(score);
  //ellipse(100,400,80,80);
  //push to a new layer
  //anything between push and pop
  //wiil be affected
  //push();
  //translate(width/2,height/2);
  //rotate(radians(rotation));
  //image(furby,0,0);
  //pop();

  if (score == 10) {
    endScreenBool = true;
  }

  if (endScreenBool == true) {
    endScreen();
  }


}

function endScreen() {
  background(random(225), random(255), random(255));
  image(full, width / 2, height / 2, 400, 400);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
