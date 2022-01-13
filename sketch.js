let gif;

function preload (){
  gif = loadImage ('Assets_2/SkullGif2.gif');
}

function setup() { //runs once
  createCanvas(windowWidth, windowHeight*2);
  fill('indigo');
  strokeWeight(1);
}

function draw() {
background (255);

translate(-100, -100)

var num = 57; //variable for the number of squares in the array
var sideLen = windowWidth/num;//variable for the side lenth of each square

  for (var y = 0; y < 2*windowHeight; y = y + sideLen) {//loop to create rows in the y direction
     for (var x = 0; x < 2*windowWidth; x = x + sideLen) {// loop to create a row of squares in the x direction0
    image(gif, x, y, windowWidth*.9/num, windowWidth*.9/num);


  }
}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
