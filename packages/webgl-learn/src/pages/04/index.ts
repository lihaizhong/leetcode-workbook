import {
  lifecycle,
  getWebGLContext,
  createShader,
  createProgram,
  randomColor,
} from "../../utils/webgl-helper";

// 顶点着色器源码
import vertexShaderSource from "./main.vert";
// 片元着色器源码
import fragmentShaderSource from "./main.frag";

lifecycle.ready(() => {
  const gl = getWebGLContext();
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (vertexShader === null || fragmentShader === null) {
    return;
  }

  const program = createProgram(gl, vertexShader, fragmentShader);
  gl.useProgram(program);

  const aPosition = gl.getAttribLocation(program, "a_Position");
  const uColor = gl.getUniformLocation(program, "u_Color");
  const positions = [1, 0, 0, 1, 0, 0];
  const color = randomColor();

  gl.uniform4f(uColor, color.r, color.g, color.b, color.a);
  /**
   * 1. 创建缓冲区
   * - 首先，创建一个保存顶点坐标的数组，保存三角形的顶点信息。
   * - 然后，我们使用 gl.createBuffer 创建一个缓冲区对象，并且通过 gl.bindBuffer 绑定 buffer 为当前缓冲区。
   * - 之后，我们用 new Float32Array 将顶点数组转换为更严谨的 TypedArray 类型。
   * - 最后，我们使用 gl.bufferData 将 TypedArray 类型的数据复制到缓冲区中，最后一个参数 gl.STATIC_DRAW 告诉 WebGL 我们不会频繁改变缓冲区中的数据，WebGL 会根据这个参数做一些优化处理。
   */
  const buffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(aPosition);

  // 将 a_Position 变量获取数据的缓冲区指向当前绑定的 buffer
  gl.vertexAttribPointer(
    aPosition,
    // 每次获取 2 个数据
    2,
    // 每个数据的类型是 32位浮点型
    gl.FLOAT,
    // 不需要归一化数据
    false,
    // 每次迭代运行需要移动数据数 * 每个数据所占内存 到下一个数据开始点
    0,
    // 从缓冲开始位置读取
    0
  );

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(
    // 绘制图元设置为三角形
    gl.TRIANGLES,
    // 从顶点数组的开始位置取顶点数据
    0,
    // 因为我们要绘制 3 个点，所以执行 3 次顶点绘制操作
    3
  );
});
