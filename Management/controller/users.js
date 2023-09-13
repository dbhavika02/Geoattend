const userModel = require("../models/users");

exports.addUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    const newUser = new userModel({
      username: username,
      //password: password,
      role: "user",
    });

    const savedUser = await newUser.save();

    return res.status(200).json({
      message: "User created Successfully",
      user: savedUser,
      role: "user",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findOne({
      _id: id,
    });
    return res.status(200).json({
      user: user,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    await userModel.findOneAndUpdate({ _id: id }, { username: username });

    const user = await userModel.findOne({ _id: id });

    return res.status(200).json({
      user: user,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await userModel.deleteOne({ _id: id });
    if (deleteUser) {
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
