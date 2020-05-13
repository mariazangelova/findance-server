const { Router } = require("express");
//const auth = require("../auth/middleware");
const router = new Router();
const Event = require("../models").event;
const Style = require("../models").style;

router.get("/", async (req, res, next) => {
  try {
    console.log("heelllooo");
    const styles = await Style.findAll();
    res.status(200).send(styles);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
