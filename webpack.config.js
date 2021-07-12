const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const { microAppConfig } = require("./micro-app-config");

module.exports = webpackConfigEnv => {
  return {
    // modify the webpack config however you'd like to by adding to this object
    entry: path.resolve(process.cwd(), `src/${microAppConfig.microAppFileName}.tsx`),
    output: {
      filename: `${microAppConfig.microAppFileName}.js`,
      libraryTarget: "system",
      path: path.resolve(process.cwd(), "dist"),
      jsonpFunction: `webpackJsonp_${microAppConfig.microAppFileName}`,
      publicPath: webpackConfigEnv.publicUrl,
    },
    module: {
      rules: [
        {
          parser: {
            system: false,
          },
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack", "url-loader"],
        },
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: ["babel-loader", "eslint-loader"],
        },
        {
          test: /\.css$/i,
          include: [/node_modules/, /src/],
          use: ["style-loader", "css-loader"],
        },
        {
          loader: require.resolve("file-loader"),
          // Exclude `js` files to keep "css" loader working as it injects
          // its runtime that would otherwise be processed through "file" loader.
          // Also exclude `html` and `json` extensions so they get processed
          // by webpacks internal loaders.
          exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.css$/],
          options: {
            name: "static/media/[name].[hash:8].[ext]",
          },
        },
      ],
    },
    devtool: "sourcemap",
    devServer: {
      compress: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      disableHostCheck: true,
    },
    externals: microAppConfig.externalPackages,
    optimization:
      webpackConfigEnv.mode === "production"
        ? {
            minimize: true,
            minimizer: [
              new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                extractComments: false,
                terserOptions: { compress: { drop_console: true }, output: { comments: false } },
              }),
            ],
          }
        : {},
    plugins: [
      new CleanWebpackPlugin(),
      new UnusedFilesWebpackPlugin({
        globOptions: {
          cwd: path.resolve(process.cwd(), "src"),
          ignore: [
            "**/*.test.*",
            "**/*.spec.*",
            "**/*.*.snap",
            "**/test-setup.*",
            "**/*.stories.*",
            "**/*.d.ts",
            "**/model.ts",
            "**/models/**",
          ],
        },
      }),
    ],
    resolve: {
      extensions: [".js", ".mjs", ".jsx", ".wasm", ".json", ".ts", ".tsx"],
      plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    },
  };
};
