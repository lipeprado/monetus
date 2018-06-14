import express from "express";
import webpack from "webpack";
import chalk from "chalk";
import path from "path";
import open from "open";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 4200;

const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.greenBright(`Server is running on port ${port}`));
    open(`http://localhost:${port}`);
  }
});
