const context = require('./dbContext');


context.initializeDb();
require('../server/models/Author');
//const repo = require('../server/repositories/courseRepository');
//context.loadModels();
//const context= new DbContext().loadModels();