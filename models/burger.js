// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
    // The variables cols and vals are arrays.
  create: function(col, val, cb) {
    orm.create("burgers", col, val, function(res) {
      cb(res);
    });
  },
  update: function(objCol, condition, cb) {
    orm.update("burgers", objCol, condition, function(res) {
      cb(res);
    });
  },

};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;