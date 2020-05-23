let basicShader;

function preload(){
  basicShader = loadShader('basic.vert', 'basic.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {  
  shader(basicShader);

  let mx = map(mouseX, 0, width, 0, 1);
  let my = map(mouseY, 0, height, 0, 1);

  basicShader.setUniform('u_mouse', [mx, my]);
  basicShader.setUniform('u_time', float(frameCount/10));

  rect(0,0,width, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}