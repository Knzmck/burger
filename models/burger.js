// Import orm.js into burger.js
var orm = require("../config/orm.js");
// The code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    // Display all burgers in the db.
    all: (cb) => {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // Add a new burger to the db.
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    // Change the devoured status to true.
    update: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    // Delete a burger from the db.
    delete: (condition, cb) => {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
}

// Export at the end of the burger.js file.
module.exports = burger;