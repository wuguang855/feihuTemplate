/**
 * 配置代理
 * 1. 用于dev环境 生成代理
 * 2. 用于pro环境 生成nginx配置文件
 */

module.exports = {
  '/vc': {
    target: 'http://106.53.92.252:8010/',
    // pathRewrite: { '^/api' : '' },
    changeOrigin: true
  }
};
