//eye by eer 8/1/19
//demonstrates using shapes to draw a static picture

function setup() {
  createCanvas(400, 400);
  background(255);

}

function draw() {
  
  //eye
  strokeWeight(1);
  fill(0);
  ellipse(width / 2, height / 2, 150, 150);
  noFill();
  ellipse(width / 2, height / 2, 250, 250);
  rectMode(CENTER);
  
  //frame
  strokeWeight(4);
  rect(width / 2, height / 2, 300, 300);
  rect(width / 2, height / 2, 398, 398);
  
  strokeWeight(1);
  line(0, 0, 50, 50);
  line(350, 50, 400, 0);
  line(0, 400, 50, 350);
  line(350, 350, 400, 400);

}