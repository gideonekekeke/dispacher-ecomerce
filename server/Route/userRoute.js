const express = require("express");
const router = express.Router();
const { createUser, getUser } = require("../Controllers/userController");

router.post("/create", createUser);
router.get("/", getUser);

module.exports = router;
