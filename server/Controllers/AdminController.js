const adminMode = require("../models/AdminModel");

const createAdmin = async (req, res) => {
	try {
		const { name, email, phoneNumber, isAdmin, isDispacher } = req.body;
		const admin = await adminMode.create({
			name,
			email,
			phoneNumber,
			isAdmin: true,
			isDispacher: false,
		});
		res.status(200).json({
			message: "admin created successfully",
			admin,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
const createDispatcher = async (req, res) => {
	try {
		const { name, email, phoneNumber, isAdmin, isDispacher } = req.body;
		const admin = await adminMode.create({
			name,
			email,
			phoneNumber,
			isAdmin: false,
			isDispacher: true,
		});
		res.status(200).json({
			message: "admin created successfully",
			admin,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
const getAdmin = async (req, res) => {
	try {
		const admin = await adminMode.create(req.body);
		res.status(200).json({
			message: "admin created successfully",
			admin,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

module.exports = {
	createAdmin,
	getAdmin,
	createDispatcher,
};
