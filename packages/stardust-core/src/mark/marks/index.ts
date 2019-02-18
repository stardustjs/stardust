import { CustomMark } from "../declare";
import { Mark } from "../mark";
import * as Specification from "../../specification/specification";
import { Platform } from "../../platform";
import { basic } from "../shaders/shaders";

export function create(
  spec: Specification.Mark,
  shader: Specification.Shader,
  platform: Platform
): Mark;
export function create(
  spec: Specification.Mark | CustomMark,
  platform: Platform
): Mark;
export function create(
  arg1: CustomMark | Specification.Mark,
  arg2: Platform | Specification.Shader,
  arg3?: Platform
): Mark {
  if (arg2 instanceof Platform) {
    const default_shader: Specification.Shader = basic();
    if (arg1 instanceof CustomMark) {
      const compiled = arg1.compile();
      if (compiled.shader != null) {
        return new Mark(compiled, compiled.shader, arg2);
      } else {
        return new Mark(compiled, default_shader, arg2);
      }
    } else {
      if (arg1.shader != null) {
        return new Mark(arg1, arg1.shader, arg2);
      } else {
        return new Mark(arg1, default_shader, arg2);
      }
    }
  } else {
    const default_shader: Specification.Shader = arg2;
    if (arg1 instanceof CustomMark) {
      return new Mark(arg1.compile(), default_shader, arg3);
    } else {
      return new Mark(arg1, default_shader, arg3);
    }
  }
}

export function custom(): CustomMark {
  return new CustomMark();
}

export * from "./marks";
export * from "./marks3d";
export { createText } from "./text";
export { compile } from "../compile";
