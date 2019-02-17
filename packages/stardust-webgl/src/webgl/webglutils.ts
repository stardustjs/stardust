import { RuntimeError } from "stardust-core";

export function compileProgram(
  GL: WebGLRenderingContext,
  vsCode: string,
  fsCode: string
): WebGLProgram {
  // Vertex shader
  const vsShader = GL.createShader(GL.VERTEX_SHADER);
  GL.shaderSource(vsShader, vsCode);
  GL.compileShader(vsShader);
  let success = GL.getShaderParameter(vsShader, GL.COMPILE_STATUS);
  if (!success) {
    console.log("Vertex shader code is:", vsCode);
    throw new RuntimeError(
      `could not compile vertex shader: ${GL.getShaderInfoLog(vsShader)}`
    );
  }
  // Fragment shader
  const fsShader = GL.createShader(GL.FRAGMENT_SHADER);
  GL.shaderSource(fsShader, fsCode);
  GL.compileShader(fsShader);
  success = GL.getShaderParameter(fsShader, GL.COMPILE_STATUS);
  if (!success) {
    console.log("Fragment shader code is:", fsCode);
    throw new RuntimeError(
      `could not compile fragment shader: ${GL.getShaderInfoLog(fsShader)}`
    );
  }
  // Link the program
  const program = GL.createProgram();
  GL.attachShader(program, vsShader);
  GL.attachShader(program, fsShader);
  GL.linkProgram(program);
  if (!GL.getProgramParameter(program, GL.LINK_STATUS)) {
    console.log("Vertex shader code is:", vsCode);
    console.log("Fragment shader code is:", fsCode);
    throw new RuntimeError(
      `could not link shader: ${GL.getProgramInfoLog(program)}`
    );
  }

  return program;
}
