import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../Global/actions";
const DetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [data, setData] = React.useState([]);

	const getData = async () => {
		await axios
			.get(`http://localhost:14000/api/product/single/${id}`)
			.then((res) => {
				console.log(res.data.product);
				setData(res.data.product);
			});
	};

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<Container>
			<Holder>
				<First>
					<img
						style={{ height: "100%", width: "100%", objectFit: "cover" }}
						src={data.avatar}
					/>
				</First>
				<Second>
					<h2>{data.title}</h2>
					<p>{data.description}</p>
					<h3>#{data.price}</h3>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "250px",
							alignItems: "center",
						}}>
						<div
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
						<div>0</div>
						<div
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
						<button
							onClick={() => {
								dispatch(addToCart(data));
							}}>
							Add To Cart
						</button>
					</div>
				</Second>
			</Holder>
		</Container>
	);
};

export default DetailsPage;
const Holder = styled.div`
	display: flex;
`;
const First = styled.div`
	height: 500px;
	width: 500px;
	background-color: red;
	margin: 10px;
`;
const Second = styled.div`
	height: 500px;
	width: 500px;

	margin: 10px;
	display: flex;
	flex-direction: column;
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
