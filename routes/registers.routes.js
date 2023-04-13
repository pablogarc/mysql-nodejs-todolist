const express = require("express");
const router = express.Router();
const {
  allRegisters,
  register,
  newRegister,
  updateRegister,
  deleteRegister,
} = require("../controllers/registers");

// Get
router.get("/registers", allRegisters);
router.get("/registers/:id", register);

// Post
router.post("/register", newRegister);

// Put
router.put("/register/:id", updateRegister);

// Delete
router.delete("/register/:id", deleteRegister);

module.exports = router;