const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(process.cwd(),"dist"),
        filename:'static/js/[name].[chunkHash:6].js'
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
            // {
            //   test: /\.(png|jpe?g|gif)$/i,
            //   use: [
            //     {
            //       loader: 'file-loader',
            //       options: {
            //         name: 'static/images/[name].[ext]',                  
            //         publicPath:'/'
            //       },
            //     },
            //   ],
            // },
            {
              test: /\.(png|jpg|gif)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                    name: 'static/images/[name].[ext]', 
                    publicPath:'/'
                  },
                },
              ],
            }, 
        ],
      },
    plugins: [
      new HtmlWebpackPlugin({  
        title: 'webpack Learning',
        template: 'public/index.html'
      }),
      new MiniCssExtractPlugin({
          filename:'static/css/[name].[chunkHash:6].css'
      })
    ],
    devServer: {
        port: 3000,
        open:true
      }

}