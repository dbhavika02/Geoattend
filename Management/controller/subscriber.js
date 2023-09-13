// //import cake models
const mongoose = require("mongoose");
let events = require("../models/events");
let subscribers = require("../models/subscriber");
const subscribersModel = require("../models/subscriber");

exports.addSubscriber = async (req, res) => {
  try {
    const { idSelected } = req.params;
    const { event_id, user_id } = req.body;
    const eventInDb = await events.findById(idSelected);

    if (eventInDb) {
      const newSubscriber = new subscribers({
        event_id: event_id,
        user_id: user_id,
      });
      const savedSubscriber = await newSubscriber.save();
      return res.status(200).json({
        // dataSubscribers: eventInDb,
        message: savedSubscriber,
      });
    } else {
      return res.status(400).json({
        error: "Event not found",
      });
    }
  } catch (err) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

exports.getSubscriber = async (req, res) => {
  const { event_id } = req.params;
  try {
    const subscriber = await subscribersModel.findOne({
      event_id: event_id,
    });
    return res.status(200).json({
      subscriber: subscriber,
    });
  } catch (err) {
    res.status(400).json({
      error: "Something went wrong",
    });
  }
};

exports.deleteSubscriber = async (req, res) => {
  try {
    const { id, user_id } = req.params;
    const deleteSubscriber = await subscribersModel.deleteOne(
      { event_id: event_id },
      { user_id: user_id }
    );
    if (deleteSubscriber) {
      return res.status(200).json({
        message: "Subscriber deleted successfully",
      });
    } else {
      return res.status(404).json({
        error: "Subscriber not found",
      });
    }
  } catch (err) {
    return res.status(400).json({
      error: "something went wrong",
    });
  }
};
