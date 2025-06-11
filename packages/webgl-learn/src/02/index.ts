import { lifecycle, getCanvas, getWebGLContext, createShader, createProgram } from "./webgl-helper";
// 顶点着色器源码
import vertexShaderSource from "./main.vert";
// 片元着色器源码
import fragmentShaderSource from "./main.frag";

lifecycle.ready(() => {
  const palette = getCanvas("palette");
  const gl = getWebGLContext(palette);

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (!(vertexShader && fragmentShader)) {
    return;
  }

  const program = createProgram(gl, vertexShader, fragmentShader);

  gl.useProgram(program);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.POINTS, 0, 1);
})
