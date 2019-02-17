import { Intrinsics } from "stardust-core";
import { Dictionary } from "stardust-core";

type IntrinsicImplementation = (...args: string[]) => string;

const intrinsicImplementations = new Dictionary<IntrinsicImplementation>();
const intrinsicsCodeBase = new Dictionary<string>();

function ImplementFunction(
  name: string,
  argTypes: string[],
  returnType: string,
  code: IntrinsicImplementation
) {
  const internalName = Intrinsics.getInternalName({
    name,
    argTypes,
    returnType
  });
  intrinsicImplementations.set(internalName, code);
}

function ImplementSimpleFunction(
  name: string,
  argTypes: string[],
  returnType: string,
  funcName: string,
  funcCode?: string
) {
  ImplementFunction(name, argTypes, returnType, (...args: string[]) => {
    return `${funcName}(${args.join(", ")})`;
  });
  if (funcCode) {
    const internalName = Intrinsics.getInternalName({
      name,
      argTypes,
      returnType
    });
    intrinsicsCodeBase.set(internalName, funcCode);
  }
}

function ImplementOperator(
  name: string,
  argTypes: string[],
  returnType: string,
  code: IntrinsicImplementation
) {
  ImplementFunction(`@${name}`, argTypes, returnType, code);
}

function ImplementTypeConversion(
  srcType: string,
  destType: string,
  code: IntrinsicImplementation
) {
  ImplementFunction(`cast:${srcType}:${destType}`, [srcType], destType, code);
}

for (const type of ["float", "int", "Vector2", "Vector3", "Vector4", "Color"]) {
  ImplementOperator("+", [type, type], type, (a, b) => `(${a}) + (${b})`);
  ImplementOperator("-", [type, type], type, (a, b) => `(${a}) - (${b})`);
  ImplementOperator("*", [type, type], type, (a, b) => `(${a}) * (${b})`);
  ImplementOperator("/", [type, type], type, (a, b) => `(${a}) / (${b})`);
  if (type != "Color") {
    ImplementOperator("+", [type], type, (a, b) => `${a}`);
    ImplementOperator("-", [type], type, (a, b) => `-(${a})`);
  }
}
ImplementOperator(
  "*",
  ["float", "Vector2"],
  "Vector2",
  (a, b) => `(${a}) * (${b})`
);
ImplementOperator(
  "*",
  ["float", "Vector3"],
  "Vector3",
  (a, b) => `(${a}) * (${b})`
);
ImplementOperator(
  "*",
  ["float", "Vector4"],
  "Vector4",
  (a, b) => `(${a}) * (${b})`
);
ImplementOperator(
  "*",
  ["Vector2", "float"],
  "Vector2",
  (a, b) => `(${a}) * (${b})`
);
ImplementOperator(
  "*",
  ["Vector3", "float"],
  "Vector3",
  (a, b) => `(${a}) * (${b})`
);
ImplementOperator(
  "*",
  ["Vector4", "float"],
  "Vector4",
  (a, b) => `(${a}) * (${b})`
);
ImplementOperator(
  "/",
  ["Vector2", "float"],
  "Vector2",
  (a, b) => `(${a}) / (${b})`
);
ImplementOperator(
  "/",
  ["Vector3", "float"],
  "Vector3",
  (a, b) => `(${a}) / (${b})`
);
ImplementOperator(
  "/",
  ["Vector4", "float"],
  "Vector4",
  (a, b) => `(${a}) / (${b})`
);

// ImplementOperator("%", [ "int", "int" ], "int", (a, b) => `(${a}) % (${b})`);
ImplementOperator(
  "%",
  ["float", "float"],
  "float",
  (a, b) => `mod(${a}, ${b})`
);

for (const type of ["float", "int", "bool"]) {
  ImplementOperator("==", [type, type], "bool", (a, b) => `(${a}) == (${b})`);
}
for (const type of ["float", "int"]) {
  ImplementOperator(">", [type, type], "bool", (a, b) => `(${a}) > (${b})`);
  ImplementOperator("<", [type, type], "bool", (a, b) => `(${a}) < (${b})`);
  ImplementOperator(">=", [type, type], "bool", (a, b) => `(${a}) >= (${b})`);
  ImplementOperator("<=", [type, type], "bool", (a, b) => `(${a}) <= (${b})`);
}

ImplementOperator("!", ["bool"], "bool", a => `!(${a})`);
ImplementOperator("&&", ["bool", "bool"], "bool", (a, b) => `(${a}) && (${b})`);
ImplementOperator("||", ["bool", "bool"], "bool", (a, b) => `(${a}) || (${b})`);

