import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

const models = require('../server/models/modelLoader');
const apiRouter = require('./apiRoutes');

const mongoose = require('mongoose');

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

const router = apiRouter.load(app, path.join(__dirname, '../server/api'));

// app.get('/api/test', function(req, res){
//   res.json({title:'test'});
// });

// import environmental variables from our variables.env file
require('dotenv').config({ path: path.join(__dirname, '../variables.env')});

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// Load models
// require('../src/models/Author');
// require('../src/models/Course');

models.load();

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
