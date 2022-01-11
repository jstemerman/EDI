/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/
var pW = 11 //width of paper in inches
var pH = 8.5 //height of paper in inches

var canvasWidth = pW * 72
var canvasHeight = pH * 72

function setup() {
  createCanvas(canvasWidth, canvasHeight, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
  background(230)
}

function draw() {
  for (var y = 0; y < canvasHeight; y = y + 100){
  for (var x = 50; x < canvasWidth; x = x + 100){
    line (x, y, x + random (30, 50), y + random (35, 50));
    line (x + 10, y, x + 10 + random (35, 50), y + random(40, 50));
    line (x + 50, y + 50, x + 50 - random(30, 50), y + 50 + random (35,50));
    line (x + 40, y + 50, x + 40 - random(30, 50), y + 50 + random (35,50));
  }
}

function draw() {
    for (var y = 0; y < canvasHeight; y = y + 100){
    for (var x = 50; x < canvasWidth; x = x + 100){
      ellipse(x - 10, y + 25, random(8, 23), random ( 8, 23));
      ellipse(x + 60, y + 75, random(8, 23), random(8, 23));
      rotate(PI/3.0)
    //ellipse(x + 55, y + 25 + random(-5, 5), random(6, 13), random ( 9, 16));
    //ellipse(x - 5, y + 75 + random(-5, 5), random(6, 13), random ( 9, 16))

  }
}


  //save("mySVG.svg"); // give file name
  //print("saved svg");
  noLoop(); // we just want to export once
}
