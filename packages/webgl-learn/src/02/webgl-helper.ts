export const lifecycle = {
  ready(callback: () => void) {
    window.addEventListener("DOMContentLoaded", callback);
  }
}

export function getCanvas(id: string): HTMLCanvasElement {
  return document.getElementById(id) as HTMLCanvasElement;
}

export function getWebGLContext(canvas: HTMLCanvasElement): WebGLRenderingContext {
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
