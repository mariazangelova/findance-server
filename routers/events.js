const { Router } = require("express");
//const auth = require("../auth/middleware");
const router = new Router();
const Event = require("../models").event;
const Style = require("../models").style;

router.get("/", async (req, res, next) => {
  const events = await Event.findAll({ include: [Style] });
  res.status(200).send(events);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Event's id is not a number." });
  }
  const event = await Event.findByPk(id);
  if (event === null) {
    return res.status(404).send({ message: "No such event here." });
  }
  res.status(200).send(event);
});

router.post("/", async (req, res, next) => {
  console.log("REQUEST", req.body.eventData);
  try {
    const eventData = req.body.eventData;
    eventData.userId = 1;
    const event = Event.create(eventData);
    return res.status(201).send({ message: "Event added", event });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
