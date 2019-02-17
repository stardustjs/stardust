// Watch changes in major Stardust modules

let multirun = require("multirun");

let COMMANDS = {
  watch: {
    core: "cd packages/stardust-core && yarn run watch",
    webgl: "cd packages/stardust-webgl && yarn run watch",
    bundle: "cd packages/stardust-bundle && yarn run watch",
    examples: "cd packages/stardust-examples && yarn start"
  },
  "build:stardust-core": "cd packages/stardust-core && yarn run build",
  "build:stardust-webgl": "cd packages/stardust-webgl && yarn run build",
  "build:stardust-isotype": "cd packages/stardust-isotype && yarn run build",
  "build:stardust-bundle": "cd packages/stardust-bundle && yarn run build",
  "build:stardust-examples": "cd packages/stardust-examples && yarn run build && yarn run deploy",
  "test:stardust-core": "cd packages/stardust-core && yarn run test",
  "test:stardust-webgl": "cd packages/stardust-webgl && yarn run test",
  "test:stardust-isotype": "cd packages/stardust-isotype && yarn run test",
  "test:stardust-bundle": "cd packages/stardust-bundle && yarn run test",
  "test:stardust-examples": "cd packages/stardust-examples && yarn run test"
};

COMMANDS.build = [
  "build:stardust-core",
  "build:stardust-webgl",
  "build:stardust-isotype",
  "build:stardust-bundle",
  "build:stardust-examples"
].map(x => COMMANDS[x]);

COMMANDS.test = [
  COMMANDS.build,
  ...[
    "test:stardust-core",
    "test:stardust-webgl",
    "test:stardust-isotype",
    "test:stardust-bundle",
    "test:stardust-examples"
  ].map(x => COMMANDS[x])
];

let sequence = process.argv.slice(2);
if (sequence.length == 0) {
  multirun.run(COMMANDS.build, "Build");
} else {
  multirun.sequence(sequence.map(x => COMMANDS[x]));
}
