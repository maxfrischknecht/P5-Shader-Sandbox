precision mediump float;

// lets grab texcoords just for fun
varying vec2 vTexCoord;

// our texture and image coming from p5
uniform sampler2D filter;
uniform sampler2D img;
uniform vec2 u_mouse;

// how much to displace by (controlled by mouse)
uniform float amt;

void main() {

  vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  uv = 1.0 - uv;

  // get the webcam as a vec4 using texture2D
  vec4 cam = texture2D(filter, uv);

  // lets get the average color of the rgb values
  float avg = dot(cam.rgb, vec3(0.333));

  // then spread it between -1 and 1
  avg = avg * 0.5 - 0.5;

  // amt2 = vec2(sin(10.0), cos(10));

  // we will displace the image by the average color times the amt of displacement 
  float disp = avg * u_mouse.y * amt;
  // float disp = u_mouse.xy / 1000;

  // displacement works by moving the texture coordinates of one image with the colors of another image
  // add the displacement to the texture coordinages
  vec4 pup = texture2D(img, uv + disp);

  // output the image
  gl_FragColor = pup;
}