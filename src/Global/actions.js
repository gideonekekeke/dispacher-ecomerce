import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	quantity: 0,
	totalPrice: 0,
};

const actions = createSlice({
	name: "bread",
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			const check = state.cart.findIndex((el) => el._id === payload._id);

			if (check >= 0) {
				state.cart[check].quantity += 1;
			} else {
				state.cart.push({ ...payload, quantity: 1 });
			}

			state.quantity += 1;

			state.totalPrice += payload.quantity * payload.price;
		},

		removeCart: (state, { payload }) => {
			const check = state.cart.findIndex((el) => el._id === payload._id);

			if (state.cart[check].quantity > 1) {
				state.cart[check].quantity -= 1;
			} else {
				state.cart = state.cart.filter((el) => el._id !== payload._id);
			}
			state.quantity -= 1;
			state.totalPrice -= payload.price;
		},
	},
});

export const { addToCart, removeCart } = actions.actions;

export default actions.reducer;
