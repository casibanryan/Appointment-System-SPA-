const express = require("express");

const appointmentModel = require("../model/appointmentModel");
const appointmentRouter = express.Router();

appointmentRouter.post("/", function (req, res) {
  appointmentModel.insert(req.body, req.app.locals, function (obj) {
    res.json(obj);
  });
});

appointmentRouter.get("/", function (req, res) {
  appointmentModel.getAllData(req.app.locals, function (obj) {
    res.json(obj);
  });
});

appointmentRouter.get("/:id", function (req, res) {
  appointmentModel.getDataByID(req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

appointmentRouter.get("/history/:id", function (req, res) {
  appointmentModel.history(req.params.id, function (obj) {
    res.json(obj);
  });
});

appointmentRouter.put("/:id", function (req, res) {
  appointmentModel.update(
    req.body,
    req.params.id,
    req.app.locals,
    function (obj) {
      res.json(obj);
    }
  );
});

appointmentRouter.delete("/:id", function (req, res) {
  appointmentModel.delete(req.params.id, req.app.locals, function (obj) {
    res.json(obj);
  });
});

module.exports = appointmentRouter;
