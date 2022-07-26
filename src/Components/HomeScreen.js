import React from "react";
import AllProductsPage from "./AllProductsPage";
import Hero from "./Hero";
import TopComponents from "./TopComponents";

const HomeScreen = () => {
	return (
		<div>
			<Hero />
			<TopComponents />
			<AllProductsPage />
		</div>
	);
};

export default HomeScreen;
