class SquaresVisualization {

    makeSquaresMark(side, mode) {
        let squares = Stardust.mark.custom()
            .input("size", "float")
            .input("spacing", "float")
            .input("x0", "float")
            .input("xSpacing", "float")
            .input("y1", "float")
            .input("binSpacing", "float")
            .input("binIndex", "float")
            .input("binSquares", "float")
            .input("bin", "float")
            .input("color", "Color");
        if(side == "right") {
            squares
                .input("assigned", "float")
                .variable("x", "x0 + xSpacing * assigned")
        } else {
            squares
                .input("label", "float")
                .variable("x", "x0 + xSpacing * label")
        }
        squares
            .variable("y", "y1 - bin * binSpacing")
            .variable("binIx", "floor(binIndex / binSquares)")
            .variable("binIy", "(binIndex % binSquares)")
            .variable("bx", "binIx * spacing")
            .variable("by", "binIy * spacing")
        if(side == "right") {
            squares
                .variable("px", "x + bx")
                .variable("py", "y + by");
        } else {
            squares
                .variable("px", "x - bx - spacing")
                .variable("py", "y + by");
        }
        if(mode == "solid") {
            squares
                .add("P2D.Rectangle")
                    .attr("p1", "Vector2(px, py)")
                    .attr("p2", "Vector2(px + spacing, py + spacing)")
                    .attr("color", "Color(1, 1, 1, 1)");
            squares
                .add("P2D.Rectangle")
                    .attr("p1", "Vector2(px, py)")
                    .attr("p2", "Vector2(px + size, py + size)")
                    .attr("color", "color");
        }
        if(mode == "outlined") {
            squares
                .add("P2D.Rectangle")
                    .attr("p1", "Vector2(px, py)")
                    .attr("p2", "Vector2(px + spacing, py + spacing)")
                    .attr("color", "Color(1, 1, 1, 1)");
            squares
                .add("P2D.Rectangle")
                    .attr("p1", "Vector2(px, py)")
                    .attr("p2", "Vector2(px + size, py + size)")
                    .attr("color", "color");
            squares
                .add("P2D.Rectangle")
                    .attr("p1", "Vector2(px + 0.5, py + 0.5)")
                    .attr("p2", "Vector2(px + size - 0.5, py + size - 0.5)")
                    .attr("color", "Color(1, 1, 1, 1)");
        }
        if(mode == "selection") {
            squares
                .add("P2D.Rectangle")
                    .attr("p1", "Vector2(px, py)")
                    .attr("p2", "Vector2(px + size, py + size)")
                    .attr("color", "Color(0, 0, 0, 0)");
            squares
                .add("P2D.OutlinedRectangle")
                    .attr("p1", "Vector2(px - 0.5, py - 0.5)")
                    .attr("p2", "Vector2(px + size + 0.5, py + size + 0.5)")
                    .attr("color", "Color(0, 0, 0, 1)");
        }
        return squares;
    }

