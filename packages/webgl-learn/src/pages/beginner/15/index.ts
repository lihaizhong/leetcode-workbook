import {
  clearCanvas,
  createImage,
  createProgram,
  createShader,
  getWebGLContext,
  lifecycle,
} from "src/utils/webgl-helper";
import waveSource from "src/assets/wave.jpg";
import vertexShaderSource from "./main.vert";
import fragShaderSource from "./main.frag";

lifecycle.ready(async () => {
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

  const positions = [
    [30, 30, 0, 0], //V0
    [30, 300, 0, 1], //V1
    [300, 300, 1, 1], //V2
    [30, 30, 0, 0], //V0
    [300, 300, 1, 1], //V2
    [300, 30, 1, 0], //V3
  ].flat();

  const aPosition = gl.getAttribLocation(program, "a_Position");
  const buffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.enableVertexAttribArray(aPosition);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 16, 0);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  const aUv = gl.getAttribLocation(program, "a_Uv");

  gl.enableVertexAttribArray(aUv);
  gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 16, 8);

  const img = await createImage(waveSource);

  gl.activeTexture(gl.TEXTURE0);

  const texture = gl.createTexture();

  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  const uTexture = gl.getUniformLocation(program, "u_Texture");

  gl.uniform1i(uTexture, 0);

  clearCanvas(gl);

  gl.drawArrays(gl.TRIANGLES, 0, positions.length / 4);
});
