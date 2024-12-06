const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  output: {
    publicPath: "http://localhost:3003/", // Substitua pela porta do dashboard
  },
  devServer: {
    port: 3003,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "user",
      remotes: {
        menu: "menu@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
      },
    }),
  ],
};
