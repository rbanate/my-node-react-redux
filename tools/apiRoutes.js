const   fs      = require('fs'),
        path    = require('path'),
        express = require('express');

const colors =  require('colors');

class ApiRoutes {

    constructor() {
        this.startFolder = null;
    }

    //Called once during initial server startup
    load(app, folderName) {

        if (!this.startFolder) this.startFolder = path.basename(folderName);

        fs.readdirSync(folderName).forEach((file) => {

            const fullName = path.join(folderName, file);
            const stat = fs.lstatSync(fullName);

            if (stat.isDirectory()) {
                //Recursively walk-through folders
                this.load(app, fullName);
            } else if (file.toLowerCase().indexOf('.js')) {
                //Grab path to JavaScript file and use it to construct the route
                let dirs = path.dirname(fullName).split(path.sep);


                let apiRoute = [];
                const apiIndex = dirs.indexOf('api');
                if(apiIndex) {
                  apiRoute = dirs.slice(apiIndex);
                }

                const router = express.Router();
                // Generate the route
                const baseRoute = '/' + apiRoute.join('/');
                // console.log('Created route: ' + baseRoute.green + ' for ' + fullName.red); /*es-lint no-console */

                // Load the JavaScript file ("controller") and pass the router to it
                const controllerClass = require(fullName);
                const controller = new controllerClass(router);
                // Associate the route with the router

                 app.use(baseRoute, router);
            }
        });
    }
}

module.exports = new ApiRoutes();
