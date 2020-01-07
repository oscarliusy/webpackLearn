const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(process.cwd(),"dist"),
        filename:'js/[name].[chunkHash:6].js'
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                { loader: MiniCssExtractPlugin.loader },
                { loader: 'css-loader'  }
              ]
              },
            {
              test: /\.(png|jpg|gif)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                    name: 'images/[name].[ext]', 
                    publicPath:'/'
                  },
                },
              ],
            }, 
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                  plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
              }
            }
        ],
      },
    plugins: [
      new HtmlWebpackPlugin({  
        title: 'webpack Learning',
        template: 'public/index.html'
      }),
      new MiniCssExtractPlugin({
          filename:'css/[name].[chunkHash:6].css'
      }),
      new CopyPlugin([
        {
          from: path.resolve(process.cwd(),'src/static/'),
          to: 'static/',
        },
      ])
    ],
    devServer: {
        port: 3000,
        open:true
      }

}