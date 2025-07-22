import {
  clearCanvas,
  createProgram,
  createShader,
  getWebGLContext,
  lifecycle,
  randomColor,
} from "src/utils/webgl-helper";
import vertexShaderSource from "./main.vert";
import fragmentShaderSource from "./main.frag";

lifecycle.ready(() => {
  const gl = getWebGLContext(true);
  const canvas = gl.canvas as HTMLCanvasElement;
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );

  if (vertexShader === null || fragmentShader === null) {
    return;
  }

  const program = createProgram(gl, vertexShader, fragmentShader);

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

  const positions: number[] = [];

  canvas.addEventListener("click", (event) => {
    const x = event.pageX;
    const y = event.pageY;
    const color = randomColor();

    positions.push(x, y, color.r, color.g, color.b, color.a);

    if (positions.length % 18 === 0) {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

      clearCanvas(gl);

      gl.drawArrays(gl.TRIANGLES, 0, positions.length / 6);
    }
  });

  clearCanvas(gl);
});
