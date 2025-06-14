// 设置浮点数精度为中等精度
precision mediump float;
// 接收点在 Canvas 坐标系上的坐标 (x, y)
attribute vec2 a_Position;
// 接收 Canvas 的尺寸 (width, height)
attribute vec2 a_Screen_Size;

void main() {
  // 将 Canvas 坐标转 换为 设备坐标
  // 首先，将 (x, y) 坐标转换到 [0, 1] 区间，
  // 再将 [0, 1] 区间乘以 2，转换到 [0, 2] 区间，
  // 最后，减去 1，转换到 [-1, 1] 之间的值，即 NDC 坐标
  vec2 position = (a_Position / a_Screen_Size) * 2.0 - 1.0;

  position = position * vec2(1.0, -1.0);

  // 声明顶点位置
  gl_Position = vec4(position, 0.0, 1.0);
  // 声明要绘制的点的大小
  gl_PointSize = 10.0;
}
