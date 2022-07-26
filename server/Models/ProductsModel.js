const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		price: {
			type: Number,
		},
		category: {
			type: String,
		},
		avatar: {
			type: String,
		},
		quantity: {
			type: Number,
			default: 1,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("products", productSchema);
