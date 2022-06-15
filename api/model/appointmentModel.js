const con = require("../database/connection");

const appointment = {
  insert: function (appointmentInfo, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    } else {
      const values = [
        appointmentInfo.client_id,
        appointmentInfo.developer_id,
        appointmentInfo.venue,
        appointmentInfo.category,
        appointmentInfo.organization,
        appointmentInfo.reason,
        appointmentInfo.comments,
        appointmentInfo.date,
        appointmentInfo.time,
        appointmentInfo.reminder,
      ];

      const query =
        "INSERT INTO appointment (client_id, developer_id, venue, category, organization, reason, comments, date, time, reminder) VALUES(?)";

      con.query(query, [values], function (err) {
        if (err) {
          callback({ error: err });
        } else {
          callback({ message: "appointment successfully added." });
        }
      });
    }
  },

  getAllData: function (global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    } else {
      const query = "SELECT * FROM appointment";
      con.query(query, function (err, result) {
        if (err) {
          callback({ error: err });
        } else {
          callback(result);
        }
      });
    }
  },

  history: function (id, callback) {
    const query = "SELECT * FROM appointment WHERE client_id = ?";
    con.query(query, [id], function (err, result) {
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
    } else {
      const query = "SELECT * FROM appointment WHERE appointment_id = ?";
      con.query(query, [id], function (err, result) {
        if (err) {
          callback({ error: err });
        } else {
          callback(result);
        }
      });
    }
  },

  update: function (appointmentUpdateInfo, id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    } else {
      const query = `UPDATE appointment SET title = '${appointmentUpdateInfo.title}', 
                                    author = '${appointmentUpdateInfo.author}',
                                    category = '${appointmentUpdateInfo.category}', 
                                    shelf = '${appointmentUpdateInfo.shelf}', 
                                    quantity = ${appointmentUpdateInfo.quantity} 
                                    WHERE appointment_id = ${id}`;
      con.query(query, function (err) {
        if (err) {
          callback({ error: err });
        } else {
          callback({ message: "appointment successfully updated." });
        }
      });
    }
  },

  delete: function (id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }
    const query = "DELETE FROM appointment WHERE appointment_id = ?";

    con.query(query, [id], function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ message: "appointment data has been deleted." });
      }
    });
  },
};

module.exports = appointment;
