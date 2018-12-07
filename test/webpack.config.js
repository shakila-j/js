let path = require("path");

module.exports = {
    entry: "./app.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist")
        ,
        filename: "bundle.js"
    }
}; 