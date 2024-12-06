const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "menu",
      filename: "remoteEntry.js",
      exposes: {
        "./Menu": "./src/components/Menu",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^18.0.0" },
        "react-dom": { singleton: true, eager: true, requiredVersion: "^18.0.0" },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
