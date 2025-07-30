const express = require("express");
const { signupUser, loginUser } = require("../centrollers/authController");
const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;
