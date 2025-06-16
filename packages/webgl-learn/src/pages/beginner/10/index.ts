import {
  clearCanvas,
  createProgram,
  createShader,
  getWebGLContext,
  lifecycle,
} from "src/utils/webgl-helper";
import vertexShaderSource from "./main.vert";
import fragmentShaderSource from "./main.frag";

lifecycle.ready(() => {
  const gl = getWebGLContext(true);
  const canvas = gl.canvas as HTMLCanvasElement;
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (vertexShader === null || fragShader === null) {
    return;
  }

  const program = createProgram(gl, vertexShader, fragShader);

  gl.useProgram(program);

  const aScreenSize = gl.getAttribLocation(program, "a_Screen_Size");

  gl.vertexAttrib2f(aScreenSize, canvas.width, canvas.height);

  const aPosition = gl.getAttribLocation(program, "a_Position");
  const aColor = gl.getAttribLocation(program, "a_Color");

  gl.enableVertexAttribArray(aPosition);
  gl.enableVertexAttribArray(aColor);

  const positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 24, 0);
  gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 24, 8);

  // 存储顶点信息的数组
  const positions = [
    [30, 30, 255, 0, 0, 1],    //V0
    [30, 300, 255, 0, 0, 1],   //V1
    [300, 300, 255, 0, 0, 1],  //V2
    [300, 30, 0, 255, 0, 1]    //V3
  ].flat();

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // 存储顶点索引的数组
  const indices = [
    [0, 1, 2], // 第一个三角形
    [0, 2, 3], // 第二个三角形
  ].flat();

  const indicesBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW
  );

  clearCanvas(gl);

  gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
});
