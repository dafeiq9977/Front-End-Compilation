const path = require("path");
module.exports = {
  // 入口(需要写相对路径)
  entry: "./src/main.js",
  // 输出(需要写绝对路径)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  // 加载器
  module: {
    rules: [
      // 这里写loader的配置
      // 去官方文档找对应的loader,如果官方文档找不到,去社区github查询
    ],
  },
  // 插件
  plugins: [],
  // 模式
  mode: "development",
};
