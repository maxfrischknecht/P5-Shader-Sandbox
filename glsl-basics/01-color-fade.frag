#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load

void main() {
	gl_FragColor = vec4(abs(sin(u_time/2.0)),abs(sin(u_time / 5.0)),abs(sin(u_time/1.5)),1.0);
}