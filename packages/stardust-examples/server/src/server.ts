import * as express from "express";
import * as mustache from "mustache";
import * as path from "path";

import { ExamplesManager } from "./examples";
import * as Templates from "./templates";

const manager = new ExamplesManager("./examples");

const app = express();

// Override Stardust library path
app.use(
  "/common/stardust",
  express.static("../stardust-bundle/dist", { etag: false })
);

// Server common stuff
app.use("/common", express.static("./examples/common", { etag: false }));

// Get file from example
async function processExample(
  name: string,
  subpath: string
): Promise<[string, Buffer]> {
  if (subpath == "index.html") {
    const content = await manager.renderExample(
      name,
      Templates.standaloneTemplate
    );
    return ["text/html", new Buffer(content, "utf8")];
  }
  if (subpath == "content.html") {
    subpath = "index.html";
  }
  const content = await manager.getExampleFile(name, subpath);
  const extension = path.extname(subpath).toLowerCase();
  const extensionMap: { [name: string]: string } = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".json": "application/x-json",
    ".css": "text/css",
    ".png": "image/png",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg"
  };
  return [extensionMap[extension] || "text/plain", content];
}

app.get("/:example", (req, res) => {
  processExample(req.params.example, "index.html")
    .then(([contentType, content]) => {
      res.contentType(contentType);
      res.end(content, "binary");
    })
    .catch(err => {
      console.log(err);
      res.send("internal server error");
    });
});

app.get("/:example/:filename", (req, res) => {
  processExample(req.params.example, req.params.filename)
    .then(([contentType, content]) => {
      res.contentType(contentType);
      res.end(content, "binary");
    })
    .catch(err => {
      console.log(err);
      res.send("internal server error");
    });
});

app.get("/", (req, res) => {
  manager.listExamples().then(x => {
    res.send(mustache.render(Templates.indexTemplate, { examples: x }));
  });
});

app.listen(4000, "0.0.0.0");
