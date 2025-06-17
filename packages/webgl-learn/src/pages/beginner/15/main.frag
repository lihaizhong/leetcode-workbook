precision mediump float;
// 接收顶点着色器传递过来的 uv 值
varying vec2 v_Uv;
// 接收 JavaScript 传递过来的纹理
uniform sampler2D texture;

void main() {
  // 提取纹理对应的 uv 坐标上的颜色，赋值给当前片元（像素）
  gl_FragColor = texture2D(texture, v_Uv);
}
