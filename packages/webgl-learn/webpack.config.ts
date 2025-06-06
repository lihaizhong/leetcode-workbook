import path from "path";
import webpack from "webpack";
import "webpack-dev-server";

function getEntries() {
  const entries: Record<string, string> = {};

  

  return entries;
}

const config: webpack.Configuration = {
  mode: "development",
  entry: getEntries(),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
};

export default config;
