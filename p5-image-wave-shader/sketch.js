// this time we're going to send an image to the shader
// in shaderland, an image is called a "texture"
// https://p5js.org/reference/#/p5.Shader/setUniform

// a shader variable
let uniformsShader;
let img;

function preload(){
  // load the shader
  uniformsShader = loadShader('uniform.vert', 'uniform.frag');
  img = loadImage('data/wave.jpeg');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {  
  // shader() sets the active shader with our shader
  shader(uniformsShader);

  // setUniform can also send an image to a shader
  // 'cactiTex' is the name of the variable in our shader
  // img, is a normal p5 image object
  uniformsShader.setUniform('imgTex', img);
  uniformsShader.setUniform('time', frameCount * 0.01);

  let freq = map(mouseX, 0, width, 0, 10.0);
  let amp = map(mouseY, 0, height, 0, 0.25);

  // send the two values to the shader
  uniformsShader.setUniform('frequency', freq);
  uniformsShader.setUniform('amplitude', amp);


  // rect gives us some geometry on the screen
  rect(0,0,width, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}