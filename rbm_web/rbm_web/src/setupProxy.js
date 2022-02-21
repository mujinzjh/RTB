/*
 * @Author: mujin
 * @Date: 2022-02-21 11:49:38
 * @LastEditTime: 2022-02-21 11:49:39
 * @Description: 
 */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:8095',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': '/',
            },
        })
    );
};

