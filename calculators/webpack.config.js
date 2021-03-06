const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "babel-loader",
      // },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // debugging in native js tool
  devtool: "cheap-module-eval-source-map",
  // webserver / optional, webpack just compile if not use
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  // Use as default webpack don't look for tsx on import xxx from
  resolve: {
    extensions: [".tsx", ".js", ".json"],
  },
};
