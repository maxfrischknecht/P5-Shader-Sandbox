#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  // normalize the coordinate of the fragment (each pixel) by dividing it by the total resolution of the billboard
  // creates values between 0.0 and 1.0
	vec2 st = gl_FragCoord.xy/u_resolution;
  vec2 ms = u_mouse.xy/u_resolution;
	gl_FragColor = vec4(ms.x ,st.x ,ms.y,1.0);
}