---
layout: documentation
title: "Stardust Documentation: Overview"
---

Overview
====

**Stardust** is a library for rendering information visualizations with GPU (WebGL). Stardust provides an easy-to-use
and familiar API for defining marks and binding data to them. With Stardust, you can render tens of thousands
of markers and animate them in real time without the hassle of managing WebGL shaders and buffers.

Including Stardust in Your Project
----

To use Stardust in your projects, you can either
add a `<script>` tag to our prebuilt bundle
or install the node modules.

### Use Stardust in Web Pages

Link to the latest release:

```html
<script type="text/javascript" src="//stardustjs.github.io/stardust/v0.1.1/stardust.bundle.min.js"></script>
```

### Use Stardust in Node

Install Stardust modules with npm:

```bash
npm install stardust-core
npm install stardust-webgl
```

In JavaScript code:

```bash
var Stardust = require("stardust-core");
var StardustWebGL = require("stardust-webgl");
```