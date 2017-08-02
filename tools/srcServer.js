import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');

const apiRouter = require('./apiRoutes');
const context = require('./dbContext');

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

context.initializeDb();
  
const router = apiRouter.load(app, path.join(__dirname, '../server/api'));
 

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
