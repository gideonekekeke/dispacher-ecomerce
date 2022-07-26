const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		allorders: [],
		otpCode: {
			type: Number,
		},
		activate: {
			type: Boolean,
			default: false,
		},
		otp: {
			type: Number,
		},

		email: {
			type: String,
		},

		done: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("orders", productSchema);
