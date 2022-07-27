const express = require("express");
const router = express.Router();
const {
	getAllOrders,
	checkoutProduct,
	updateDone,
	updateMainDone,
} = require("../Controllers/OrderController");

router.post("/create", checkoutProduct);
router.get("/", getAllOrders);
router.patch("/updatingDone/:id", updateDone);
router.patch("/updatingit/:id", updateMainDone);

module.exports = router;
