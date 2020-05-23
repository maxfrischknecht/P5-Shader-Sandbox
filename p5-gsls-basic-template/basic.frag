#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_mouse;
uniform float u_time;
varying vec2 vTexCoord; // like resolution

void main() {
  // copy the vTexCoord
  // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
  // we can use it to access every pixel on the screen
  vec2 coord = vTexCoord;
  
	vec2 st = gl_FragCoord.xy/coord;
  vec2 ms = u_mouse.xy/coord;
	gl_FragColor = vec4(ms.x ,st.x ,abs(sin(u_time/10.5)), 1.0);

}