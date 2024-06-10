module.exports = {
  "output": {
    "filename": "index.pack.js"
  },
  "entry": {
    "index": "./index.ts"
  },
  "resolve": {
    "extensions": [
      "index.ts",
      "webpack.config.js",
      "package.json"
    ]
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "ts-loader"
        },
        "exclude": /node_modules/,
        "test": /\.ts$/
      }
    ]
  }
};