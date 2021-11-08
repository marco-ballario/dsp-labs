'use strict';

var utils = require('../utils/writer.js');
var Task = require('../service/TaskService');

module.exports.tasksPublicIdGET = function tasksPublicIdGET (req, res, next, id) {
  Task.tasksPublicIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
