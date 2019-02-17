import { Specification, mark } from "stardust-core";

declare function require(name: "earcut"): (points: number[]) => number[];

const earcut = require("earcut");

interface ParsedTriangle {
  p1: number[];
  p2: number[];
  p3: number[];
  color: string;
}

interface ParsedTriangles {
  x: number;
  y: number;
  width: number;
  height: number;
  triangles: ParsedTriangle[];
}

function parseSVGTriangles(svg: string): ParsedTriangles {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svg, "image/svg+xml");
  function findNodeByType(node: Element | Document, type: string): Element[] {
    if (node instanceof Element) {
      if (node.tagName && node.tagName.toLowerCase() == type) {
        return [node];
      }
    }
    let nodes: Element[] = [];
    for (let i = 0; i < node.children.length; i++) {
      nodes = nodes.concat(findNodeByType(node.children.item(i), type));
    }
    return nodes;
  }
  const svgNode = findNodeByType(doc, "svg")[0];
  const polygons = findNodeByType(doc, "polygon") as SVGPolygonElement[];
  const triangles: ParsedTriangle[] = [];
  polygons.forEach(p => {
    const pointsString = p.getAttribute("points");
    const points = pointsString
      .split(/[, \t]/)
      .map(x => x.trim())
      .filter(x => x != "")
      .map(x => parseFloat(x));
    const cut = earcut(points);
    let color = "black";
    if (p.style.fill && p.style.fill != "") {
      color = p.style.fill;
    }
    for (let i = 0; i < cut.length; i += 3) {
      const i1 = cut[i + 0];
      const i2 = cut[i + 1];
      const i3 = cut[i + 2];
      const triangle = {
        p1: [points[i1 * 2], points[i1 * 2 + 1]],
        p2: [points[i2 * 2], points[i2 * 2 + 1]],
        p3: [points[i3 * 2], points[i3 * 2 + 1]],
        color
      };
      triangles.push(triangle);
    }
  });
  const parseSize = (sz: string) => {
    if (sz == null || sz == "") {
      return 0;
    }
    if (sz.match(/px$/)) {
      return parseFloat(sz.substr(0, sz.length - 2));
    }
    if (sz.match(/em$/)) {
      return parseFloat(sz.substr(0, sz.length - 2));
    }
    return parseFloat(sz);
  };
  return {
    x: parseSize(svgNode.getAttribute("x")),
    y: parseSize(svgNode.getAttribute("y")),
    width: parseSize(svgNode.getAttribute("width")),
    height: parseSize(svgNode.getAttribute("height")),
    triangles
  };
}

export function isotype(svg: string): Specification.Mark {
  const custom = mark.custom();

  custom.input("position", "Vector2", "[ 0, 0 ]");
  custom.input("size", "float", "1");
  custom.input("color", "Color", "[ 0, 0, 0, 1 ]");

  const triangles = parseSVGTriangles(svg);

  const cx = triangles.x + triangles.width / 2;
  const cy = triangles.y + triangles.height / 2;

  for (const t of triangles.triangles) {
    custom
      .add("P2D.Triangle")
      .attr("p1", `position + Vector2(${t.p1[0] - cx}, ${t.p1[1] - cy}) * size`)
      .attr("p2", `position + Vector2(${t.p2[0] - cx}, ${t.p2[1] - cy}) * size`)
      .attr("p3", `position + Vector2(${t.p3[0] - cx}, ${t.p3[1] - cy}) * size`)
      .attr("color", "color");
  }

  return custom.compile();
}
