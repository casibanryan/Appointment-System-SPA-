const express = require("express");

const clientModel = require("../model/clientModel");
const clientRouter = express.Router();

clientRouter.post("/", function (req, res) {
  clientModel.insert(req.body, function (obj) {
    res.json(obj);
  });
});

clientRouter.get("/", function (req, res) {
  clientModel.getAllData(req.app.locals, function (obj) {
    res.json(obj);
  });
});

clientRouter.get("/:id", function (req, res) {
  clientModel.getDataByID(req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

clientRouter.put("/:id", function (req, res) {
  clientModel.update(req.body, req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

clientRouter.delete("/:id", function (req, res) {
  clientModel.delete(req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

module.exports = clientRouter;
