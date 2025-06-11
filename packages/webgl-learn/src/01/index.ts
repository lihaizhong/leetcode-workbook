// 顶点着色器源码
import vertexShaderSource from "./main.vert";
// 片元着色器源码
import fragmentShaderSource from "./main.frag";

window.addEventListener("DOMContentLoaded", () => {
  const palette = document.getElementById("palette") as HTMLCanvasElement;
  const gl = palette.getContext("webgl") as WebGLRenderingContext;

  // 创建顶点着色器对象
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);

  if (vertexShader === null) {
    return;
  }

  // 将源码分配给顶点着色器对象
  gl.shaderSource(vertexShader, vertexShaderSource);
  // 编译顶点着色器程序
  gl.compileShader(vertexShader);

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
