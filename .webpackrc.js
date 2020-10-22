/**
 * roadhog 配置文件
 * 更多配置信息，详见 https://github.com/sorrycc/roadhog/blob/master/README_zh-cn.md#%E9%85%8D%E7%BD%AE
 */

import path from "path";
import proxy from "./proxy.config";
console.log("proxy====>", proxy);
export default {
  entry: "src/index.js",
  publicPath: "/",
  proxy,
  html: {
    template: "src/index.ejs",
    title: "飞虎互动",
  },
  alias: {
    '@': path.resolve(__dirname, "src/"),
    '@modules': path.resolve(__dirname, "node_modules/"),
  },
  es5ImcompatibleVersions: true,
};
