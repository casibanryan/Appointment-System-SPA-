const con = require("../database/connection");

const category = {
  insert: function (categoryInfo, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }
    const values = [categoryInfo.category_name];

    const query = "INSERT INTO category (category_name) VALUES(?)";

    con.query(query, [values], function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ message: "category successfully added." });
      }
    });
  },

  getAllData: function (global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }
    const query = "SELECT * FROM category";

    con.query(query, function (err, result) {
      if (err) {
        callback({ error: err });
      } else {
        callback(result);
      }
    });
  },

  getDataByID: function (id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }
    const query = "SELECT * FROM category WHERE category_id = ?";

    con.query(query, [id], function (err, result) {
      if (err) {
        callback({ error: err });
      } else {
        callback(result);
      }
    });
  },

  update: function (categoryUpdateInfo, id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }
    const query = `UPDATE category SET category_name = '${categoryUpdateInfo.category_name}', 
                                    WHERE category_id = ${id}`;
    con.query(query, function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ message: "category successfully updated." });
      }
    });
  },

  delete: function (id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }
    const query = "DELETE FROM category WHERE category_id = ?";

    con.query(query, [id], function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ message: "category data has been deleted." });
      }
    });
  },
};

module.exports = category;
