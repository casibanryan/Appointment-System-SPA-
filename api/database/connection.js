const mysql = require("mysql");

const config = {
  server: "localhost",
  database: "appointment_db",
  user: "root",
  password: "",
};

const connection = mysql.createConnection(config);

module.exports = connection;
