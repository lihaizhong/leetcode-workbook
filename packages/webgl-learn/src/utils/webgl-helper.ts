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
