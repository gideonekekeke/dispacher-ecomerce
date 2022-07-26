const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
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
	},
	{ timestamps: true },
);

module.exports = mongoose.model("users", userSchema);
