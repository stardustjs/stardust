import * as Specification from "../specification/specification";
import { compileString } from "../compiler/compiler";

export function compile(code: string): Specification.Marks {
  return compileString(code);
}
