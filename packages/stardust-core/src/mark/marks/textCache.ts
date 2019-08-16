// Create a text cache of given width and height.
export class Font {
  constructor(
    public fontFamily: string = "Arial",
    public fontSize: number = 12,
    public fontWeight: string = "normal",
    public fontStyle: string = "normal"
  ) {}
  public hash() {
    return (
      "F" +
      this.fontFamily +
      "," +
      this.fontSize +
      "," +
      this.fontWeight +
      "," +
      this.fontStyle
    );
  }
  public setFont(c: CanvasRenderingContext2D) {
    c.font = `${this.fontStyle} ${this.fontWeight} ${
      this.fontSize
    }px ${JSON.stringify(this.fontFamily)}`;
  }
}

// export class Style {
//     constructor(
//         public fill: string = null,
//         public stroke: string = null,
//         public strokeWidth: number = 1
//     ) { }
//     hash() {
//         return "S" + this.fill + "," + this.stroke + "," + this.strokeWidth;
//     }

//     drawText(text: string, x: number, y: number, c: CanvasRenderingContext2D) {
//         c.fillStyle = "#000000";
//         c.fillText(text, x, y);
//     }
// }

export interface TextCacheEntry {
  x: number;
  y: number;
  x_offset: number;
  baseline_offset: number;
  bbox_width: number;
  bbox_height: number;
}

export class TextCache {
  public entries: { [name: string]: TextCacheEntry };
  public current_x: number;
  public current_y: number;
  public current_height: number;
  public width: number;
  public height: number;
  public scaling: number;
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public updated: boolean;

  constructor(
    width: number = 1024,
    height: number = 1024,
    scaling: number = 2
  ) {
    this.entries = {};
    this.current_x = 0;
    this.current_y = 0;
    this.current_height = 0;
    this.width = width;
    this.height = height;
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = this.width * scaling;
    this.canvas.height = this.height * scaling;
    this.scaling = scaling;
    this.context.scale(scaling, scaling);
    this.context.fillStyle = "#000000";
  }
  // Add text of a given font to the cache.
  public addText(text: string, font: Font) {
    const hash = JSON.stringify(text) + font.hash();
    if (this.entries[hash]) {
      return this._layout2TextRect(this.entries[hash]);
    }
    font.setFont(this.context);

    const width = this.context.measureText(text).width;
    const height = font.fontSize;
    const bbox_width = Math.ceil(width + 4);
    const bbox_height = Math.ceil(height + 2);
    const x_offset = 2;
    const baseline_offset = height - 2;

    if (bbox_width > this.width) {
      throw new Error("E_FIT");
    }
    // If can't fit in current line, start a new line.
    if (this.current_x + bbox_width > this.width) {
      if (this.current_y + bbox_height > this.height) {
        throw new Error("E_FIT");
      }
      this.current_x = 0;
      this.current_y += this.current_height;
      this.current_height = bbox_height;
    }
    // Here it must fit.

    const layout = {
      x: this.current_x,
      y: this.current_y,
      x_offset,
      baseline_offset,
      bbox_width,
      bbox_height
    };

    this.current_x += bbox_width;
    this.current_height = Math.max(this.current_height, bbox_height);

    this.entries[hash] = layout;

    // Render.
    const draw_x = layout.x + x_offset;
    const draw_y = layout.y + baseline_offset;

    this.context.fillText(text, draw_x, draw_y);
    this.updated = true;
    return this._layout2TextRect(layout);
  }
  public _layout2TextRect(layout: TextCacheEntry) {
    return {
      x: layout.x * this.scaling,
      y: layout.y * this.scaling,
      w: layout.bbox_width * this.scaling,
      h: layout.bbox_height * this.scaling,
      scaling: this.scaling,
      x_offset: layout.x_offset * this.scaling,
      baseline_offset: layout.baseline_offset * this.scaling
    };
  }

  // Query the cache for a text and given font.
  public getTextRect(text: string, font: Font) {
    const hash = JSON.stringify(text) + font.hash();
    const layout = this.entries[hash];
    if (!layout) {
      return null;
    }
    return this._layout2TextRect(layout);
  }

  // Clear the cache.
  public clear() {
    this.entries = {};
    this.current_x = 0;
    this.current_y = 0;
    this.current_height = 0;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.updated = true;
  }
}
