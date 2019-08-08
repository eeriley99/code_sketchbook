function setup() {
  createCanvas(windowWidth, windowHeight);
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
      let leftWall = 45;
      let rightWall = (windowWidth - 45);
      let topWall = 45;
      let bottomWall = (windowHeight - 45);
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
  rect(0, 0, windowWidth, windowHeight);
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
  rect(0, 0, windowWidth, windowHeight);
  rect(35, 35, windowWidth - 70, windowHeight - 70);
  strokeWeight(1);
  line(0, 0, 35, 35);//NWline
  line(windowWidth, 0, windowWidth - 35, 35);//NEline
  line(windowWidth, windowHeight, windowWidth - 35, windowHeight - 35);//SEline
  line(0, windowHeight, 35, windowHeight - 35);//SWline
}
