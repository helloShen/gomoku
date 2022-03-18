const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    mode: 'development', 
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Gomoku',
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         { from: './src/assets', to: 'assets' },
        //     ],
        // }),
    ],
    module: {
        rules: [
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
            type: 'asset/resource',
          },
        ],
    },
    output: {
        filename: 'js/main.js',
        assetModuleFilename: 'assets/[hash][ext]',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};