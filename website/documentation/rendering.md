---
layout: documentation
title: "Stardust Documentation: Rendering"
---

Rendering
====

After binding data items and assigning required attributes to your marks, you can call the `render` function to draw them on your canvas.

```javascript
marks.render();
```

You can update attributes that are defined as numbers (those that do not use scales and lambda functions) and re-render them:

```javascript
// Change mark attributes
marks.attr("radius", 6);

// Change scale attributes
xScale.domain([ 10, 20 ]);
customScale.attr("p", 4);

// Re-render
platform.clear();
marks.render();
```

A Complete Example
----

Here is a complete example using Stardust to render a few circles. First, let's create an HTML file with a script tag to the Stardust library:

```html
<!DOCTYPE html>
<meta charset="utf-8">
<script type="text/javascript" src="//stardustjs.github.io/stardust/stardust.bundle.min.js"></script>
```

Add a `canvas` element for our visualization:

```html
<canvas id="main-canvas"></canvas>
```

Initialize the WebGL platform:

```html
<script type="text/javascript">
    // Get our canvas element
    var canvas = document.getElementById("main-canvas");
    var width = 960;
    var height = 500;

    // Create a WebGL 2D platform on the canvas:
    var platform = Stardust.platform("webgl-2d", canvas, width, height);

    // ... Load data and render your visualization
</script>
```

For the tutorial, let's make some data. You can load data from JSON or CSV files using other libraries such as D3.

```javascript
var data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
```

Create a Stardust mark specification:

```javascript
var circleSpec = Stardust.mark.circle();
```

Create a mark object using the spec on our WebGL platform:

```javascript
var circles = Stardust.mark.create(circleSpec, platform);
```

Bind data attributes to the circles:

```javascript
circles.attr("center", (d) => [ d * 80, 250 ]);
circles.attr("radius", (d) => d * 3);
circles.attr("color", [ 0, 0, 0, 1 ]);
```

Bind our data items to the circles:

```javascript
circles.data(data);
```

Render the circles:

```javascript
circles.render();
```

You may change data bindings and call render again:

```javascript
// Update binding attributes
circles.attr("color", [ 1, 0, 0, 1 ]);

// Clear the previously rendered stuff
platform.clear();

// Re-render the circles
circles.render();
```