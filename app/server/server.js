import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import { App } from '../app';

const app = express();
const config = require('../../webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});