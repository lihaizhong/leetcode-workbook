import path from "node:path";
import webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { globSync } from "tinyglobby";
import fs from "fs-extra";

const __root = path.resolve(__dirname, ".");

function findAllEntries() {
  const entries = globSync("src/pages/**/index.ts", {
    cwd: __root,
    absolute: true,
    onlyFiles: true,
  });

  const inputEntries = entries.reduce(
    (entries: Record<string, string>, entry: string) => {
      // pages/index/index.html => pages/index
      const dirname = path.dirname(entry);
      // pages/index => index
      const basename = path.basename(dirname);

      entries[basename] = entry;

      return entries;
    },
    {}
  );

  // console.log("inputEntries", inputEntries);

  const htmlPlugins = Object.entries(inputEntries).map(
    ([filename, filepath]) => {
      const dirname = path.dirname(filepath);
      const profile = fs.readJSONSync(path.resolve(dirname, `index.json`));

      return new HtmlWebpackPlugin({
        title: profile.title || "WebGL Learn",
        template: path.resolve(__dirname, "index.html"),
        filename: `${filename}/index.html`,
        chunks: [filename],
      });
    }
  );

  return {
    inputEntries,
    htmlPlugins,
  };
}

const pages = findAllEntries();

/**
 * webpack 配置
 * https://webpack.docschina.org/
 */
export default {
  mode: "development",

  entry: pages.inputEntries,

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|vert|frag)$/,
        use: ["raw-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(bmp|svg|png|jpe?g|gif|webp|tiff)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 小于 10kb 的图片会被 Base64 处理
            maxSize: 10 * 1024,
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
    ],
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },

  plugins: [...pages.htmlPlugins],
} satisfies webpack.Configuration;
