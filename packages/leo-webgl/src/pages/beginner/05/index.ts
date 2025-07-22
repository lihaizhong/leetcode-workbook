import {
  clearCanvas,
  createProgram,
  createShader,
  getWebGLContext,
  type IColor,
  lifecycle,
  randomColor,
} from "src/utils/webgl-helper";
import vertexShaderSource from "./main.vert";
import fragmentShaderSource from "./main.frag";

interface ITriangle {
  points: number[];
  color: IColor;
}

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

  // 找到顶点着色器中的 a_Position 变量
  const aPosition = gl.getAttribLocation(program, "a_Position");
  // 找到顶点着色器中的 a_Screen_Size 变量
  const aScreenSize = gl.getAttribLocation(program, "a_Screen_Size");
  // 找到顶点着色器中的 u_Color 变量
  const uColor = gl.getUniformLocation(program, "u_Color");

  // 为顶点着色器中的 a_Screen_Size 变量传递画布尺寸
  gl.vertexAttrib2f(aScreenSize, canvas.width, canvas.height);

  const buffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.enableVertexAttribArray(aPosition);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

  // 存储点击位置的数组
  const triangles: ITriangle[] = [];

  canvas.addEventListener("click", (event) => {
    const x = event.pageX;
    const y = event.pageY;

    if (triangles.length === 0 || triangles[triangles.length - 1].points.length === 6) {
      triangles.push({
        points: [],
        color: randomColor(),
      });
    }

    if (triangles[triangles.length - 1].points.length < 6) {
      triangles[triangles.length - 1].points.push(x, y);
    }

    if (triangles[triangles.length - 1].points.length < 6) {
      return
    }

    clearCanvas(gl);

    for (let i = 0; i < triangles.length; i++) {
      const { points, color } = triangles[i];

      gl.uniform4f(uColor, color.r, color.g, color.b, color.a);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.DYNAMIC_DRAW);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
  });

  clearCanvas(gl);
});
