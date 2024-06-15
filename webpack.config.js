const path = require ('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['@babel/env', '@babel/react']}
                }
            
            },
            {
                test: /\s?css/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist') 
        },
        compress: true,
        port: 9000,
        hot: true,
        proxy: [
            {
                context: ['/books/add'],
                target: 'http://localhost:5000'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
    ]
}