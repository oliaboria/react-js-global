const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin()
];