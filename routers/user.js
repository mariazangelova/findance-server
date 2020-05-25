const { Router } = require("express");
//const auth = require("../auth/middleware");
const router = new Router();
const Event = require("../models").event;
const Style = require("../models").style;
const User = require("../models").user;
const Dancer = require("../models").dancer;

const eventStyles = require("../models").eventstyle;

router.post("/events", async (req, res, next) => {
  const userId = req.body.userId;
  const events = await Dancer.findAll({
    include: [Event],
    where: { userId },
  });
  // const events = await Event.findAll({
  //   include: [User],
  //   where: { userId },
  // });
  res.status(200).send(events);
});

module.exports = router;
