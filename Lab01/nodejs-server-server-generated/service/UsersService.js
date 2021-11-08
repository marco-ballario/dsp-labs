'use strict';


/**
 * Read all the users
 *
 * returns user
 **/
exports.usersGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "password": "password",
      "name": "name",
      "id": 0,
      "email": ""
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

