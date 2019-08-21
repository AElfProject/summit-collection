/**
 * @file 开发配置
 * @author atom-yang
 */

/* eslint-env node */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const http = require('http');
const mockMapper = require('./mock.json');
const { OUTPUT_PATH } = require('./util');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const minimist = require('minimist');
const proxy = require('./proxy.json');
const { isObject } = require('lodash');

const defaultTargetOptions = {
  // dev-mode, 开发方式，local - 本地mock开发，test - 联调开发
  string: ['dev-mode'],
  default: {
    'dev-mode': 'local'
  }
};
const args = minimist(process.argv.slice(2), defaultTargetOptions);
const devMode = args['dev-mode'];

const proxyServer =
  devMode === 'local'
    ? {}
    : proxy.map(v => {
        return {
          context: v.context,
          target: v.target,
          changeOrigin: true,
          secure: false,
          proxyTimeout: 8000,
          agent: http.globalAgent,
          onProxyReq(proxyReq) {
            const headers = v.headers;
            Object.keys(headers).forEach(v => {
              proxyReq.setHeader(v, headers[v]);
            });
          }
        };
      });

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    disableHostCheck: true,
    contentBase: OUTPUT_PATH,
    useLocalIp: true, // 将以内网IP为http地址信息打开浏览器, 不用敲 cmd ipinfo 去查内网IP了
    host: '0.0.0.0', // 允许本机以外的设备访问
    port: 9527,
    compress: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: proxyServer,
    open: true,
    openPage: 'index.html',
    before(app) {
      app.all('*', (req, res, next) => {
        let mockFile = mockMapper[req.path];
        if (isObject(mockFile)) {
          mockFile = mockFile[req.query.path];
        }
        if (mockFile && devMode === 'local') {
          res.sendFile(
            path.resolve(__dirname, mockFile),
            {
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            },
            err => {
              err && console.error(err);
            }
          );
        } else {
          next();
        }
      });
    }
  }
};

module.exports = merge(baseConfig, devConfig);
