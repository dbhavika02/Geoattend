//import mongoose
const mongoose = require("mongoose");

//build cake schema
let subscriberSchema = new mongoose.Schema({
  event_id: { type: String, required: true },
  user_id: { type: String, required: true },
});

//create model and export it

const subscribersModel = mongoose.model("subscribers", subscriberSchema);

module.exports = subscribersModel;
