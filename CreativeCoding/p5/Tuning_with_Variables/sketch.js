let gif;

function preload(){
  gif=loadImage('Assets_2/Skull.gif');



}


function setup() {// runs ounces
  createCanvas(windowWidth, windowHeight);
  fill("red");
  strokeWeight(1);
}

function draw() {

var num = 20; // number of squares
var sideLen = windowWidth/num; //side length of square

  for (var x = 0; x < windowWidth; x = x + sideLen) {//squares in x direction
    for (var y = 0; y < windowWidth; y = y + sideLen) {// in y direction
image (gif,x,y);
  }
  function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
  }

}
