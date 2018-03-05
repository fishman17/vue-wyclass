'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const appData = require('../data.json')
const userList = appData.userList


const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
const bodyParser = require('body-parser');  //express 解析body

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before(app) {
      app.use(bodyParser.json()); // for parsing application/json
      app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
      app.post('/api/login', (req, res) =>{
        let userData = req.body;
        let isExist = false;
        // console.log(user);
        setTimeout(() => {
          userList.map((user) =>{
            if(user.username == userData.username && user.password == userData.password){
              res.json({
                ...user
              });
              isExist = true;
              return;
            }
          })
          if(!isExist){
            res.json(
              "notFound"
            );
          }
        }, 1000);    //体现COM_LOADNG_STATE）
      });


      app.post('/api/findcoursebyid', function (req, res) {
        for(let index in appData.allclass){
          if(appData.allclass[index].id == req.body.id ){
            res.json(appData.allclass[index]);
            return;
          }
        }
      });


      app.get('/api/getrecommend', function (req, res) {
        res.json(appData.home[0])
      });


      app.get('/api/getclassic', function (req, res) {
        res.json(appData.home[1])
      });


      app.get('/api/getmajor', function (req, res) {
        res.json(appData.home[2])
      });


      app.get('/api/getexpert', function (req, res) {
        res.json(appData.home[3])
      });


      app.get('/api/getclassify', function (req, res) {
        res.json(appData.classes)
      });


      app.get('/api/getallclass', function (req, res) {
        res.json(appData.allclass)
      });


    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
