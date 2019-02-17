let ts = require("typescript");
let path = require("path");
let fs = require("fs");

process.chdir("..");

let subprojects = [
    { path: "stardust-core", name: "stardust-core" },
    { path: "stardust-webgl", name: "stardust-webgl" },
    { path: "stardust-isotype", name: "stardust-isotype" },
    { path: "stardust-bundle", name: "stardust-bundle" }
];

Promise.all(subprojects.map((project) => {
    return require('dts-generator').default({
        name: project.name,
        project: project.path,
        indent: "    ",
        out: `stardust-bundle/${project.name}.d.ts`,
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        resolveModuleId: (params) => {
            return project.name + '/' + params.currentModuleId.replace(/\/index$/, '');
        },
        resolveModuleImport: (params) => {
            for (let p of subprojects) {
                if (p == project) continue;
                if (params.importedModuleId == p.name) {
                    return p.name + "/" + p.name;
                }
            }
        }
    });
})).then(() => {
    let combined = "";
    for (let project of subprojects) {
        let contents = fs.readFileSync(`stardust-bundle/${project.name}.d.ts`, "utf-8");
        fs.unlinkSync(`stardust-bundle/${project.name}.d.ts`);
        combined += contents;
    }
    combined += `declare module 'Stardust' {\n`;
    combined += `    import main = require('stardust-bundle/stardust');\n`;
    combined += `    export = main;\n`;
    combined += `}\n`;
    fs.writeFileSync("stardust-bundle/dist/stardust-bundle.d.ts", combined, "utf-8");
});