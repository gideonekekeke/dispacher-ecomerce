import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToCart, removeCart } from "../Global/actions";
import PaymentPage from "./PaymentPage";

const CartPage = () => {
	const cartData = useSelector((state) => state.myReducer.cart);
	const cartDataQuantity = useSelector((state) => state.myReducer.quantity);
	const cartDataPrice = useSelector((state) => state.myReducer.totalPrice);

	const dispatch = useDispatch();

	return (
		<Container>
			<br />
			<Holder>
				<First>
					{cartData?.map((props) => (
						<Div>
							{" "}
							<img
								src={props.avatar}
								style={{
									height: "100px",
									width: "100px",
									background: "silver",
									objectFit: "cover",
								}}
							/>
							<h4>{props._id}</h4>
							<h3>{props.title}</h3>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "200px",
									alignItems: "center",
								}}>
								<div
									onClick={() => {
										dispatch(removeCart(props));
									}}
									style={{
										height: "30px",
										width: "30px",
										borderRadius: "50%",
										background: "silver",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										cursor: "pointer",
									}}>
									-
								</div>
								<div>{props.quantity}</div>
								<div
									onClick={() => {
										dispatch(addToCart(props));
									}}
									style={{
										height: "30px",
										width: "30px",
										borderRadius: "50%",
										background: "silver",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										cursor: "pointer",
									}}>
									+
								</div>
							</div>
						</Div>
					))}
				</First>
				<Second>
					<h3>Total Quantity</h3>
					<div>{cartDataQuantity}</div>
					<h3>Total Price</h3>
					<div>#{cartDataPrice}</div>
					<PaymentPage />
				</Second>
			</Holder>
		</Container>
	);
};

export default CartPage;

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	width: 90%;
`;

const First = styled.div`
	background-color: white;
	height: 500px;
	width: 80%;
`;
const Second = styled.div`
	height: 300px;
	width: 200px;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const Holder = styled.div`
	display: flex;
	width: 100%;

	justify-content: space-around;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	flex-direction: column;
	min-height: 80vh;

	background-color: #f7f7f7;
	height: 100%;

	h2 {
		font-size: 30px;
	}
`;
