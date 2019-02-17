Stardust Example Code
====

This repository provides a set of Web visualization and graphic examples using the Stardust library.

Example Structure
----

We use a similar approach as in bl.ocks.org:

- Each example is runnable standalone with some common code provided in the `static` folder in this repository.
- Each example has a `metadata.json` file for description, and a `preview.png` file for thumbnail.
- The content of each example is rendered as a HTML file for reading online.

Common code for all examples:

- `static/assets/style.css`: The common CSS styling for Stardust's examples to have a uniform look
- `static/assets/utils.js`: Some utility functions, including:
    - FPS measure
    - Transition timing
- `stardust/stardust.bundle.js`
    - The version of Stardust that works with the examples.

`metadata.json` format:

    {
        description: "A short description file",
        excludes?: [
            "file.to.exclude",
            ...
        ]
    }