    constructor(container) {
        let squares = this.makeSquaresMark("right", "solid");
        let squaresOutlined = this.makeSquaresMark("left", "outlined");
        let squaresSelection = this.makeSquaresMark("right", "selection");
        let squaresOutlinedSelection = this.makeSquaresMark("left", "selection");

        let parallelCoordinates = Stardust.mark.custom()
            .input("color", "Color")
            .input("x0", "float")
            .input("xSpacing", "float");
        for(let i = 0; i < 10; i++) {
            parallelCoordinates.input(`y${i}`, "float");
            parallelCoordinates.variable(`x${i}`, `x0 + xSpacing * ${i}`);
            if(i < 9) {
                parallelCoordinates.add("P2D.Line")
                    .attr("p1", `Vector2(x${i}, y${i})`)
                    .attr("p2", `Vector2(x${i + 1}, y${i + 1})`)
                    .attr("width", 2)
                    .attr("color", `Color(color.r, color.g, color.b, 0.3)`);
            }
        }

        this._container = container;
        this._canvas = d3.select(container).append("canvas");
        this._canvasNode = this._canvas.node();
        this._svg = d3.select(container).append("svg");
        this._svgAxis = this._svg.append("g").classed("axis", true);

        let platform = Stardust.platform("webgl-2d", this._canvasNode);

        this._platform = platform;

        this._layout = {
            numberBins: 10,
            squaresPerBin: 10,
            squareSize: 2,
            squareSpacing: 3,
            x0: 80,
            xSpacing: 100,
            y0: 10,
            numberClasses: 10
        };

        let colors = [[31,119,180],[255,127,14],[44,160,44],[214,39,40],[148,103,189],[140,86,75],[227,119,194],[127,127,127],[188,189,34],[23,190,207]];
        colors = colors.map((x) => [ x[0] / 255, x[1] / 255, x[2] / 255, 1 ]);

        let mark = Stardust.mark.create(squares, platform);
        mark
            .attr("color", d => colors[d.label])
            .attr("assigned", d => d.assigned)
            .attr("binIndex", d => d.binIndex)
            .attr("bin", d => d.scoreBin);

        let mark2 = Stardust.mark.create(squaresOutlined, platform);
        mark2
            .attr("color", d => colors[d.assigned])
            .attr("label", d => d.label)
            .attr("binIndex", d => d.binIndex2)
            .attr("bin", d => d.scoreBin);

        let markOverlay = Stardust.mark.create(squaresSelection, platform);
        markOverlay
            .attr("color", [ 0, 0, 0, 1 ])
            .attr("assigned", d => d.assigned)
            .attr("binIndex", d => d.binIndex)
            .attr("bin", d => d.scoreBin);

        let markOverlayOutlined = Stardust.mark.create(squaresOutlinedSelection, platform);
        markOverlayOutlined
            .attr("color", [ 0, 0, 0, 1 ])
            .attr("label", d => d.label)
            .attr("binIndex", d => d.binIndex2)
            .attr("bin", d => d.scoreBin);

        let markPC = Stardust.mark.create(parallelCoordinates, platform);
        let yScale = Stardust.scale.linear()
            .domain([ 0, 1 ]).range([ 500, 100 ]);
        markPC.attr("color", d => colors[d.label]);
        for(let i = 0; i < 10; i++) {
            ((i) => {
                markPC.attr(`y${i}`, yScale(d => d.scores[i]));
            })(i);
        }

        this._marks = {
            squares: mark,
            squaresOutlined: mark2,
            squaresOverlay: markOverlay,
            squaresOverlayOutlined: markOverlayOutlined,
            parallelCoordinates: markPC,
            yScale: yScale
        }



        this._canvasNode.onmousemove = e => {
            let bounds = this._canvasNode.getBoundingClientRect();
            var x = e.clientX - bounds.left;
            var y = e.clientY - bounds.top;
            var p = this._platform.getPickingPixel(x * 2, y * 2);
            if(p) {
                this.setSelection([ p[0].data()[p[1]] ]);
            } else {
                this.setSelection([]);
            }
        };
        this._canvasNode.onmousedown = e => {
            let bounds = this._canvasNode.getBoundingClientRect();
            var x = e.clientX - bounds.left;
            var y = e.clientY - bounds.top;
            var p = this._platform.getPickingPixel(x * 2, y * 2);
            if(p) {
                let inst = p[0].data()[p[1]];
                let selection = this._instances.filter((d) => d.label == inst.label && d.assigned == inst.assigned && d.scoreBin == inst.scoreBin);
                this.setSelection(selection);
            } else {
                this.setSelection([]);
            }
        };
        this._canvasNode.ondblclick = e => {
            let bounds = this._canvasNode.getBoundingClientRect();
            var x = e.clientX - bounds.left;
            var y = e.clientY - bounds.top;
            var p = this._platform.getPickingPixel(x * 2, y * 2);
            if(p) {
                let inst = p[0].data()[p[1]];
                let selection = this._instances.filter((d) => d.label == inst.label && d.assigned == inst.assigned);
                this.setSelection(selection);
            } else {
                this.setSelection([]);
            }
        };
    }

    setSelection(instances) {
        this._marks.squaresOverlay.data(instances);
        this._marks.squaresOverlayOutlined.data(instances.filter(d => d.label != d.assigned));
        this._marks.parallelCoordinates.data(instances);
        this.renderSelection();
    }

