function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(20);
  noStroke();

  for (let i = 0; i < 8000; i++) {
    rect(random(width), random(height), 2, 2);
  }
}
