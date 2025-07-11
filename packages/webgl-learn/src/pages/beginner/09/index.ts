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

  const buffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 24, 0);
  gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 24, 8);

  const positions = [
    [30, 30, 255, 0, 0, 1], //V0
    [30, 300, 255, 0, 0, 1], //V1
    [300, 300, 255, 0, 0, 1], //V2
    [30, 30, 0, 255, 0, 1], //V0
    [300, 300, 0, 255, 0, 1], //V2
    [300, 30, 0, 255, 0, 1], //V3
  ].flat();

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  clearCanvas(gl);

  gl.drawArrays(gl.TRIANGLES, 0, 6);
});
