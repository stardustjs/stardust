export * from "stardust-core";
export {
  WebGLPlatform,
  WebGLCanvasPlatform2D,
  WebGLCanvasPlatform3D,
  WebGLCanvasPlatformWebVR
} from "stardust-webgl";

import { isotype as _isotype } from "stardust-isotype";

export namespace mark {
  export let isotype = _isotype;
}

import "stardust-webgl";
