export let version = "0.2.4";

export { WebGLPlatform } from "./webgl/webgl";
export {
  WebGLCanvasPlatform2D,
  WebGLCanvasPlatform3D,
  WebGLCanvasPlatformWebVR
} from "./webgl/platforms";

import { Platform } from "stardust-core";
import { WebGLPlatform } from "./webgl/webgl";
import {
  WebGLCanvasPlatform2D,
  WebGLCanvasPlatform3D,
  WebGLCanvasPlatformWebVR
} from "./webgl/platforms";

Platform.Register("webgl", (gl: WebGLRenderingContext) => {
  return new WebGLPlatform(gl);
});

Platform.Register(
  "webgl-2d",
  (canvas: HTMLCanvasElement, width: number = 600, height: number = 400) => {
    return new WebGLCanvasPlatform2D(canvas, width, height);
  }
);

Platform.Register(
  "webgl-3d",
  (canvas: HTMLCanvasElement, width: number = 600, height: number = 400) => {
    return new WebGLCanvasPlatform3D(canvas, width, height);
  }
);

Platform.Register(
  "webgl-webvr",
  (canvas: HTMLCanvasElement, width: number = 600, height: number = 400) => {
    return new WebGLCanvasPlatformWebVR(canvas, width, height);
  }
);
