const {
  addEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controller/events");
const express = require("express");
const router = express.Router();

// router.get("/", homepage);
// localhost:3000/api/events
router.post("/", addEvent);
router.get("/:id", getEventById);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
