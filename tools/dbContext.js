const mongoose = require('mongoose');
const colors = require('colors');
const path  = require('path');
//const models = require('../server/models/modelLoader');

class DbContext {

    initializeDb()
    {
        
        // import environmental variables from our variables.env file
        require('dotenv').config({ path: path.join(__dirname, '../variables.env')});

        // Connect to our Database and handle an bad connections
        mongoose.connect(process.env.DATABASE);
        mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
        mongoose.connection.on('error', (err) => {
            console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`.red);
            
        });
        mongoose.connection.once('open', () => {
            console.log('We have connected to mongodb'.green);
            this.loadModels();
        });
    
    }

    loadModels(){
        console.log('Loading models...'.green);
        // Load models
        require('../server/models/Author');
        require('../server/models/Course');
    }
}

module.exports =  new DbContext();