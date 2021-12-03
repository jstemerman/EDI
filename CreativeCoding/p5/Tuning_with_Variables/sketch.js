

let gif;//declare image variable

function preload (){
gif = loadImage ('Assets_2/Skull.gif');
}

function setup() { //runs once
  createCanvas(windowWidth, windowHeight);

}

function draw() {

translate(100, 100)

var num = 3; //variable for the number of squares in the grid
var sideLen = windowWidth/num; //variable for the side length of each square

  for (var y = 0; y < windowHeight + 100; y = y + sideLen) {//loop to create rows in the y direction
     for (var x = 0; x < windowWidth + 100; x = x + sideLen) {// loop to create a row of squares in the x direction0
image (gif, x, y);
  }
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
