---
layout: documentation
title: "Stardust Documentation: Mark Specification"
---

Mark Specification
====

You can create novel marks with Stardust's mark specification language.

```javascript
let myMark = Stardust.mark.compile(`
    // Import predefined marks
    import { Circle, Line } from P2D;

    // Define a utility mark
    mark HLine(x: float, y: float) {
        Line(Vector2(x - 3, y), Vector2(x + 3, y), 1);
    }

    mark PointWithErrorBar(
        x: float, y: float,      // Input attributes
        ymin: float, ymax: float
    ) {
        // Emit the HLine mark defined above
        HLine(x, ymin);
        HLine(x, ymax);
        // Emit predefined marks
        Line(Vector2(x, ymin), Vector2(x, ymax), 1);
        Circle(Vector2(x, y), 3);
    }
`);

let marks = Stardust.mark.create(myMark, platform);
```

The language is based on [TypeScript](https://www.typescriptlang.org/), which is a typed superset of JavaScript.

Stardust support the following types:

- `float`: Floating-point number
- `int`: 32-bit signed integer
- `Vector2`, `Vector3`, and `Vector4`: 2D, 3D, and 4D Vector, respectively
- `Color`: Color in RGBA
- `Quaternion`: Quaternion type for 3D rotations

Stardust's support for language features:

- Variable, assignments, and expressions
- If statements
- Fixed-range for loops: `for(i in 1..20) { ... }`
- Function declaration and function calls
- Mark declaration and mark emits

Currently, Stardust does not support the following:

- The `any` type
- The `number` type, please use `int` or `float` explicitly
- Arrays, except Stardust's `FloatArray`, `Vector2Array`, etc.
- Lambda expressions
- JavaScript objects, interfaces and classes

Stardust's predefined marks are also written in this language, for exampl, the `wedge` mark is written as:

```javascript
import { Triangle } from P2D;

mark Wedge(
    p1: Vector2 = [ 0, 0 ],
    theta1: float = 0,
    theta2: float = 0,
    length: float = 10,
    width: float = 1,
    color: Color = [ 0, 0, 0, 1 ]
) {
    let dTheta = (theta2 - theta1) / 60;
    let dL = length / 60;
    for(i in 0..59) {
        let dThetaA = i * dTheta;
        let dThetaB = (i + 1) * dTheta;
        let thetaA = theta1 + dThetaA;
        let thetaB = theta1 + dThetaB;
        let thetaCenterA = theta1 + dThetaA / 2;
        let thetaCenterB = theta1 + dThetaB / 2;
        let dlA = dL * i;
        let dlB = dL * (i + 1);
        if(dThetaA > 1e-5 || dThetaA < -1e-5) {
            dlA = dlA / dThetaA * 2 * sin(dThetaA / 2);
        }
        if(dThetaB > 1e-5 || dThetaB < -1e-5) {
            dlB = dlB / dThetaB * 2 * sin(dThetaB / 2);
        }
        let pAdvA = Vector2(-sin(thetaCenterA), cos(thetaCenterA)) * dlA;
        let pAdvB = Vector2(-sin(thetaCenterB), cos(thetaCenterB)) * dlB;
        let pA = p1 + pAdvA;
        let pB = p1 + pAdvB;

        let dpA = Vector2(cos(thetaA), sin(thetaA)) * width * 0.5;
        let dpB = Vector2(cos(thetaB), sin(thetaB)) * width * 0.5;

        Triangle(pA + dpA, pB + dpB, pB - dpB, color);
        Triangle(pA + dpA, pB - dpB, pA - dpA, color);
    }
}
```