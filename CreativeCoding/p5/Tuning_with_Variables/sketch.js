function setup() {//runs once
  createCanvas(windowWidth, windowWidth);
  fill ('magenta');
  strokeWeight (1);
}

function draw() {//runs in a loop
  

  var num = 2; // variable for the number of squares in the x direction
  
    var sideLen = windowWidth/num; //variable for the side length of each square
  
  for(var y = 0; y < windowWidth; y = sideLen)//loop to create columns 
      
  for(var x = 0; x < windowWidth; x = sideLen) {//loop to create rows
    quad (x, y,
       x + sideLen, y,
       x + sideLen, y + sideLen,
       x, y + sideLen);
 }

  noLoop()
}