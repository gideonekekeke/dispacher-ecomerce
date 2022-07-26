import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProductsPage = () => {
	const [data, setData] = React.useState([]);

	const getData = async () => {
		await axios.get("http://localhost:14000/api/product").then((res) => {
			console.log(res);
			setData(res.data.product);
		});
	};

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<Container>
			<h2>Our Products</h2>
			<p style={{ textAlign: "center", width: "80%" }}>
				In publishing and graphic design, Lorem ipsum is a placeholder text
				commonly used to demonstrate the visual form of a document or a typeface
				without relying on meaningful content. Lorem ipsum may be used as a
				placeholder before final copy is available.
			</p>
			<div style={{ display: "flex" }}>
				{data.map((props) => (
					<Link
						style={{
							textDecoration: "none",
							color: "black",
						}}
						to={`/details/${props._id}`}>
						<Card>
							<img
								src={props.avatar}
								style={{
									height: "300px",
									width: "100%",
									border: "none",
									borderRadius: "10px",
									objectFit: "contain",
								}}
							/>
							<DownHold>
								<span>{props.title}</span>
								<h3>#{props.price}</h3>
							</DownHold>
						</Card>
					</Link>
				))}
			</div>
		</Container>
	);
};

export default AllProductsPage;

const DownHold = styled.div`
	height: 200px;
	width: 200px;

	border-radius: 360px;
	position: absolute;
	margin-top: 300px;
	background-color: #f7f7f7;

	span {
		margin-top: 40px;
		margin-left: 70px;
		position: absolute;
		font-size: 15px;
		text-align: center;
		justify-content: center;
		align-items: center;
		display: flex;
		width: 70px;
	}
	h3 {
		margin-top: 100px;
		margin-left: 80px;
		position: absolute;
		font-size: 20px;
	}
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	flex-direction: column;
	min-height: 80vh;

	background-color: #f7f7f7;
	height: 100%;

	h2 {
		font-size: 30px;
	}
`;

const Card = styled.div`
	background-color: white;
	width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
	margin: 10px;
	border-radius: 10px;
	cursor: pointer;
`;
