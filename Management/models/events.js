const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  dateTime: {
    type: Date,
    require: true,
  },
  createdBy: {
    type: String,
    require: true,
  },
});

const eventModel = mongoose.model("events", eventSchema);

module.exports = eventModel;

// {
//     "name": "Event Name",
//     "location": "Event Location",
//     "dateTime": "2023-09-15T10:00:00Z",
//     "createdBy": "user_id"
//     }
