export let version = "0.2.4";

// Math classes and utilities
export * from "./common";

// Re-export core modules
import * as Specification from "./specification";
import * as Intrinsics from "./intrinsics";
import * as Compiler from "./compiler";

export { Specification, Intrinsics, Compiler };

export * from "./binding";
export * from "./mark";
export * from "./scale";
export * from "./platform";
