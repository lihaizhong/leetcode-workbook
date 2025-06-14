// 设置浮点数精度为中等精度
precision mediump float;
// 接收从 JavaScript 传递过来的颜色值 (R, G, B, A)
uniform vec4 u_Color;

void main() {
  // 将普通的颜色表示 转换为 WebGL 需要的表示方式，即将 [0, 255] 转换为 [0, 1] 之间。
  vec4 color = u_Color / vec4(255, 255, 255, 1);

  gl_FragColor = color;
}