ImplementSimpleFunction("Vector2", ["float", "float"], "Vector2", "vec2");
ImplementSimpleFunction(
  "Vector3",
  ["float", "float", "float"],
  "Vector3",
  "vec3"
);
ImplementSimpleFunction(
  "Vector4",
  ["float", "float", "float", "float"],
  "Vector4",
  "vec4"
);
ImplementSimpleFunction(
  "Color",
  ["float", "float", "float", "float"],
  "Color",
  "vec4"
);
ImplementSimpleFunction(
  "Quaternion",
  ["float", "float", "float", "float"],
  "Quaternion",
  "vec4"
);

ImplementSimpleFunction("normalize", ["Vector2"], "Vector2", "normalize");
ImplementSimpleFunction("normalize", ["Vector3"], "Vector3", "normalize");
ImplementSimpleFunction("normalize", ["Vector4"], "Vector4", "normalize");
ImplementSimpleFunction("normalize", ["Quaternion"], "Vector4", "normalize");

ImplementSimpleFunction("dot", ["Vector2", "Vector2"], "float", "dot");
ImplementSimpleFunction("dot", ["Vector3", "Vector3"], "float", "dot");
ImplementSimpleFunction("dot", ["Vector4", "Vector4"], "float", "dot");

ImplementSimpleFunction("length", ["Vector2"], "float", "length");
ImplementSimpleFunction("length", ["Vector3"], "float", "length");
ImplementSimpleFunction("length", ["Vector4"], "float", "length");
ImplementSimpleFunction("length", ["Quaternion"], "float", "length");

ImplementSimpleFunction("cross", ["Vector3", "Vector3"], "Vector3", "cross");

ImplementSimpleFunction(
  "quat_mul",
  ["Quaternion", "Quaternion"],
  "Quaternion",
  "s3_quat_mul",
  `
    vec4 s3_quat_mul(vec4 q1, vec4 q2) {
        return vec4(
            q1.w * q2.xyz + q2.w * q1.xyz + cross(q1.xyz, q2.xyz),
            q1.w * q2.w - dot(q1.xyz, q2.xyz)
        );
    }
`
);

ImplementSimpleFunction(
  "quat_rotate",
  ["Quaternion", "Vector3"],
  "Vector3",
  "s3_quat_rotate",
  `
    vec3 s3_quat_rotate(vec4 q, vec3 v) {
        float d = dot(q.xyz, v);
        vec3 c = cross(q.xyz, v);
        return q.w * q.w * v + (q.w + q.w) * c + d * q.xyz - cross(c, q.xyz);
    }
`
);

const colorCode = `
    float s3_lab2rgb_curve(float v) {
        float p = pow(v, 3.0);
        if(p > 0.008856) {
            return p;
        } else {
            return (v - 16.0 / 116.0) / 7.787;
        }
    }
    float s3_lab2rgb_curve2(float v) {
        if(v > 0.0031308) {
            return 1.055 * pow(v , (1.0 / 2.4)) - 0.055;
        } else {
            return 12.92 * v;
        }
    }
    vec4 s3_lab2rgb(vec4 lab) {
        float var_Y = (lab.x + 0.160) / 1.160;
        float var_X = lab.y / 5.0 + var_Y;
        float var_Z = var_Y - lab.z / 2.0;

        var_X = s3_lab2rgb_curve(var_X) * 0.95047;
        var_Y = s3_lab2rgb_curve(var_Y);
        var_Z = s3_lab2rgb_curve(var_Z) * 1.08883;

        float var_R = var_X *  3.2406 + var_Y * -1.5372 + var_Z * -0.4986;
        float var_G = var_X * -0.9689 + var_Y *  1.8758 + var_Z *  0.0415;
        float var_B = var_X *  0.0557 + var_Y * -0.2040 + var_Z *  1.0570;

        var_R = s3_lab2rgb_curve2(var_R);
        var_G = s3_lab2rgb_curve2(var_G);
        var_B = s3_lab2rgb_curve2(var_B);

        return vec4(var_R, var_G, var_B, lab.a);
    }
    vec4 s3_hcl2rgb(vec4 hcl) {
        vec4 lab = vec4(hcl.z, hcl.y * cos(hcl.x), hcl.y * sin(hcl.x), hcl.a);
        return s3_lab2rgb(lab);
    }
`;

ImplementSimpleFunction("lab2rgb", ["Color"], "Color", "s3_lab2rgb", colorCode);
ImplementSimpleFunction("hcl2rgb", ["Color"], "Color", "s3_hcl2rgb", colorCode);

ImplementSimpleFunction("abs", ["float"], "float", "abs");
ImplementSimpleFunction("sqrt", ["float"], "float", "sqrt");
ImplementSimpleFunction("exp", ["float"], "float", "exp");
ImplementSimpleFunction("log", ["float"], "float", "log");
ImplementSimpleFunction("sin", ["float"], "float", "sin");
ImplementSimpleFunction("cos", ["float"], "float", "cos");
ImplementSimpleFunction("tan", ["float"], "float", "tan");
ImplementSimpleFunction("asin", ["float"], "float", "asin");
ImplementSimpleFunction("acos", ["float"], "float", "acos");
ImplementSimpleFunction("atan", ["float"], "float", "atan");
ImplementSimpleFunction("atan2", ["float", "float"], "float", "atan2");

