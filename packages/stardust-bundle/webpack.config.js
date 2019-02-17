module.exports = [
  {
    entry: {
      stardust: "./dist/stardust.js"
    },
    output: {
      filename: "[name].bundle.min.js",
      path: __dirname + "/dist",
      library: "Stardust",
      libraryTarget: "umd"
    }
  },
  {
    entry: {
      stardust: "./dist/stardust.js"
    },
    optimization: {
      minimize: false
    },
    output: {
      filename: "[name].bundle.js",
      path: __dirname + "/dist",
      library: "Stardust",
      libraryTarget: "umd"
    }
  }
];
