var slider;

function setup() {
  // put setup code here
    canvas = createCanvas (400, 400);
    createP ('');
    
    slider = createSlider (0, 400, 200);
    
}


function draw() {
  // put drawing code here
    background (200);
    line (0, 200, slider.value(), 200);

}