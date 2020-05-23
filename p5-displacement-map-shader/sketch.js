let myShader;
let filter, img;

function preload(){
  myShader = loadShader('shader/effect.vert', 'shader/effect.frag');

  filter = loadImage('data/filter3.png');
  img = loadImage('data/image.jpg');
}


function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.parent('sketch-holder');
  shader(myShader);
  background(255, 0, 0)
}

function draw() {
  myShader.setUniform('filter', filter);
  myShader.setUniform('img', img);
  myShader.setUniform('amt', sin(frameCount * 0.01));
  rect(0,0,0,0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}