const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		phoneNumber: {
			type: Number,
		},
		isDispacher: {
			type: Boolean,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("admins", productSchema);
