precision mediump float;

attribute vec2 a_Position;

attribute vec2 a_Screen_Size;

void main() {
  vec2 position = (a_Position / a_Screen_Size) * 2.0 - 1.0;

  position = position * vec2(1.0, -1.0);

  gl_Position = vec4(position, 0.0, 1.0);
  gl_PointSize = 5.0;
}
