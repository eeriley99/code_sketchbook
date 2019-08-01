//eye by eer 8/1/19
//demonstrates using shapes to draw a static picture
//GH:eeriley99.github.io/code_sketchbook/eye_picture/

function setup() {
  createCanvas(250, 250);
  background(255);
}

function draw() {
  //eye
  strokeWeight(1);
  fill(0);
  ellipse(width / 2, height / 2, 75, 75);
  noFill();
  ellipse(width / 2, height / 2, 125, 125);
  rectMode(CENTER);

  //frame
  strokeWeight(4);
  rect(width / 2, height / 2, 175, 175);
  rect(width / 2, height / 2, 246, 246);

  strokeWeight(1);
  line(0, 0, 37.5, 37.5);
  line(212.5, 37.5, 250, 0);
  line(0, 250, 37.5, 212.5);
  line(212.5, 212.5, 250, 250);
}
