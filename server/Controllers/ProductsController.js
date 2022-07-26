const productModel = require("../models/ProductsModel");

const uploadProducts = async (req, res) => {
	try {
		const product = await productModel.create(req.body);
		res.status(200).json({
			message: "product created successfully",
			product,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

const getProducts = async (req, res) => {
	try {
		const product = await productModel.find();
		res.status(200).json({
			message: "product created successfully",
			product,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
const getSingleProducts = async (req, res) => {
	try {
		const product = await productModel.findById(req.params.id);
		res.status(200).json({
			message: "product created successfully",
			product,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

module.exports = {
	uploadProducts,
	getProducts,
	getSingleProducts,
};
