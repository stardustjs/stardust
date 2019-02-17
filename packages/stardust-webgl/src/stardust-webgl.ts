export let version = "0.2.1";

export {
  WebGLPlatform,
  WebGLCanvasPlatform2D,
  WebGLCanvasPlatform3D,
  WebGLCanvasPlatformWebVR
} from "./webgl/webgl";

import { Platform } from "stardust-core";
import {
  WebGLCanvasPlatform2D,
  WebGLCanvasPlatform3D,
  WebGLCanvasPlatformWebVR
} from "./webgl/webgl";

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
