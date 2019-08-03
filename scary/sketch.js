//scary by eer 8/3/19
//demonstrates graduated color
//GH:eeriley99.github.io/code_sketchbook/scary/

let r, g, b;

function setup() {
  frameRate(10);
  createCanvas(250, 250);
  r = 0;
  g = 0;
  b = 0;
}

function draw() {
  strokeWeight(1);
  scary();
  fill(0);
  ellipse(width / 2, height / 2, 75, 75);
  noFill();
  strokeWeight(1);
  ellipse(width / 2, height / 2, 150, 150);
  rectMode(CENTER);
}

function scary() {
  let c = color(r, g, b);
  fill(c);
  rectMode(CENTER);
  strokeWeight(4);
  rect(width / 2, height / 2, 246, 246);
  strokeWeight(1);
  line(0, 0, 37.5, 37.5);
  line(212.5, 37.5, 250, 0);
  line(0, 250, 37.5, 212.5);
  line(212.5, 212.5, 250, 250);
  strokeWeight(4);
  rect(width / 2, height / 2, 175, 175);

  r = r + 1
  
  while (r >= 254) {
    frameRate(180);
    r = random(0, 100);
    b = random(0, 100);
  }
}
