import webpack from "webpack";
import path from "path";

export default {
  mode: "development",
  devtool: "eval-source-map",
  entry: [
    "webpack-hot-middleware/client?reload=true", // note that it reloads the page if hot module reloading fails.
    "./src/index" // Entry point
  ],
  target: "web",
  output: {
    path: `${__dirname}/dist`, // Note: Physical files are not created.
    publicPath: "/",
    filename: "bundle.js" // Same name as in index.html
  },
  devServer: {
    contentBase: "./src"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Tether: "tether"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        use: ["babel-loader"]
      },
      {
        test: /\.(sass|scss|css)$/,
        loader: "style-loader!css-loader!sass-loader",
        include: [/node_modules/],
        exclude: [/src/]
      },
      {
        test: /\.(sass|scss|css)/,
        use: ["style-loader?sourceMap", "css-loader", "sass-loader"],
        exclude: [/node_modules/],
        include: [/src/]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url-loader?prefix=font/&limit=5000"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=10000"
      }
    ]
  }
};
