const con = require("../database/connection");

const client = {
  insert: function (clientInfo, callback) {
    const query = "INSERT INTO client set ?";

    con.query(query, clientInfo, function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ message: "client successfully added." });
      }
    });
  },

  getAllData: function (global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }

    const query = "SELECT * FROM client";

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

    const query = "SELECT * FROM client WHERE client_id = ?";

    con.query(query, [id], function (err, result) {
      if (err) {
        callback({ error: err });
      } else {
        callback(result);
      }
    });
  },

  update: function (clientUpdateInfo, id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }

    const query = `UPDATE client SET name = '${clientUpdateInfo.name}', 
                                    birthdate = '${clientUpdateInfo.birthdate}',
                                    gender = '${clientUpdateInfo.gender}', 
                                    address = '${clientUpdateInfo.address}', 
                                    password = ${clientUpdateInfo.password} ,
                                     province = ${clientUpdateInfo.province},
                                     city = ${clientUpdateInfo.city}, 
                                     zip_code = ${clientUpdateInfo.zip_code}, 
                                     email = ${clientUpdateInfo.email},  
                                     home_phone = ${clientUpdateInfo.home_phone},
                                    mobile_phone = ${clientUpdateInfo.mobile_phone}, 
                                    occupation = ${clientUpdateInfo.occupation},  
                                    current_employment = ${clientUpdateInfo.current_employment},  
                                    referred_by = ${clientUpdateInfo.referred_by}
                     
                                    WHERE client_id = ${id}`;
    con.query(query, function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ message: "client successfully updated." });
      }
    });
  },

  delete: function (id, global, callback) {
    if (global.token.key === "" || global.token.user === "") {
      return callback({ message: "unauthenticated" });
    }

    const query = "DELETE FROM client WHERE client_id = ?";

    con.query(query, [id], function (err) {
      if (err) {
        callback({ error: err });
      } else {
        callback({ success: "client data has been deleted." });
      }
    });
  },
};

module.exports = client;
