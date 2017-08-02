const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config.api.dev');
const open = require('open');

const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');

const expressValidator = require('express-validator');

const apiRouter = require('./apiRoutes');

const helpers = require('../server/helpers');
const errorHandlers = require('../server/handlers/errorHandlers');


const context = require('./dbContext');

const port = 3001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

context.initializeDb();
  
const router = apiRouter.load(app, path.join(__dirname, '../server/api'));

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Running api on http://localhost:${port}`.green);
        open(`http://localhost:${port}`);
  }
});
