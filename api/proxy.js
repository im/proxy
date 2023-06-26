// 该服务为 vercel serve跨域处理
const {
    createProxyMiddleware
  } = require('http-proxy-middleware')
  
  module.exports = (req, res) => {
    let target = ''
  
    // 代理目标地址
    if (req.url.indexOf('/bbdc') > -1) {
      target = `https://langeasy.com.cn`
    }
    if (req.url.indexOf('/dict') > -1) {
        target = `https://www.dictionaryapi.com`
      }
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        '^/proxy/bbdc': '/loadLexisList.action',
        '^/proxy/dict': '/api/v3/references/collegiate/json/'
      }
    })(req, res)
  }