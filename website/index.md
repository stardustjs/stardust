---
layout: default
title: "Stardust: GPU-based Visualization Library"
---

Stardust: GPU-based Visualization Library
====

<ul class="examples group">
    <li><a href="{{base}}/examples/glyphs"><img src="{{base}}/examples/glyphs/preview_small.png" /><div class="overlay"><span>Glyphs</span></div></a></li>
    <li><a href="{{base}}/examples/sanddance"><img src="{{base}}/examples/sanddance/preview_small.png" /><div class="overlay"><span>SandDance</span></div></a></li>
    <li><a href="{{base}}/examples/daily-activities"><img src="{{base}}/examples/daily-activities/preview_small.png" /><div class="overlay"><span>Daily Activities</span></div></a></li>
    <li><a href="{{base}}/examples/squares"><img src="{{base}}/examples/squares/preview_small.png" /><div class="overlay"><span>Squares</span></div></a></li>
    <li><a href="{{base}}/examples/isotype"><img src="{{base}}/examples/isotype/preview_small.png" /><div class="overlay"><span>Isotype</span></div></a></li>
    <li><a href="{{base}}/examples/graph"><img src="{{base}}/examples/graph/preview_small.png" /><div class="overlay"><span>Force-directed Graph</span></div></a></li>
</ul>


<p class="lead" markdown="1">
**Stardust** is a library for rendering information visualizations with GPU (WebGL). Stardust provides an easy-to-use
and familiar API for defining marks and binding data to them. With Stardust, you can render tens of thousands
of markers and animate them in real time without the hassle of managing WebGL shaders and buffers.
</p>

Play with the library in the online playground:

- [Online Playground]({{base}}/playground/)

Install with npm:

```bash
npm install stardust-core
npm install stardust-webgl
```

Link to the latest release:

```html
<script type="text/javascript" src="//stardustjs.github.io/stardust/v0.1.1/stardust.bundle.min.js"></script>
```

Checkout the source code here:

- <https://github.com/stardustjs/>

Getting Started
----

First, let's create an HTML file with a script tag to the Stardust library:

```html
<!DOCTYPE html>
<meta charset="utf-8">
<script type="text/javascript" src="//stardustjs.github.io/stardust/v0.1.1/stardust.bundle.min.js"></script>
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

## Publication

<ul>
    <li style="line-height: 1.2em">
        <b>Stardust: Accessible and Transparent GPU Support for Information Visualization Rendering</b><br />
        Donghao Ren, Bongshin Lee, Tobias Höllerer<br />
        <i>Computer Graphics Forum (Proc. EuroVis), 2017</i><br />
        <small>[ <a href="publications/eurovis2017-stardust.pdf">PDF</a> |
        <a href="https://vimeo.com/218365921">Video</a> ]</small>
    </li>
</ul>


## Next Steps

- See the [examples]({{base}}/examples)
- Play with existing code in the [online playground]({{base}}/playground)
- Browse the [documentation]({{base}}/documentation)
- Checkout the source code at <https://github.com/stardustjs/>
- Join the discussion in Google Groups <https://groups.google.com/forum/#!forum/stardustjs>