precision mediump float;

// lets grab texcoords just for fun
varying vec2 vTexCoord;

// our texture and image coming from p5
uniform sampler2D filter;
uniform sampler2D img;

// how much to displace by (controlled by mouse)
uniform float amt;

//adding PI and two PI just in case needed
#define PI 3.14159
#define TWO_PI 6.28318

// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = sign(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

void main() {

  vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  uv = 1.0 - uv;
  float t = 1.;
  uv += noise(uv*0.0)*t;
  // get the webcam as a vec4 using texture2D
  vec4 cam = texture2D(filter, uv);

  // lets get the average color of the rgb values
  float avg = dot(cam.rgb, vec3(0.333));

  // then spread it between -1 and 1
  avg = mod(avg,amt);

  // amt2 = vec2(sin(10.0), cos(10));

  // we will displace the image by the average color times the amt of displacement 
  float disp = avg * amt +0.5 - 0.5;

  // float n = noise(uv+disp);
  // float n = noise(uv+cos(disp));
  

  // displacement works by moving the texture coordinates of one image with the colors of another image
  // add the displacement to the texture coordinages
  vec4 pup = texture2D(img, (uv) + disp);

  // output the image
  gl_FragColor = pup;
}