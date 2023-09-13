const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Eventsdb")
  .then(() => {
    console.log("Db connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
