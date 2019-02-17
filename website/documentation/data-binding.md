---
layout: documentation
title: "Stardust Documentation: Data Binding"
---

Data Binding
====

Once you create a set of marks in Stardust such as:

```javascript
let circleMark = Stardust.mark.circle();
let circles = Stardust.mark.create(circleMark, platform);
```

You can specify their attributes with data bindings.

## Specifying Data Items

To specify an array of data items, use `marks.data(array)`:

```javascript
circles.data([ 1, 2, 3, 4, 5 ])
```

## Specifying Attributes

Attributes can be specified directly by calling `marks.attr(name, value)`:

```javascript
circles.attr("center", d => [ d * 3, d * 5 - 2 ]);
circles.attr("radius", 2);
circles.attr("color", [ 0.3, 0.1, 0.7, 1 ]);
```

## Using Scales

### D3 Scales

If you are familiar with [D3](https://d3js.org/), you'll find that Stardust's data binding API is very similar to D3's.
Therefore, you can use D3's scales in Stardust as well:

```javascript
// Create a D3 scale
let radiusScale = d3.scale.linear()
    .domain([ 0, 10 ])
    .range([ 0, 5 ]);

// Set mark attributes with D3 scales
circles.attr("radius", d => radiusScale(d));
```

### Stardust Scales

D3's scales are JavaScript functions, which has to be executed in JavaScript.
Stardust has a set of scales that can run on GPUs, which means you can setup animation parameters with them, and get great performance.

#### Stardust.scale.linear

```javascript
// Create a Stardust scale
let radiusScale = Stardust.scale.linear()
    .domain([ 0, 10 ])
    .range([ 0, 5 ]);

// Set mark attributes with D3 scales
circles.attr("radius", radiusScale(d => d));

// X and Y scales
let xScale = Stardust.scale.linear()
    .domain([ 0, 10 ])
    .range([ 0, 10 ]);

let yScale = Stardust.scale.linear()
    .domain([ 0, 10 ])
    .range([ 0, 20 ]);

// Attributes with Vector or Color types can be set using corresponding functions
circles.attr("center", Stardust.scale.Vector2(
    xScale(d => d), yScale(d => d)
);
```

You can also create custom scales with your own expression in the [mark specification language]({{base}}/documentation/specification):

```javascript
// Custom scale with expression
let positionScale = Stardust.scale.custom(`
    Vector2(
        (R - r) * cos(value) + d * cos((R / r - 1) * value),
        (R - r) * sin(value) - d * sin((R / r - 1) * value)
    ) * 50 + Vector2(250, 250)
`);
// Define attributes in the expression
positionScale
    .attr("d", 2.19).attr("R", 5).attr("r", 5 * (18 / 41));

// Another custom scale for color
let colorScale = Stardust.scale.custom(`
    hcl2rgb(Color(value, 0.5, 0.5, 0.1))
`);

circles
    .attr("center", positionScale(d => d * 41))
    .attr("color", colorScale(d => d * 41))
    .attr("radius", 1)
```