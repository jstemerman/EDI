function setup() {//runs once
  createCanvas(720, 720);
  fill ('magenta');
  strokeWeight (8);
}

function draw() {//runs in a loop
  background(220);

  translate(60,60);

  quad (0, 0,
       300, 0,
       300, 300,
       0, 300)

  quad (300,0,
       600, 0,
      600, 300,
       300, 300)//increase in x pixels

    quad (0, 300,
          300, 300,
          300, 600,
          0, 600)

    quad (300, 300,
         600, 300,
         600, 600,
         300, 600)//increase in y by 300 pixels

  noLoop()
}
