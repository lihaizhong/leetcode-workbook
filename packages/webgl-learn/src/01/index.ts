window.addEventListener("DOMContentLoaded", () => {
  const palette = document.getElementById("palette") as HTMLCanvasElement;
  const gl = palette.getContext("webgl") as WebGLRenderingContext;

  // 顶点着色器源码
  const vertexShaderSource = `
    // 声明float类型的精度为mediump(精度越高越耗性能)
    precision mediump float;
    // 接收点在 canvas 坐标系上的坐标 (x, y)
    attribute vec2 a_Position;
    // 接收点在 canvas 画布上的尺寸 (width, height)
    attribute vec2 a_Screen_Size;

    void main() {
      // start 将屏幕坐标系转化为裁剪坐标（裁剪坐标系）
      vec2 position = (a_Position / a_Screen_Size) * 2.0 - 1.0;
      position = position * vec2(1.0, -1.0);
  		// 声明顶点位置
  		gl_Position = vec4(position, 0, 1);
      // end 将屏幕坐标系转化为裁剪坐标（裁剪坐标系）
  		// 声明要绘制的点的大小。
  		gl_PointSize = 10.0;
  	}
  `;
  // 创建顶点着色器对象
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);

  if (vertexShader === null) {
    return;
  }

  // 将源码分配给顶点着色器对象
  gl.shaderSource(vertexShader, vertexShaderSource);
  // 编译顶点着色器程序
  gl.compileShader(vertexShader);

  // 片元着色器源码
  const fragmentShaderSource = `
    // 设置浮点数精度为中等精度
    precision mediump float;
    // 接收 JavaScript 传过来的颜色值（RGBA）。
    uniform vec4 u_Color;

    void main() {
      // 将普通的颜色表示转化为 WebGL 需要的表示方式，即将【0-255】转化到【0,1】之间。
      vec4 color = u_Color / vec4(255, 255, 255, 1);
      gl_FragColor = color;
    }
  `;
  // 创建片元着色器程序
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  if (fragmentShader === null) {
    return;
  }

  // 将源码分配给片元着色器对象
  gl.shaderSource(fragmentShader, fragmentShaderSource);
  // 编译片元着色器
  gl.compileShader(fragmentShader);

  //创建着色器程序
  const program = gl.createProgram();

  //将顶点着色器挂载在着色器程序上。
  gl.attachShader(program, vertexShader);
  //将片元着色器挂载在着色器程序上。
  gl.attachShader(program, fragmentShader);
  //链接着色器程序
  gl.linkProgram(program);
  // 使用刚创建好的着色器程序。
  gl.useProgram(program);
  //设置清空画布颜色为黑色。
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  //用上一步设置的清空画布颜色清空画布。
  gl.clear(gl.COLOR_BUFFER_BIT);
  //绘制点。
  gl.drawArrays(gl.POINTS, 0, 1);
});
