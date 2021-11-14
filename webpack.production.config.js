
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
  const common = require('./webpack.common.js');
  const TerserPlugin = require("terser-webpack-plugin");
  const webpack = require("webpack")
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports =merge(common, {

   
   
     mode:"production",

   output:{
filename:"[name].[contenthash].bundle.js",
path: path.resolve(__dirname, 'dist')
   },
        
         plugins: [
          new HtmlWebpackPlugin({
   
            template: './src/index.html',
            minify:{
              collapseInlineTagWhitespace:true,
              collapseWhitespace:true,
              preserveLineBreaks:true,
              minifyURLs:true,
              removeAttributeQuotes:true

            }
        }),
        new MiniCssExtractPlugin({
          filename:"[name].[hash:4].css"
        }),
          new webpack.ProgressPlugin(),
          new CleanWebpackPlugin(),
          ],
        

         optimization: {
       
          minimizer: [
            new TerserPlugin({
             
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ],
        },

    module:{
      rules:[
        {
          
          test: /\.s?css$/,
          use: [
        
           MiniCssExtractPlugin.loader,
           
          
            "css-loader",
          
        
            "sass-loader",
          ],
        },
        { 
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets:{
                        esmodules:true
                  }
                  
                  }
                ]
              ]
            
            }
          }
        },

      ]


    }

      })