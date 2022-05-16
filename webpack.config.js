const path = require("path");

module.exports = {
    mode: "production",
    target: "web",
    entry: "./examples/app.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "examples"),
        globalObject: "this",
    },
};
