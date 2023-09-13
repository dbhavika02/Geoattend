const {
  addSubscriber,
  getSubscriber,
  deleteSubscriber,
} = require("../controller/subscriber");

const express = require("express");
const router = express.Router();

// localhost:3000/api/event-subscribers
router.post("/:idSelected", addSubscriber);
router.get("/:event_id", getSubscriber);
router.delete("/:event_id/:user_id", deleteSubscriber);

//Make cake route export ready
module.exports = router;
