const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const fileName = "./token.json";
const file = require(fileName);
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setting the token to global variable
app.locals.token = file;

// generate random string
const generate_randomString = (len) => {
  return Math.random()
    .toString(36)
    .substring(2, len + 2);
};

// render the user token
// to identify if the user is admin or client
app.get("/", (req, res) => {
  res.json(req.app.locals.token.user);
});

app.post("/", function (req, res) {
  const con = require("./database/connection");

  const query = `SELECT * FROM client WHERE (name = '${req.body.name}' || email = '${req.body.email}') AND password = '${req.body.password}' `;
  con.query(query, function (err, result) {
    if (err || result.length == 0) {
      res.json({ error: `Something went wrong!` });
    } else {
      const user = req.body.name ? req.body.name : req.body.email;
      file.key = generate_randomString(20);
      file.user = user;
      fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) return console.log(err);
        res.json({ success: "login successfully" });
      });
    }
  });
});

app.get("/logout", (req, res) => {
  file.key = "";
  file.user = "";
  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) res.json({ error: err });
    res.json({ logout: "logout successfully" });
  });
});

// * Routes
const appointmentRouter = require("./controller/appointmentController");
const developerRouter = require("./controller/developerController");
const clientRouter = require("./controller/clientController");
const categoryRouter = require("./controller/categoryController");
const venueRouter = require("./controller/venueController");

app.use("/appointment", appointmentRouter);
app.use("/developer", developerRouter);
app.use("/client", clientRouter);
app.use("/category", categoryRouter);
app.use("/venue", venueRouter);

const port = 3000;

app.listen(port, () => {
  console.log("Server running on  http://localhost:" + port);
});
