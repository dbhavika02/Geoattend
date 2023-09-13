const eventModel = require("../models/events");

// exports.homepage = (req, res) => {
//   return res.send("!WELCOME TO GEOATTEND!");
// };

exports.addEvent = async (req, res) => {
  try {
    const { name, location, dateTime, createdBy } = req.body;

    if (!name || !location || !dateTime || !createdBy) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }
    const newEvent = new eventModel({
      name: name,
      location: location,
      dateTime: dateTime,
      createdBy: createdBy,
    });

    const savedEvent = await newEvent.save();

    return res.status(200).json({
      message: "Event added Successfully",
      event: savedEvent,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await eventModel.findOne({
      _id: id,
    });
    return res.status(200).json({
      event: event,
    });
  } catch (err) {
    res.status(400).send({
      error: "Something went wrong Check again",
    });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await eventModel.findOneAndUpdate({ _id: id }, { name: name });

    const event = await eventModel.findOne({ _id: id });

    return res.status(200).json({
      event: event,
    });
  } catch (err) {
    res.status(400).send({
      error: "Cannot update successfully ",
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEvent = await eventModel.deleteOne({ _id: id });
    if (deleteEvent) {
      return res.status(200).json({
        message: "Deleted successfully",
      });
    } else {
      return res.status(404).json({
        error: "User not found",
      });
    }
  } catch (err) {
    return res.status(400).json({
      error: "Something went wrong",
    });
  }
};
