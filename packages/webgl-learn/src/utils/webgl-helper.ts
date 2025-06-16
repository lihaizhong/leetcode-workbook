export const lifecycle = {
  ready(callback: () => void) {
    window.addEventListener("DOMContentLoaded", callback);
  },
};

export function getWebGLContext(
  fullscreen: boolean = false
): WebGLRenderingContext {
  const canvas = document.getElementById("palette") as HTMLCanvasElement;

  if (fullscreen) {
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  return canvas.getContext("webgl") as WebGLRenderingContext;
}

export function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string
) {
  const shader = gl.createShader(type);

  if (shader === null) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  return shader;
}

export function createProgram(
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader
) {
  const program = gl.createProgram();

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  return program;
}

export interface ICreateBufferOptions {
  size: number;
}

export function createBuffer(
  gl: WebGLRenderingContext,
  vertexAttribute: GLint,
  options: ICreateBufferOptions
): WebGLBuffer {
  const buffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.enableVertexAttribArray(vertexAttribute);
  gl.vertexAttribPointer(vertexAttribute, options.size, gl.FLOAT, false, 0, 0);

  return buffer;
}

export function clearCanvas(gl: WebGLRenderingContext): void {
  // 设置清屏颜色
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 用上一步设置的清空画布颜色清空画布
  gl.clear(gl.COLOR_BUFFER_BIT);
}

export interface IColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export function randomColor(): IColor {
  return {
    r: Math.random() * 255,
    g: Math.random() * 255,
    b: Math.random() * 255,
    a: Math.random() * 1,
  };
}

const sin = Math.sin;
const cos = Math.cos;
const PI = Math.PI;

/**
 * 创建圆形的顶点坐标，n值越大，圆越光滑
 * @param x
 * @param y
 * @param radius
 * @param n
 * @returns
 */
export function createCircleVertex(
  x: number,
  y: number,
  radius: number,
  n: number
): number[] {
  const positions = [x, y, 255, 0, 0, 1];
  let angle: number;

  for (let i = 0; i <= n; i++) {
    angle = (i * PI * 2) / n;
    positions.push(
      x + radius * sin(angle),
      y + radius * cos(angle),
      255,
      0,
      0,
      1
    );
  }

  return positions;
}

interface IRingVertexResult {
  positions: number[];
  indices: number[];
}

export function createRingVertex(
  x: number,
  y: number,
  innerRadius: number,
  outerRadius: number,
  n: number
): IRingVertexResult {
  const positions: number[] = [];
  const indices: number[] = [];
  let color = randomColor();
  let angle: number;
  let p0: number;
  let p1: number;
  let p2: number;
  let p3: number;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      color = randomColor();
    }

    angle = (i * PI * 2) / n;
    positions.push(
      x + innerRadius * sin(angle),
      y + innerRadius * cos(angle),
      color.r,
      color.g,
      color.b,
      color.a
    );
    positions.push(
      x + outerRadius * sin(angle),
      y + outerRadius * cos(angle),
      color.r,
      color.g,
      color.b,
      color.a
    );

    if (i < n) {
      p0 = i * 2;
      p1 = i * 2 + 1;

      if (i === n - 1) {
        p2 = 1;
        p3 = 0;
      } else {
        p2 = (i + 1) * 2 + 1;
        p3 = (i + 1) * 2;
      }

      indices.push(p0, p1, p2, p2, p3, p0);
    }
  }

  return {
    positions,
    indices,
  };
}
