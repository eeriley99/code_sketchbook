//scary2 by eer 4/8/2020
//demonstrates graduated color and sound
//GH:eeriley99.github.io/code_sketchbook/scary2/

var r, g, b;
var song;

function preload () {
  song = loadSound("song.mp3");
}

function setup() {
  createCanvas(250, 250);
  song.play();
 frameRate(10);
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
  //rectMode(CENTER);
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





//control playing the song with a mouse press

/*
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
*/


