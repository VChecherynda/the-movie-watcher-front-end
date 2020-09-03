const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

const babelOptions = options => {
  const opt = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: ["@babel/plugin-proposal-class-properties"]
  };

  if (options) {
    opt.presets.push(options);
  }

  return opt;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: ["@babel/polyfill", "./index"]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".png"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@validations": path.resolve(__dirname, "src/validations"),
      "@configs": path.resolve(__dirname, "src/configs"),
      "@views": path.resolve(__dirname, "src/views"),
      "@store": path.resolve(__dirname, "src/store"),
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "TITLE",
      template: "./index.html",
      minify: {
        collapseWhitespace: true
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist")
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions()
          },
          "eslint-loader"
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      },
      {
        test: /\.csv$/,
        use: ["xml-loader"]
      }
    ]
  }
};