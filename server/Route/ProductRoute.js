const express = require("express");
const router = express.Router();
const {
	uploadProducts,
	getProducts,
	getSingleProducts,
} = require("../Controllers/ProductsController");

router.post("/create", uploadProducts);
router.get("/", getProducts);
router.get("/single/:id", getSingleProducts);

module.exports = router;
