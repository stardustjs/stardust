let path = require("path");
let fs = require("fs");

let libraries = [
  "stardust-core",
  "stardust-webgl",
  "stardust-isotype",
  "stardust-bundle"
];

for (let item of libraries) {
  let package_json = JSON.parse(
    fs.readFileSync(path.join("packages", item, "package.json"), "utf-8")
  );
  let version = package_json.version;
  let module_version = "not specified";
  try {
    let module = require(item);
    if (module.version) {
      module_version = version;
    }
  } catch (e) {}
  console.log(
    `${item}: package.json = ${version}, code report = ${module_version}`
  );
}
