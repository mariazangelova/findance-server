const { Router } = require("express");
//const auth = require("../auth/middleware");
const router = new Router();
const Event = require("../models").event;
const User = require("../models").user;
const Dancer = require("../models").dancer;

router.get("/", async (req, res, next) => {
  const dancers = await Dancer.findAll({ include: [User] });
  res.status(200).send(dancers);
});

router.post("/:id", async (req, res, next) => {
  console.log("REQUEST", req.body);
  const eventId = req.params.id;
  console.log("eventid", eventId);
  const userId = 1;
  try {
    Dancer.create({ eventId, userId });
    return res.status(201).send({ message: "Dancer added" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
