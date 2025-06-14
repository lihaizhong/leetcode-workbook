import {
  getWebGLContext,
  createProgram,
  lifecycle,
  createShader,
  createBuffer,
  randomColor,
  clearCanvas
} from '../../utils/webgl-helper';
import vertexShaderSource from './main.vert';
import fragmentShaderSource from './main.frag';

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

  const aPosition = gl.getAttribLocation(program, 'a_Position');
  const aScreenSize = gl.getAttribLocation(program, 'a_Screen_Size');
  const aColor = gl.getAttribLocation(program, 'a_Color');
  const positionBuffer = createBuffer(gl, aPosition, { size: 2 });
  const colorBuffer = createBuffer(gl, aColor, { size: 4 });

  gl.vertexAttrib2f(aScreenSize, canvas.width, canvas.height);
  
  const positions: number[] = [];
  const colors: number[] = [];

  canvas.addEventListener("click", (event) => {
    const x = event.pageX;
    const y = event.pageY;
    const color = randomColor();

    positions.push(x, y);
    colors.push(color.r, color.g, color.b, color.a);

    if (positions.length % 6 === 0) {
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);

      clearCanvas(gl);

      gl.drawArrays(gl.TRIANGLES, 0, positions.length / 2);
    }
  });

  clearCanvas(gl);
});
