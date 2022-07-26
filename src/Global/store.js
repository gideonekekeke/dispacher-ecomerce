import myReducer from "./actions";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		myReducer,
	},
});
