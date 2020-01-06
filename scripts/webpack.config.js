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
              }
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