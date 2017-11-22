import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import { App, Wrapper } from '../app';
import { Footer } from '../src/common/components/footer/footer';
import { Provider } from 'react-redux';
import { configureStore } from '../src/store/configureStore';

const app = express();

import request from 'request';

import { StaticRouter } from 'react-router-dom';

const router = express.Router();

app.use(express.static(path.join(__dirname, 'static')));

router.get('*', (req, res) => {
  let context = {};
  const store = configureStore();
  const content = renderToString(
    <Provider store={ store }>
        <Wrapper>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
          <Footer />
        </Wrapper>
    </Provider>
  );
  res.render('index', {title: 'Express', data: false, content });
});

module.exports = router;


// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});