'use strict';


/**
 * Read a specific public task
 *
 * id Integer 
 * returns task
 **/
exports.tasksPublicIdGET = function (taskId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "important": false,
      "owner": 6,
      "private": true,
      "projects": ["", ""],
      "description": "description",
      "id": 0,
      "completed": false,
      "deadline": "2000-01-23",
      "assignedTo": 1
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

