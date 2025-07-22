import {
  clearCanvas,
  createProgram,
  createRingVertex,
  createShader,
  getWebGLContext,
  lifecycle,
} from "src/utils/webgl-helper";
import vertexShaderSource from "./main.vert";
import fragShaderSource from "./main.frag";

lifecycle.ready(() => {
  const gl = getWebGLContext(true);
  const canvas = gl.canvas as HTMLCanvasElement;
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragShaderSource);

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

  const vertex = createRingVertex(300, 300, 80, 100, 100);
  const buffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 24, 0);
  gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 24, 8);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex.positions), gl.STATIC_DRAW);

  const indicesBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vertex.indices), gl.STATIC_DRAW);

  clearCanvas(gl);

  gl.drawElements(gl.TRIANGLES,vertex.indices.length, gl.UNSIGNED_SHORT, 0);
});
