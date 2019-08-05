function setup() {
  createCanvas(250, 250);
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

  //type 'c' to clear canvas

  spray(); //canvas click triggers spray
}

function spray() {
  if (mouseIsPressed) {
    for (let i = 0; i < 30; i++) {
      let x = random(-5, 5);
      let y = random(-5, 5);
      if (dist(0, 0, x, y) < 100) {
        point(mouseX + x, mouseY + y);
      }
    }
  }
}

function clearBackground() {
  fill(255); //rect color
  rect(4, 4, width - 4, height - 4);
  fill(0); //text color

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
  } else if (key === 'c') {
    clearBackground(); //press 'c' to clear screen
  }
}
