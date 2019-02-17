---
layout: documentation
title: "Stardust Documentation: Marks"
---

Marks
====

Stardust uses the term "mark" for graphical elements, such as circles, lines, and wedges.
You can use the **predefined marks** as below to create your visualizations,
or write code in Stardust's [mark specification language]({{base}}/documentation/specification) to create your own marks.

## Stardust.mark.circle

Circle marks:

```javascript
let circleMark = Stardust.mark.circle();
// Create circles with 8 triangles, good when drawing large numbers of small circles.
let circleMark = Stardust.mark.circle(8);
let circles = Stardust.mark.create(circleMark, platform);
```

Attributes:

| Name       | Type        | Default           | Description       |
|:-----------|:------------|:------------------|:------------------|
| `center`   | `Vector2`   | `[ 0, 0 ]`        | The center        |
| `radius`   | `float`     | `1`               | The radius        |
| `color`    | `Color`     | `[ 0, 0, 0, 1 ]`  | The fill color    |

## Stardust.mark.rect

Rectangle marks:

```javascript
let rectMark = Stardust.mark.rect();
let rects = Stardust.mark.create(rectMark, platform);
```

Attributes:

| Name       | Type        | Default           | Description              |
|:-----------|:------------|:------------------|:-------------------------|
| `p1`       | `Vector2`   | `[ 0, 0 ]`        | The top-left corner      |
| `p2`       | `Vector2`   | `[ 0, 0 ]`        | The bottom-right corner  |
| `color`    | `Color`     | `[ 0, 0, 0, 1 ]`  | The fill color           |

## Stardust.mark.line

Line marks:

```javascript
let lineMark = Stardust.mark.line();
let lines = Stardust.mark.create(lineMark, platform);
```

Attributes:

| Name       | Type        | Default           | Description
|:-----------|:------------|:------------------|:-----------------
| `p1`       | `Vector2`   | `[ 0, 0 ]`        | The top-left corn
| `p2`       | `Vector2`   | `[ 0, 0 ]`        | The bottom-right
| `width`    | `float`     | `1`               | The width
| `color`    | `Color`     | `[ 0, 0, 0, 1 ]`  | The fill color

## Stardust.mark.polyline

Polyline marks draw lines to connect the data items:

```javascript
let polylineMark = Stardust.mark.polyline();
let polylines = Stardust.mark.create(polylineMark, platform);
```

Attributes:

| Name       | Type        | Default           | Description      |
|:-----------|:------------|:------------------|:-----------------|
| `p`        | `Vector2`   | `[ 0, 0 ]`        | The point        |
| `width`    | `float`     | `1`               | The width        |
| `color`    | `Color`     | `[ 0, 0, 0, 1 ]`  | The fill color   |

## Stardust.mark.wedge

Wedge marks:

```javascript
let wedgeMark = Stardust.mark.wedge();
let wedges = Stardust.mark.create(wedgeMark, platform);
```

Attributes:

| Name       | Type        | Default           | Description              |
|:-----------|:------------|:------------------|:-------------------------|
| `p1`       | `Vector2`   | `[ 0, 0 ]`        | The starting point       |
| `theta1`   | `float`     | `0`               | The starting angle       |
| `theta2`   | `float`     | `0`               | The ending angle         |
| `length`   | `float`     | `10`              | The length of the wedge  |
| `width`    | `float`     | `1`               | The width of the wedge   |
| `color`    | `Color`     | `[ 0, 0, 0, 1 ]`  | The color                |
