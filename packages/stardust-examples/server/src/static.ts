import { ExamplesManager } from "./examples";
import * as Templates from "./templates";
import * as path from "path";
import * as rimraf from "rimraf";
import * as mkdirp from "mkdirp";
import * as fs from "fs";
import { spawnSync } from "child_process";

const manager = new ExamplesManager("./examples");

async function renderExamples(destination: string) {
  const examples = await manager.listExamples();
  for (const example of examples) {
    const files = await manager.listExampleFiles(example.name);
    const outdir = path.join(destination, example.name);
    await new Promise((resolve, reject) => {
      rimraf(outdir, error => {
        resolve();
      });
    });
    mkdirp.sync(outdir);
    for (let f of files) {
      if (f == "README.md") {
        continue;
      }
      const contents = await manager.getExampleFile(example.name, f, example);
      console.log(example.name, f, contents.length);
      if (f == "index.html") {
        f = "content.html";
      }
      if (f != "preview_small.png") {
        fs.writeFileSync(path.join(outdir, f), contents);
      }
      if (
        f.toLowerCase() == "preview.png" ||
        f.toLowerCase() == "preview.jpg"
      ) {
        // Generate thumbnail
        spawnSync("convert", [
          await manager.getExampleFilePath(example.name, f, example),
          "-resize",
          "480x480",
          "-define",
          "png:exclude-chunk=time,date",
          path.join(outdir, "preview_small.png")
        ]);
      }
    }
    const index = await manager.renderExample(
      example.name,
      Templates.jekyllTemplate
    );
    fs.writeFileSync(
      path.join(outdir, "index.html"),
      Buffer.from(index, "utf8")
    );
  }
}

renderExamples("../../website/examples");
