import { clearCanvas, createProgram, createShader, getWebGLContext, lifecycle, randomColor } from "../../utils/webgl-helper";
import vertexShaderSource from "./main.vert";
import fragmentShaderSource from "./main.frag";

lifecycle.ready(() => {
  const gl = getWebGLContext(true);
  const canvas = gl.canvas as HTMLCanvasElement;

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (vertexShader === null || fragmentShader === null) {
    return;
  }

  const program = createProgram(gl, vertexShader, fragmentShader);

  gl.useProgram(program);

  const aPosition = gl.getAttribLocation(program, "a_Position");
  const aScreenSize = gl.getAttribLocation(program, "a_Screen_Size");
  const uColor = gl.getUniformLocation(program, "u_Color");

  gl.vertexAttrib2f(aScreenSize, canvas.width, canvas.height);

  const buffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.enableVertexAttribArray(aPosition);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

  const points: number[] = [];
  const color = randomColor();

  gl.uniform4f(uColor, color.r, color.g, color.b, color.a);
  canvas.addEventListener("click", (event) => {
    const x = event.pageX;
    const y = event.pageY;

    points.push(x, y);

    clearCanvas(gl);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.DYNAMIC_DRAW);
    gl.drawArrays(gl.LINE_LOOP, 0, points.length / 2);
    gl.drawArrays(gl.POINTS, 0, points.length / 2);
  });

  clearCanvas(gl);
})
