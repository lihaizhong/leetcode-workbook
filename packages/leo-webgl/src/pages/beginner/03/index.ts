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

interface IPoint {
  x: number,
  y: number,
  color: IColor,
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

  // 存储点击位置的数组
  const points: IPoint[] = [];

  canvas.addEventListener("click", (event) => {
    const x = event.pageX;
    const y = event.pageY;
    const color = randomColor();
    
    points.push({ x, y, color });
    clearCanvas(gl);

    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      const color = point.color;

      // 为顶点着色器中的 u_Color 传递随机颜色
      gl.uniform4f(uColor, color.r, color.g, color.b, color.a);
      // 为顶点着色器中的 a_Position 传递顶点坐标
      gl.vertexAttrib2f(aPosition, point.x, point.y);
      // 绘制点
      gl.drawArrays(gl.POINTS, 0, 1);
    }
  });

  clearCanvas(gl);
});
