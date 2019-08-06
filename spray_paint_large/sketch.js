function setup() {
  createCanvas(1366, 768); 
  clearBackground(); //resets canvas
  cursor('https://eeriley99.github.io/icons/spray_can.gif');
}

function draw() {


  stroke(0, 0, 0, 70); //black
  keyTyped(); //type key for brush color
  // 'v' violet
  // 'i' indigo
  // 'b' blue
  // 'g' green
  // 'y' yellow
  // 'o' orange
  // 'r' red
  // 'k' black
  // 'e' erase

  //type 'c' to clear canvas

  spray(); //canvas click triggers spray
  frame();
}

function spray() {
  if (mouseIsPressed) {
    for (let i = 0; i < 200; i++) {
      let leftWall = 245.88;
      let rightWall = 1120.12;
      let topWall = 245.88;
      
      let bottomWall = 629.76;

      let xc = constrain(mouseX, leftWall, rightWall);
      let yc = constrain(mouseY, topWall, bottomWall);
      let x = random(-10, 10);
      let y = random(-10, 10);
      if (dist(0, 0, x, y) < 100) {
        ellipseMode(CENTER);
        ellipse(xc + x, yc + y, 1, 1);
      }
    }
  }
}

function clearBackground() {
  fill(255); //rect color
  rect(0, 0, width, height);
  stroke(0); //text color

}

function keyTyped() {
  if (key === 'v') {
    stroke(148, 0, 211, 50); //violet
  }
  if (key === 'i') {
    stroke(75, 0, 130, 50); //indigo
  }
  if (key === 'b') {
    stroke(0, 0, 255, 50); //blue
  }
  if (key === 'g') {
    stroke(0, 255, 0, 50); //green
  }
  if (key === 'y') {
    stroke(255, 255, 0, 50); //yellow
  }
  if (key === 'o') {
    stroke(255, 127, 0, 50); //orange
  }
  if (key === 'r') {
    stroke(255, 0, 0, 50); //red
  }
  if (key === 'k') {
    stroke(0, 0, 0, 70); //black
  }
  if (key === 'e') {
    stroke(255); //erase
  } else if (key === 'c') {
    clearBackground(); //press 'c' to clear screen
  }
}

function frame() {
  noFill();
  strokeWeight(6);
  rect(0, 0, width, height);
  rect(191.24, 191.24, 972.592, 972.592);
  strokeWeight(1);
  line(0, 0, 191.24, 191.24);
  line(1168.3, 191.24, width, 0);
  line(0, height, 191.24, 576.76);
  line(1174.76, 576.76, width, height);
}