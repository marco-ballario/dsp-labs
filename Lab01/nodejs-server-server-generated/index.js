'use strict';

var path = require('path');
var http = require('http');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// add controllers
var publicController = require(path.join(__dirname, 'controllers/Public'));
var taskController = require(path.join(__dirname, 'controllers/Task'));
var usersController = require(path.join(__dirname, 'controllers/Users'));

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

//
// API definition
//

app.get('/tasks/public', publicController.tasksPublicGET);
app.get('/tasks/public/:taskId', taskController.tasksPublicIdGET);
app.get('/users', usersController.usersGET);

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

