precision mediump float;

// we need our texcoords for drawing textures
varying vec2 vTexCoord;

// images are sent to the shader as a variable type called sampler2D
uniform sampler2D imgTex;

uniform float time;
uniform float frequency;
uniform float amplitude;


void main() {
  // by default, our texcoords will be upside down
  // lets flip them by inverting the y component
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;

  float sineWave = cos(uv.y * frequency + time) * amplitude;

  // create a vec2 with our sine
  // what happens if you put sineWave in the y slot? in Both slots?
  vec2 distort = vec2(sineWave, 0.0);

  // we can access our image by using the GLSL shader function texture2D()
  // texture2D expects a sampler2D, and texture coordinates as it's input
  
  vec4 cactus = texture2D(imgTex, uv + distort);
  
  // lets invert the colors just for fun
  // cactus.rgb = 1.0 - cactus.rgb;

  gl_FragColor = cactus;
}