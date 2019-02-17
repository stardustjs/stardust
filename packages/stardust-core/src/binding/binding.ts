// binding.js:
// Take care of data binding.

import * as Specification from "../specification/specification";
import { MathType } from "../common";
import { TextureBinding } from "./array";
import { RuntimeError } from "../common";
import {
  BindingValue,
  BindingPrimitive,
  BindingType,
  BindingFunction,
  getBindingValue,
  types,
  Type
} from "./types";

export * from "./types";
export * from "./array";

// The main binding class.
export class Binding {
  private _type: Type;
  private _value: BindingValue;

  constructor(typeName: string, value: BindingValue) {
    this._type = types[typeName];
    this._value = value;
  }

  public get valueType(): Type {
    return this._type;
  }

  public get value(): BindingValue {
    return this._value;
  }

  public get bindingType(): BindingType {
    if (this._value instanceof TextureBinding) {
      return BindingType.TEXTURE;
    }
    if (typeof this._value == "function") {
      return BindingType.FUNCTION;
    }
    return BindingType.VALUE;
  }

  public get specValue(): Specification.Value {
    return getBindingValue(this._value as BindingPrimitive);
  }

  public get textureValue(): TextureBinding {
    return this._value as TextureBinding;
  }

  public forEach(
    data: any[],
    callback: (value: Specification.Value, i: number) => any
  ) {
    switch (this.bindingType) {
      case BindingType.FUNCTION:
        {
          const f = this._value as BindingFunction;
          for (let i = 0; i < data.length; i++) {
            callback(getBindingValue(f(data[i], i)), i);
          }
        }
        break;
      case BindingType.VALUE:
        {
          const value = getBindingValue(this._value as BindingPrimitive);
          for (let i = 0; i < data.length; i++) {
            callback(value, i);
          }
        }
        break;
      case BindingType.TEXTURE: {
        throw new RuntimeError("Texture binding does not support for each");
      }
    }
  }

  public map(data: any[]): Specification.Value[] {
    switch (this.bindingType) {
      case BindingType.FUNCTION: {
        const f = this._value as BindingFunction;
        return data.map((d, i) => getBindingValue(f(d, i)));
      }
      case BindingType.VALUE: {
        const value = getBindingValue(this._value as BindingPrimitive);
        return data.map(() => value);
      }
      case BindingType.TEXTURE: {
        throw new RuntimeError("Texture binding does not support for map");
      }
    }
  }

  public fillBinary(
    data: any[],
    rep: number,
    array: Float32Array | Int32Array
  ) {
    const n = data.length;
    const p = this._type.primitiveCount;
    let ptr = 0;
    switch (this.bindingType) {
      case BindingType.FUNCTION:
        {
          const f = this._value as BindingFunction;
          if (p == 1) {
            for (let i = 0; i < n; i++) {
              const result = getBindingValue(f(data[i], i)) as number;
              for (let k = 0; k < rep; k++) {
                array[ptr++] = result;
              }
            }
          } else {
            for (let i = 0; i < n; i++) {
              const result = getBindingValue(f(data[i], i)) as number[];
              for (let k = 0; k < rep; k++) {
                for (let j = 0; j < p; j++) {
                  array[ptr++] = result[j];
                }
              }
            }
          }
        }
        break;
      case BindingType.VALUE:
        {
          const value = getBindingValue(this._value as BindingPrimitive);
          if (p == 1) {
            const v = value as number;
            for (let i = 0; i < n; i++) {
              for (let k = 0; k < rep; k++) {
                array[ptr++] = v;
              }
            }
          } else {
            const v = value as number[];
            for (let i = 0; i < n; i++) {
              for (let k = 0; k < rep; k++) {
                for (let j = 0; j < p; j++) {
                  array[ptr++] = v[j];
                }
              }
            }
          }
        }
        break;
      case BindingType.TEXTURE: {
        throw new RuntimeError(
          "Texture binding does not support for fillBinary"
        );
      }
    }
  }
}
