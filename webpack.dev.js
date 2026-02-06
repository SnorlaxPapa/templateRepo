// webpack.config.js
import {merge} from "webpack-merge";
import common from "./webpack.common.js";



export default merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    open: true,
    watchFiles: ["./src/template.html"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});