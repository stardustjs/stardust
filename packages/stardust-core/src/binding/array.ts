import * as Specification from "../specification";
import { getBindingValue, BindingPrimitive, types, Type } from "./types";

/** Data structure for a texture */
export interface TextureData {
  // Must be 4 component texture.
  width: number;
  height: number;
  numberComponents: number;
  type: "f32" | "u8" | "HTMLImageElement" | "HTMLCanvasElement";
  data:
    | Float32Array
    | Uint8Array
    | Uint8ClampedArray
    | HTMLCanvasElement
    | HTMLImageElement;
  dimensions: number;
}

/** Texture data binding */
export abstract class TextureBinding {
  public abstract getTextureData(GL: WebGLRenderingContext): TextureData;
}

export type ArrayBindingFunction = (
  datum: any,
  index: number,
  data: any[]
) => BindingPrimitive;

export class ArrayBinding extends TextureBinding {
  private _data: any[] = null;
  private _valueFunction: ArrayBindingFunction = null;
  private _dirty = false;
  private _textureData: TextureData = null;

  public getTextureData(GL: WebGLRenderingContext): TextureData {
    if (this._dirty) {
      const MAX_TEXTURE_SIZE = GL.getParameter(GL.MAX_TEXTURE_SIZE);
      const values = this._data.map(this._valueFunction).map(getBindingValue);
      let width = values.length;
      let height = 1;
      let length = width * height;
      if (values.length == 0) {
        this._textureData = null;
      } else {
        if (width > MAX_TEXTURE_SIZE) {
          height = Math.ceil(width / MAX_TEXTURE_SIZE);
          width = MAX_TEXTURE_SIZE;
          length = height * width;
        }
        let array: Float32Array;
        let numberComponents: number;
        if (typeof values[0] == "number") {
          numberComponents = 1;
          array = new Float32Array(length * 4);
          for (let i = 0; i < length; i++) {
            if (i < values.length) {
              array[i * 4] = values[i] as number;
            } else {
              array[i * 4] = 0;
            }
          }
        } else {
          numberComponents = (values[0] as number[]).length;
          array = new Float32Array(length * 4);
          let offset = 0;
          for (let i = 0; i < length; i++) {
            if (i < values.length) {
              const v = values[i] as number[];
              for (let j = 0; j < numberComponents; j++) {
                array[offset++] = v[j];
              }
              offset += 4 - numberComponents;
            } else {
              for (let j = 0; j < 4; j++) {
                  array[offset++] = 0;
              }
          }
          }
        }
        this._textureData = {
          width,
          height,
          dimensions: 1,
          type: "f32",
          numberComponents,
          data: array
        };
      }
    }
    return this._textureData;
  }

  public data(): any[];
  public data(data: any[]): ArrayBinding;
  public data(data?: any[]): ArrayBinding | any[] {
    if (data != null) {
      this._data = data;
      this._dirty = true;
      return this;
    } else {
      return this._data;
    }
  }

  public value(): ArrayBindingFunction;
  public value(func: ArrayBindingFunction): ArrayBinding;
  public value(
    func?: ArrayBindingFunction
  ): ArrayBinding | ArrayBindingFunction {
    if (func != null) {
      this._valueFunction = func;
      this._dirty = true;
      return this;
    } else {
      return this._valueFunction;
    }
  }
}

export class Image extends TextureBinding {
  public _data: TextureData = null;

  public setImage(image: HTMLImageElement | HTMLCanvasElement) {
    this._data = {
      width: image.width,
      height: image.height,
      numberComponents: 4,
      type:
        image instanceof HTMLImageElement
          ? "HTMLImageElement"
          : "HTMLCanvasElement",
      data: image,
      dimensions: 2
    };
  }

  public getTextureData(GL: WebGLRenderingContext) {
    return this._data;
  }
}

export function array(): ArrayBinding {
  return new ArrayBinding();
}
