import React from "react";

import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import axios from "axios";

const PaymentPage = () => {
	const cartData = useSelector((state) => state.myReducer.cart);
	const cartDataQuantity = useSelector((state) => state.myReducer.quantity);
	const cartDataPrice = useSelector((state) => state.myReducer.totalPrice);

	const config = {
		reference: new Date().getTime().toString(),
		email: "shotkode123@gmail.com",
		amount: `${cartDataPrice * 100}`,
		publicKey: "pk_test_23d13fb294f558953fdcdc971aa6ece27ff088e2",
	};

	// you can call this function anything
	const onSuccess = (reference) => {
		// Implementation for whatever you want to do with reference and after success call.

		axios
			.post("http://localhost:14000/api/order/create", {
				allorders: cartData,
				email: "shotkode123@gmail.com",
			})
			.then((res) => {
				console.log(res);
			});
		console.log(reference);
	};

	// you can call this function anything
	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};
	const initializePayment = usePaystackPayment(config);
	return (
		<div>
			<button
				onClick={() => {
					initializePayment(onSuccess, onClose);
				}}>
				Checkout
			</button>
		</div>
	);
};

export default PaymentPage;
