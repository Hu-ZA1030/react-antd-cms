const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  // 登入的代理
    app.use(
      '/users',
      createProxyMiddleware({
        target: 'http://localhost:3000',
        changeOrigin: true,
      })
    ),
    // 商品列表的代理
    app.use(
      '/good',
      createProxyMiddleware({
        target: 'http://localhost:3000',
        changeOrigin: true,
      })
    ),
    // 图片上传
    app.use(
      '/upload',
      createProxyMiddleware({
        target: 'http://localhost:3000',
        changeOrigin: true,
      })
    ),
    // 商品品类
    app.use(
      '/cate',
      createProxyMiddleware({
        target: 'http://localhost:3000',
        changeOrigin: true,
      })
    ),
    // cnode 的代理
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'https://cnodejs.org',
        changeOrigin: true,
      })
    )
    
  }

