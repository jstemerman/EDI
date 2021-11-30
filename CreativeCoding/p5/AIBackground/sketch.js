let img;

function preload () {
  img = loadImage('assets/Design.png');
}

function setup() {//runs once
  createCanvas(720, 720);
  fill ('magenta');
  strokeWeight (8);
}

function draw() {//runs in a loop
  background(220);

  translate(60,60);

  for(var y = 0; y < 600; y = y + 300)//loop to create columns

  for(var x = 0; x < 600; x = x + 300) {//loop to create rows
    quad (x, y,
       x + 300, y,
       x + 300, y + 300,
       x, y + 300);
 }

  noLoop()
}
