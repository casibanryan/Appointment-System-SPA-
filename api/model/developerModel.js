const con = require("../database/connection");

const developer = {
  insert: function (req, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    } else if (!req.file) {
      console.log("No file uploaded!");
    } else {
      const name = req.body.name;
      const position = req.body.position;
      const img_src = req.file.filename;
      const email = req.body.email;
      const home_phone = req.body.home_phone;
      const mobile_phone = req.body.mobile_phone;
      const insert_data = `INSERT INTO developer (name, position, img_src, email, home_phone, mobile_phone) VALUES ('${name}', '${position}', '${img_src}', '${email}', '${home_phone}', '${mobile_phone}')`;

      con.query(insert_data, (err, result) => {
        if (err) {
          callback({ error: err });
        } else {
          callback({ success: "developer successfully added." });
        }
      });
    }
  },

  getAllData: function (global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }

    const query = "SELECT * FROM developer";

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

    const query = "SELECT * FROM developer WHERE developer_id = ?";

    con.query(query, [id], function (err, result) {
      if (err) {
        callback({ error: err });
      } else {
        callback(result);
      }
    });
  },

  update: function (developerUpdateInfo, id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }

    const name = developerUpdateInfo.name;
    const position = developerUpdateInfo.position;
    const email = developerUpdateInfo.email;
    const home_phone = developerUpdateInfo.home_phone;
    const mobile_phone = developerUpdateInfo.mobile_phone;

    const sql = `UPDATE developer SET name = '${name}', position = '${position}', email = '${email}', home_phone = '${home_phone}', mobile_phone = '${mobile_phone}' WHERE developer_id = '${id}'`;
    con.query(sql, function (err, result) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ success: "developer successfully updated." });
      }
    });
  },

  delete: function (id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }

    const query = "DELETE FROM developer WHERE developer_id = ?";

    con.query(query, [id], function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ success: "developer data has been deleted." });
      }
    });
  },
};

module.exports = developer;
