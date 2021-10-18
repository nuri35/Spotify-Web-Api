
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { merge } = require('webpack-merge');
  const common = require('./webpack.common.js');

const path = require("path");
module.exports =merge(common, {
   
   
      mode:"development",
      output:{
        filename:"[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
           },
                
   
         plugins: [
          
             new HtmlWebpackPlugin({
            
             template: './src/index.html' //kendı html yapımı korur
         })],
        
         module:{
          rules:[
            {
              test: /\.s?css$/,
              use: [
            
              "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },

       
    
          ]
    
    
        },

      })