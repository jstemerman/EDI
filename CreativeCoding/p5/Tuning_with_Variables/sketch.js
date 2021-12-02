let gif;

function preload(){
  gif = loadImage (Assets_2/Backgroundpractice.png)
}

function setup() {//runs once
  createCanvas(windowWidth, windowHeight);
  fill ('red');
  strokeWeight (1);
}

function draw() {//runs in a loop


  var num = 6; // variable for the number of squares in the x direction

    var sideLen = windowWidth/num; //variable for the side length of each square

  for(var y = 0; y < windowHeight; y = y + sideLen) {//loop to create columns

  for(var x = 0; x < windowWidth; x = x + sideLen){ //loop to create rows

    image (gif, x, y)
 }
  }

  noLoop()
}
