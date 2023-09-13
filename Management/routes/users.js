const {
  addUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/users");
const express = require("express");
const router = express.Router();

//localhost:3000/api/users
router.post("/", addUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
