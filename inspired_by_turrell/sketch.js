//scary by eer 8/3/19
//demonstrates graduated color


let r, g, b;

function setup() {
  frameRate(120);
  createCanvas(250, 250);
  r = 0;
  g = 0;
  b = 0;

  //saveFrames ("scary", "jpg", 240, 3);
}

function draw() {
  strokeWeight(1);
  scary();

  fill(255, 0, 0, 50);
  strokeWeight(1);
  ellipse(width / 2, height / 2, 150, 150);
  fill(0, 0, 165);
  ellipse(width / 2, height / 2, 75, 75);
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
  strokeWeight(1);
  fill(0, 50, 50, 50);
  rect(width / 2, height / 2, 175, 175);

  r = r + 1

  while (r >= 254) {
    frameRate(180);
    r = random(0, 100);
    b = random(0, 100);
  }
}