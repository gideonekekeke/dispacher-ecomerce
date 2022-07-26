const orderModel = require("../Models/OrdersModel");
const otpGenerator = require("otp-generator");
const { DelieveryMail } = require("../utils/email");
const checkoutProduct = async (req, res) => {
	try {
		const { allorders, otpCode, otp, done, activate, email } = req.body;
		const opppt = otpGenerator.generate(7, {
			upperCaseAlphabets: false,
			specialChars: false,
			digits: true,
			lowerCaseAlphabets: false,
		});
		const order = await orderModel.create({
			allorders,
			otpCode: opppt,
			activate,
			otp,
			done,
			email,
		});
		DelieveryMail(email, opppt)
			.then((result) => {
				console.log("sent", result);
			})
			.catch((error) => {
				console.log(error);
			});

		res.status(200).json({
			message: "order created successfully",
			order,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

const getAllOrders = async (req, res) => {
	try {
		const allOrders = await orderModel.find();
		res.status(200).json({
			message: "all orders",
			allOrders,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

const updateDone = async (req, res) => {
	try {
		const editStatus = await orderModel.findByIdAndUpdate(
			req.params.id,
			{
				activate: true,
			},
			{ new: true },
		);

		res.status(200).json(editStatus);
	} catch (err) {
		res.status(404).json({ message: "an error occured" });
	}
};
const updateMainDone = async (req, res) => {
	try {
		const editStatus = await orderModel.findByIdAndUpdate(
			req.params.id,
			{
				done: true,
			},
			{ new: true },
		);

		res.status(200).json(editStatus);
	} catch (err) {
		res.status(404).json({ message: "an error occured" });
	}
};

module.exports = {
	getAllOrders,
	checkoutProduct,
	updateDone,
	updateMainDone,
};
