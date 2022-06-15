const express = require("express");

const venueModel = require("../model/venueModel");
const venueRouter = express.Router();

venueRouter.post("/", function (req, res) {
  venueModel.insert(req.body, req.app.locals, function (obj) {
    res.json(obj);
  });
});

venueRouter.get("/", function (req, res) {
  venueModel.getAllData(req.app.locals, function (obj) {
    res.json(obj);
  });
});

venueRouter.get("/:id", function (req, res) {
  venueModel.getDataByID(req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

venueRouter.put("/:id", function (req, res) {
  venueModel.update(req.body, req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

venueRouter.delete("/:id", function (req, res) {
  venueModel.delete(req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

module.exports = venueRouter;
