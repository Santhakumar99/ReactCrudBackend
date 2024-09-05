const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  FindUser,
  CreateAllUsers,
  UpdateUser,
  DeleteUser,
  Login
} = require("./user.controller");
router.get("/AllUsers", getAllUsers);
router.get("/AllUsers/:id", FindUser);
router.post("/", CreateAllUsers);
router.put("/update/:id", UpdateUser);
router.delete("/delete/:id", DeleteUser);
router.post("/login", Login);
module.exports = router;
