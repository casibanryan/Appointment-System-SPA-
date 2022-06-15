const express = require("express");

const categoryModel = require("../model/categoryModel");
const categoryRouter = express.Router();

categoryRouter.post("/", function (req, res) {
  categoryModel.insert(req.body, req.app.locals, function (obj) {
    res.json(obj);
  });
});

categoryRouter.get("/", function (req, res) {
  categoryModel.getAllData(req.app.locals, function (obj) {
    res.json(obj);
  });
});

categoryRouter.get("/:id", function (req, res) {
  categoryModel.getDataByID(req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

categoryRouter.put("/:id", function (req, res) {
  categoryModel.update(req.body, req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

categoryRouter.delete("/:id", function (req, res) {
  categoryModel.delete(req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

module.exports = categoryRouter;
