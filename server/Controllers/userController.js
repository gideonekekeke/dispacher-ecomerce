const userModel = require("../models/userModel");

const createUser = async (req, res) => {
	try {
		const user = await userModel.create(req.body);
		res.status(200).json({
			message: "user created successfully",
			user,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
const getUser = async (req, res) => {
	try {
		const user = await userModel.find();
		res.status(200).json({
			message: "user created successfully",
			user,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

module.exports = {
	createUser,
	getUser,
};
