import * as path from "path";
import * as fs from "fs";
import * as mustache from "mustache";
import * as marked from "marked";

function fileExists(path: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    fs.exists(path, exists => {
      resolve(exists);
    });
  });
}

function fileRead(path: string) {
  return new Promise<Buffer>((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function dirRead(path: string): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    fs.readdir(path, "utf8", (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

export interface ExampleMetadata {
  path: string;
  name: string;
  description: string;
  excludes?: string[];
}

export class ExamplesManager {
  public rootDir: string;

  constructor(rootDir: string) {
    this.rootDir = rootDir;
  }

  public async getMetadataFromName(name: string): Promise<ExampleMetadata> {
    const examplePath = path.join(this.rootDir, name);
    const configPath = path.join(examplePath, "metadata.json");
    const exists = await fileExists(configPath);
    if (exists) {
      const data = await fileRead(configPath);
      const metadata = JSON.parse(data.toString("utf8")) as ExampleMetadata;
      metadata.name = name;
      metadata.path = examplePath;
      return metadata;
    } else {
      return null;
    }
  }

  public async listExamples(): Promise<ExampleMetadata[]> {
    const files = await dirRead(this.rootDir);
    const metadatas = await Promise.all(
      files.map(file => this.getMetadataFromName(file))
    );
    return metadatas.filter(x => x != null);
  }

  /** List the actual files under the example directory */
  public async listExampleFiles(name: string): Promise<string[]> {
    const metadata = await this.getMetadataFromName(name);
    if (!metadata) {
      throw new Error("example not found");
    }
    let files = await dirRead(metadata.path);
    files = files.filter(f => f != "metadata.json");
    return files;
  }

  /** Create an index.html for an example */
  public async renderExample(name: string, template: string): Promise<string> {
    const metadata = await this.getMetadataFromName(name);
    if (!metadata) {
      throw new Error("example not found");
    }
    const readme = await this.getExampleFileText(name, "README.md", metadata);
    const content = readme ? marked.parse(readme) : null;
    const filenames = await this.listExampleFiles(name);
    const files: Array<{
      filename: string;
      language: string;
      code: string;
      _order: number;
    }> = [];
    const acceptableExtensions: { [name: string]: string } = {
      ".js": "javascript",
      ".html": "html"
    };
    for (const filename of filenames) {
      if (metadata.excludes && metadata.excludes.indexOf(filename) >= 0) {
        continue;
      }
      const extension = path.extname(filename).toLowerCase();
      if (acceptableExtensions.hasOwnProperty(extension)) {
        const file = {
          filename,
          language: acceptableExtensions[extension],
          code: await this.getExampleFileText(name, filename, metadata),
          _order: 1
        };
        if (filename == "index.html") {
          file._order = 0;
        }
        files.push(file);
      }
    }
    files.sort((a, b) => {
      if (a._order != b._order) {
        return a._order - b._order;
      }
      return a.filename < b.filename ? -1 : 1;
    });
    return mustache.render(template, {
      content,
      description: metadata.description,
      files
    });
  }

  // Get a content file from an example
  public async getExampleFileText(
    name: string,
    subpath: string,
    metadata?: ExampleMetadata
  ): Promise<string> {
    const data = await this.getExampleFile(name, subpath, metadata);
    if (data == null) {
      return null;
    }
    return data.toString("utf8");
  }
  public async getExampleFile(
    name: string,
    subpath: string,
    metadata?: ExampleMetadata
  ): Promise<Buffer> {
    if (!metadata) {
      metadata = await this.getMetadataFromName(name);
    }
    if (!metadata) {
      throw new Error("example not found");
    }
    const filepath = path.join(metadata.path, subpath);
    if (await fileExists(filepath)) {
      return await fileRead(filepath);
    } else {
      return null;
    }
  }
  public async getExampleFilePath(
    name: string,
    subpath: string,
    metadata?: ExampleMetadata
  ): Promise<string> {
    if (!metadata) {
      metadata = await this.getMetadataFromName(name);
    }
    if (!metadata) {
      throw new Error("example not found");
    }
    const filepath = path.join(metadata.path, subpath);
    return filepath;
  }
}