    setInstances(DATA) {
        this._DATA = DATA;
        this._layout.numberClasses = 10;
        let instances = DATA.map((d) => {
            return {
                label: parseInt(d.Label.substr(1)),
                assigned: parseInt(d.Assigned.substr(1)),
                score: d[d.Assigned],
                scoreBin: Math.min(this._layout.numberBins - 1, Math.max(0, Math.floor(parseFloat(d[d.Assigned]) * this._layout.numberBins))),
                scores: [ +d.C0, +d.C1, +d.C2, +d.C3, +d.C4, +d.C5, +d.C6, +d.C7, +d.C8, +d.C9 ]
            };
        });

        let CM = [];
        let CMBin = [];

        for(let i = 0; i < this._layout.numberClasses; i++) {
            CM[i] = [];
            CMBin[i] = [];
            for(let j = 0; j < this._layout.numberClasses; j++) {
                CM[i][j] = 0;
                CMBin[i][j] = [];
                for(let k = 0; k < this._layout.numberBins; k++) {
                    CMBin[i][j][k] = 0;
                }
            }
        }

        instances.sort(function(a, b) {
            if(a.label == a.assigned) return b.label == b.assigned ? 0 : +1;
            if(b.label == b.assigned) return a.label == a.assigned ? 0 : -1;
            if(a.assigned != b.assigned)
                return a.assigned - b.assigned;
            if(a.label != b.label)
                return a.label - b.label;
            return a.score - b.score;
        })

        instances.forEach(function(d) {
            d.CMIndex = CM[d.label][d.assigned];
            CM[d.label][d.assigned] += 1;
            d.binIndex = CMBin[0][d.assigned][d.scoreBin];
            CMBin[0][d.assigned][d.scoreBin] += 1;
        });

        instances.sort(function(a, b) {
            if(a.label == a.assigned) return b.label == b.assigned ? 0 : +1;
            if(b.label == b.assigned) return a.label == a.assigned ? 0 : -1;
            if(a.assigned != b.assigned)
                return -(a.assigned - b.assigned);
            if(a.label != b.label)
                return a.label - b.label;
            return a.score - b.score;
        })

        instances.forEach(function(d) {
            d.binIndex2 = CMBin[1][d.label][d.scoreBin];
            CMBin[1][d.label][d.scoreBin] += 1;
        });

        instances.forEach(function(d) {
            d.CMCount = CM[d.label][d.assigned];
        });

        instances.sort(function(a, b) {
            return a.assigned - b.assigned;
        });

        this._instances = instances;

        this._marks.squares.data(this._instances);
        this._marks.squaresOutlined.data(this._instances.filter(d => d.label != d.assigned));

        this.layout();
        this.render();
    }

    layoutConfigSquares() {
        let binSpacing = this._layout.squareSpacing * this._layout.squaresPerBin + this._layout.squareSpacing;
        this._marks.yScale.range([ this._layout.y0 + binSpacing * this._layout.numberBins, this._layout.y0 ]);

        [
            this._marks.squares,
            this._marks.squaresOutlined,
            this._marks.squaresOverlay,
            this._marks.squaresOverlayOutlined
        ].forEach(s => s
            .attr("size", this._layout.squareSize)
            .attr("spacing", this._layout.squareSpacing)
            .attr("x0", this._layout.x0)
            .attr("xSpacing", this._layout.xSpacing)
            .attr("y1", this._layout.y0 + binSpacing * this._layout.numberBins - binSpacing + this._layout.squareSpacing / 2)
            .attr("binSpacing", binSpacing)
            .attr("binSquares", this._layout.squaresPerBin)
        );
        this._marks.parallelCoordinates
            .attr("x0", this._layout.x0)
            .attr("xSpacing", this._layout.xSpacing);
    }
    layout() {
        this.layoutConfigSquares();

        var d3yscale = d3.scale.linear().domain(this._marks.yScale.domain()).range(this._marks.yScale.range());
        var axis = d3.svg.axis().scale(d3yscale).orient("left");
        this._svgAxis.attr("transform", "translate(30, 0)");
        this._svgAxis.call(axis);

        let width = 960;
        let height = 500;
        this._svg.attr("width", width).attr("height", height);
        this._platform.resize(width, height);
    }
    render() {
        this._platform.beginPicking(this._canvasNode.width, this._canvasNode.height);
        this._marks.squares.render();
        this._marks.squaresOutlined.render();
        this._platform.endPicking();

        this._platform.clear();
        this._marks.squares.render();
        this._marks.squaresOutlined.render();
    }
    renderSelection() {
        this._platform.clear();
        this._marks.squares.render();
        this._marks.squaresOutlined.render();
        this._marks.squaresOverlay.render();
        this._marks.squaresOverlayOutlined.render();
        this._marks.parallelCoordinates.render();
    }

    setLayoutParameter(layout) {
        let shouldRecompute = false;
        for(let p in layout) {
            if(layout.hasOwnProperty(p)) {
                this._layout[p] = layout[p];
                if(p == "numberBins" || p == "numberClasses") {
                    shouldRecompute = true;
                }
            }
        }
        if(shouldRecompute) {
            this.setInstances(this._DATA);
        }
        this.layout();
        this.render();
    }
}
