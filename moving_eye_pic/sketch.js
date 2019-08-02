function setup() {
  createCanvas(250, 250);
  background(255);
}

function draw() {
    //eye
  noFill();
  strokeWeight(1);
  fill(255);
  ellipse(width / 2, height / 2, 150, 150);
  pvl = createVector(mouseX - 75, mouseY - 75);
  pvl.limit(35);
  fill(0);
  ellipse((width / 2) + pvl.x, (height / 2) + pvl.y, 75, 75);
  frame ();
}
  function frame () {
  noFill();
  rectMode(CENTER);
  strokeWeight(4);
  rect(width / 2, height / 2, 175, 175);
  rect(width / 2, height / 2, 246, 246);

  strokeWeight(1);
  line(0, 0, 37.5, 37.5);
  line(212.5, 37.5, 250, 0);
  line(0, 250, 37.5, 212.5);
  line(212.5, 212.5, 250, 250);
  }