ImplementSimpleFunction("abs", ["int"], "int", "abs");
ImplementSimpleFunction("min", ["float", "float"], "float", "min");
ImplementSimpleFunction("max", ["float", "float"], "float", "max");
ImplementSimpleFunction("ceil", ["float"], "float", "ceil");
ImplementSimpleFunction("floor", ["float"], "float", "floor");

ImplementSimpleFunction("mix", ["float", "float", "float"], "float", "mix");
ImplementSimpleFunction(
  "mix",
  ["Vector2", "Vector2", "float"],
  "Vector2",
  "mix"
);
ImplementSimpleFunction(
  "mix",
  ["Vector3", "Vector3", "float"],
  "Vector3",
  "mix"
);
ImplementSimpleFunction(
  "mix",
  ["Vector4", "Vector4", "float"],
  "Vector4",
  "mix"
);
ImplementSimpleFunction("mix", ["Color", "Color", "float"], "Color", "mix");

ImplementFunction("clamp", ["float"], "float", a => `clamp(${a}, 0, 1)`);

ImplementTypeConversion("float", "int", a => `int(${a})`);
ImplementTypeConversion("int", "float", a => `float(${a})`);

ImplementFunction(
  "array",
  ["FloatArray", "float"],
  "float",
  (a, b) => `texture2D(${a}, vec2((${b} + 0.5) / float(${a}_length), 0.5)).x`
);
ImplementFunction(
  "array",
  ["Vector2Array", "float"],
  "Vector2",
  (a, b) => `texture2D(${a}, vec2((${b} + 0.5) / float(${a}_length), 0.5)).xy`
);
ImplementFunction(
  "array",
  ["Vector3Array", "float"],
  "Vector3",
  (a, b) => `texture2D(${a}, vec2((${b} + 0.5) / float(${a}_length), 0.5)).xyz`
);
ImplementFunction(
  "array",
  ["Vector4Array", "float"],
  "Vector4",
  (a, b) => `texture2D(${a}, vec2((${b} + 0.5) / float(${a}_length), 0.5)).xyzw`
);
ImplementFunction(
  "array",
  ["ColorArray", "float"],
  "Color",
  (a, b) => `texture2D(${a}, vec2((${b} + 0.5) / float(${a}_length), 0.5)).rgba`
);

ImplementFunction(
  "image",
  ["Image", "Vector2"],
  "Color",
  (a, b) => `texture2D(${a}, (${b} + 0.5) / vec2(${a}_width, ${a}_height))`
);
ImplementFunction(
  "image",
  ["FloatImage", "Vector2"],
  "float",
  (a, b) => `texture2D(${a}, (${b} + 0.5) / vec2(${a}_width, ${a}_height)).x`
);
ImplementFunction(
  "image",
  ["Vector2Image", "Vector2"],
  "Vector2",
  (a, b) => `texture2D(${a}, (${b} + 0.5) / vec2(${a}_width, ${a}_height)).xy`
);
ImplementFunction(
  "image",
  ["Vector3Image", "Vector2"],
  "Vector3",
  (a, b) => `texture2D(${a}, (${b} + 0.5) / vec2(${a}_width, ${a}_height)).xyz`
);
ImplementFunction(
  "image",
  ["Vector4Image", "Vector2"],
  "Vector4",
  (a, b) => `texture2D(${a}, (${b} + 0.5) / vec2(${a}_width, ${a}_height)).xyzw`
);
ImplementFunction(
  "image",
  ["ColorImage", "Vector2"],
  "Color",
  (a, b) => `texture2D(${a}, (${b} + 0.5) / vec2(${a}_width, ${a}_height)).rgba`
);

ImplementFunction(
  "get_camera_position",
  [],
  "Vector3",
  () => `s3_get_camera_position()`
);
ImplementFunction(
  "get_camera_direction",
  ["Vector3"],
  "Vector3",
  a => `s3_get_camera_direction(${a})`
);

export function generateIntrinsicFunction(
  name: string,
  args: string[]
): { code: string; additionalCode: string } {
  if (intrinsicImplementations.has(name)) {
    if (intrinsicsCodeBase.has(name)) {
      return {
        code: intrinsicImplementations.get(name)(...args),
        additionalCode: intrinsicsCodeBase.get(name)
      };
    } else {
      return {
        code: intrinsicImplementations.get(name)(...args),
        additionalCode: null
      };
    }
  } else {
    throw new Error(`intrinsic function ${name} is not defined.`);
  }
}
