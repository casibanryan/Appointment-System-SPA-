const con = require("../database/connection");

const venue = {
  insert: function (venueInfo, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }

    const values = [venueInfo.location];

    const query = "INSERT INTO venue (location) VALUES(?)";

    con.query(query, [values], function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ message: "venue successfully added." });
      }
    });
  },

  getAllData: function (global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }

    const query = "SELECT * FROM venue";

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

    const query = "SELECT * FROM venue WHERE venue_id = ?";

    con.query(query, [id], function (err, result) {
      if (err) {
        callback({ error: err });
      } else {
        callback(result);
      }
    });
  },

  update: function (venueUpdateInfo, id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }

    const query = `UPDATE venue SET location = '${venueUpdateInfo.location}', 
                                    WHERE venue_id = ${id}`;
    con.query(query, function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ message: "venue successfully updated." });
      }
    });
  },

  delete: function (id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }

    const query = "DELETE FROM venue WHERE venue_id = ?";

    con.query(query, [id], function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ message: "venue data has been deleted." });
      }
    });
  },
};

module.exports = venue;
