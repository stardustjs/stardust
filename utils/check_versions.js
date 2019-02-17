let path = require("path");
let fs = require("fs");

let libraries = [
  "stardust-core",
  "stardust-webgl",
  "stardust-isotype",
  "stardust-bundle"
];

let has_error = false;

for (let item of libraries) {
  let package_json = JSON.parse(
    fs.readFileSync(path.join("packages", item, "package.json"), "utf-8")
  );
  let version = package_json.version;
  let module_version = "not specified";
  try {
    let module = require(item);
    if (module.version) {
      module_version = module.version;
    }
  } catch (e) {}

  if (version != module_version) {
    console.log(
      `Error: ${item}: package.json = ${version}, module = ${module_version}`
    );
    has_error = true;
  } else {
    console.log(
      `${item}: package.json = ${version}, module = ${module_version}`
    );
  }
}

if (has_error) {
  console.log("Error: inconsistent version!");
  process.exit(-1);
}
