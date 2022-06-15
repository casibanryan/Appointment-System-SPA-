const express = require("express");
const multer = require("multer");
const path = require("path");

//* Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "../images/developer"); // directory name where save the file
  },
  filename: (req, file, callBack) => {
    const file_name = req.body.name.split(" ").join("-");
    callBack(
      null,
      file_name + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
});

const developerModel = require("../model/developerModel");
const developerRouter = express.Router();

developerRouter.post("/", upload.single("img_src"), function (req, res) {
  developerModel.insert(req, req.app.locals, function (obj) {
    res.json(obj);
  });
});

developerRouter.get("/", function (req, res) {
  developerModel.getAllData(req.app.locals, function (obj) {
    res.json(obj);
  });
});

developerRouter.get("/:id", function (req, res) {
  developerModel.getDataByID(req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

developerRouter.put("/:id", function (req, res) {
  developerModel.update(
    req.body,
    req.params.id,
    req.app.locals,
    function (obj) {
      res.json(obj);
    }
  );
});

developerRouter.delete("/:id", function (req, res) {
  developerModel.delete(req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

module.exports = developerRouter;
