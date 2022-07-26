const express = require("express");
const router = express.Router();
const {
	createAdmin,
	getAdmin,
	createDispatcher,
} = require("../Controllers/AdminController");

router.post("/createadmin", createAdmin);
router.post("/createdispatch", createDispatcher);
router.get("/", getAdmin);

module.exports = router;
