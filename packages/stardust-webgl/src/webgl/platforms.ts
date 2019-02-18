import { Pose, RuntimeError } from "stardust-core";
import { WebGLPlatform } from "./webgl";
import { getDefaultDevicePixelRatio } from "./helpers";

export class WebGLCanvasPlatform2D extends WebGLPlatform {
  protected _pixelRatio: number;
  protected _canvas: HTMLCanvasElement;
  protected _width: number;
  protected _height: number;

  constructor(
    canvas: HTMLCanvasElement,
    width: number = 600,
    height: number = 400
  ) {
    const GL =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    try {
      GL.getExtension("OES_texture_float");
      GL.getExtension("OES_texture_float_linear");
    } catch (e) {}
    super(GL);
    this._canvas = canvas;

    GL.clearColor(1, 1, 1, 1);
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
    GL.disable(GL.DEPTH_TEST);
    GL.enable(GL.BLEND);
    GL.disable(GL.CULL_FACE);
    GL.blendFuncSeparate(
      GL.SRC_ALPHA,
      GL.ONE_MINUS_SRC_ALPHA,
      GL.ONE,
      GL.ONE_MINUS_SRC_ALPHA
    );

    this._pixelRatio = getDefaultDevicePixelRatio();
    this.resize(width, height);
  }

  public set pixelRatio(value: number) {
    this._pixelRatio = value;
    this.resize(this._width, this._height);
  }

  public get pixelRatio(): number {
    return this._pixelRatio;
  }

  public resize(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._canvas.style.width = width + "px";
    this._canvas.style.height = height + "px";
    this._canvas.width = width * this._pixelRatio;
    this._canvas.height = height * this._pixelRatio;
    this.set2DView(width, height);
    this.setPose(new Pose());
    this._GL.viewport(0, 0, this._canvas.width, this._canvas.height);
  }

  public clear(color?: number[]) {
    if (color) {
      this._GL.clearColor(
        color[0],
        color[1],
        color[2],
        color[3] != null ? color[3] : 1
      );
    }
    this._GL.clear(this._GL.COLOR_BUFFER_BIT | this._GL.DEPTH_BUFFER_BIT);
  }
}

export class WebGLCanvasPlatform3D extends WebGLPlatform {
  protected _pixelRatio: number;
  protected _canvas: HTMLCanvasElement;
  protected _width: number;
  protected _height: number;

  constructor(
    canvas: HTMLCanvasElement,
    width: number = 600,
    height: number = 400
  ) {
    const GL =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    super(GL);

    this._canvas = canvas;

    GL.clearColor(1, 1, 1, 1);
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
    GL.enable(GL.DEPTH_TEST);
    GL.enable(GL.BLEND);
    GL.disable(GL.CULL_FACE);
    GL.blendFuncSeparate(
      GL.SRC_ALPHA,
      GL.ONE_MINUS_SRC_ALPHA,
      GL.ONE,
      GL.ONE_MINUS_SRC_ALPHA
    );

    this._pixelRatio = 2;
    super.set3DView(Math.PI / 4, width / height, 0.1, 1000);
    this.resize(width, height);
  }

  public set pixelRatio(value: number) {
    this._pixelRatio = value;
    this.resize(this._width, this._height);
  }

  public get pixelRatio(): number {
    return this._pixelRatio;
  }

  public resize(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._canvas.style.width = width + "px";
    this._canvas.style.height = height + "px";
    this._canvas.width = width * this._pixelRatio;
    this._canvas.height = height * this._pixelRatio;
    this._GL.viewport(0, 0, this._canvas.width, this._canvas.height);
    super.set3DView(
      this._viewInfo.fovY,
      this._width / this._height,
      this._viewInfo.near,
      this._viewInfo.far
    );
  }

  public set3DView(fovY: number, near: number = 0.1, far: number = 1000) {
    super.set3DView(fovY, this._width / this._height, near, far);
  }

  public setMVPMatrix(matrix: number[]) {
    throw new RuntimeError("not implemented");
  }

  public clear(color?: number[]) {
    if (color) {
      this._GL.clearColor(
        color[0],
        color[1],
        color[2],
        color[3] != null ? color[3] : 1
      );
    }
    this._GL.clear(this._GL.COLOR_BUFFER_BIT | this._GL.DEPTH_BUFFER_BIT);
  }
}

export class WebGLCanvasPlatformWebVR extends WebGLPlatform {
  protected _pixelRatio: number;
  protected _canvas: HTMLCanvasElement;
  protected _width: number;
  protected _height: number;

  constructor(
    canvas: HTMLCanvasElement,
    width: number = 600,
    height: number = 400
  ) {
    const GL =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    super(GL);

    this._canvas = canvas;

    GL.clearColor(1, 1, 1, 1);
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
    GL.enable(GL.DEPTH_TEST);
    GL.enable(GL.BLEND);
    GL.disable(GL.CULL_FACE);
    GL.blendFuncSeparate(
      GL.SRC_ALPHA,
      GL.ONE_MINUS_SRC_ALPHA,
      GL.ONE,
      GL.ONE_MINUS_SRC_ALPHA
    );

    this._pixelRatio = getDefaultDevicePixelRatio();
    this.resize(width, height);
    this.setWebVRView(
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    );
  }

  public set pixelRatio(value: number) {
    this._pixelRatio = value;
    this.resize(this._width, this._height);
  }

  public get pixelRatio(): number {
    return this._pixelRatio;
  }

  public resize(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._canvas.width = width * this._pixelRatio;
    this._canvas.height = height * this._pixelRatio;
  }

  public set3DView(fovY: number, near: number = 0.1, far: number = 1000) {
    super.set3DView(fovY, this._width / this._height, near, far);
  }

  public setWebVRView(viewMatrix: number[], projectionMatrix: number[]) {
    super.setWebVRView(viewMatrix, projectionMatrix);
  }

  public clear(color?: number[]) {
    if (color) {
      this._GL.clearColor(
        color[0],
        color[1],
        color[2],
        color[3] != null ? color[3] : 1
      );
    }
    this._GL.clear(this._GL.COLOR_BUFFER_BIT | this._GL.DEPTH_BUFFER_BIT);
  }
}
