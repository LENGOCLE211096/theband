const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const devMode = true;
module.exports = {
  entry: [
    "./src/js/index.js",
    "./src/scss/style.scss", // file nguồn  CSS
  ],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    library: "mylib",
    libraryTarget: "var",
  },
  mode: devMode ? "development" : "production",
  module: {
    rules: [
      {
        // Thiết lập build scss
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // Interprets CSS
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    // Xuất kết quả với CSS - sau khi qua loader MiniCssExtractPlugin.loader
    new MiniCssExtractPlugin({
      filename: devMode ? "css/style.css" : "css/style.min.css",
    }),
  ],
};
