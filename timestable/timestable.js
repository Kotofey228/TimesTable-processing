let pointsSlider;
let multiSlider;

let points;
let multiplier;
let mSpeed;

let mHue;
let mSatur;
let mBright;


function createSliders(){
  let w = int(width * 0.9);
  
  pointsSlider = createSlider(0, 1000, 0);
  pointsSlider.position(10, 10);
  pointsSlider.style('width', w+'px');
  
  multiSlider = createSlider(0, 1000, 500);
  multiSlider.position(10, 40);
  multiSlider.style('width', w+'px');
  
  hueSlider = createSlider(0, 1000, 500);
  hueSlider.position(10, 80);
  hueSlider.style('width', '100px');
  
  saturSlider = createSlider(0, 1000, 500);
  saturSlider.position(10, 110);
  saturSlider.style('width', '100px');
  
  brightSlider = createSlider(0, 1000, 500);
  brightSlider.position(10, 140);
  brightSlider.style('width', '100px');
}

function getPoint(n) {
  let x = width/2 - radius * cos(2 * PI * n / points);
  let y = height/2 - radius * sin(2 * PI * n / points);
  const p = [x, y];
  return p;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createSliders();
  
  points = 200;
  multiplier = 2;
  radius = int(height * 0.4);
  
  colorMode(HSB);
}

function draw() {
  clear();
  ellipse(width/2, height/2, 2*radius, 2*radius);
  points = pointsSlider.value();
  mSpeed = multiSlider.value();
  
  mHue = hueSlider.value() / 1000;
  mSatur = saturSlider.value() / 1000;
  mBright = brightSlider.value() / 1000;
  
  //strokeWeight(1);
  
  //for (let i = 0; i < points; i++) {
  //  p = getPoint(i);
  //  point(p[0], p[1]);
  //}
  
  for (let i = 0; i < points; i++) {
    let i2 = int(i*multiplier) % points;
    p1 = getPoint(i);
    p2 = getPoint(i2);
    
    let colr = 255 * Math.abs(i2 - i) / points / 2;
    stroke(color(mHue * colr, mSatur * colr, mBright * colr));
    line(p1[0], p1[1], p2[0], p2[1]);
  }
  multiplier += (mSpeed - 500) / 1000;
  
}
