const { Router } = require("express");
//const auth = require("../auth/middleware");
const router = new Router();
const Event = require("../models").event;
const User = require("../models").user;
const Dancer = require("../models").dancer;

router.get("/", async (req, res, next) => {
  try {
    const dancers = await Dancer.findAll({ include: [User] });
    res.status(200).send(dancers);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const eventId = req.params.id;
  console.log("eventid", eventId);
  const dancers = await Dancer.findAll({
    include: [User],
    where: { eventId },
  });
  res.status(200).send(dancers);
});

router.post("/:id", async (req, res, next) => {
  const eventId = req.params.id;
  const userId = req.body.userId;
  try {
    await Dancer.create({ eventId, userId });
    const dancers = await Dancer.findAll({
      include: [User],
      where: { eventId },
    });
    return res.status(201).send({ message: "Dancer added", data: dancers });
  } catch (e) {
    next(e);
  }
});

router.post("/delete/:id", async (req, res, next) => {
  const eventId = req.params.id;
  const userId = req.body.userId;
  console.log("USER ID", req.body);
  try {
    await Dancer.destroy({ where: { eventId, userId } });
    const dancers = await Dancer.findAll({
      include: [User],
      where: { eventId },
    });
    return res.status(202).send({ message: "Dancer removed", data: dancers });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
