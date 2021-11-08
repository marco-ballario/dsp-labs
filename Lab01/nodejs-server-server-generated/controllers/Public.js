'use strict';

var utils = require('../utils/writer.js');
var Public = require('../service/PublicService');

module.exports.tasksPublicGET = function tasksPublicGET (req, res, next) {
  Public.tasksPublicGET(req.params.taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
