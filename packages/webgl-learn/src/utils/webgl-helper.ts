export const lifecycle = {
  ready(callback: () => void) {
    window.addEventListener("DOMContentLoaded", callback);
  }
}

export function getWebGLContext(fullscreen: boolean = false): WebGLRenderingContext {
  const canvas = document.getElementById("palette") as HTMLCanvasElement;

  if (fullscreen) {
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  return canvas.getContext('webgl') as WebGLRenderingContext;
}

export function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);

  if (shader === null) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  return shader;
}

export function createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
  const program = gl.createProgram();

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  return program;
}

export interface ICreateBufferOptions {
  size: number;
}

export function createBuffer(gl: WebGLRenderingContext, vertexAttribute: GLint, options: ICreateBufferOptions): WebGLBuffer {
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
    a: Math.random() * 1
  };
}
