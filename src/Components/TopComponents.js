import React from "react";
import styled from "styled-components";
import pix from "./img/2.png";
const TopComponents = () => {
	return (
		<Container>
			<h2>Top Categories</h2>
			<p style={{ textAlign: "center", width: "80%" }}>
				In publishing and graphic design, Lorem ipsum is a placeholder text
				commonly used to demonstrate the visual form of a document or a typeface
				without relying on meaningful content. Lorem ipsum may be used as a
				placeholder before final copy is available.
			</p>
			<CardHold>
				<Card>
					<First>
						<TextHold>
							<h3>20% off</h3>
							<h3>Agege Bread</h3>
						</TextHold>
						<Button>Shop Now</Button>
					</First>

					<Second>
						<img
							style={{ height: "100px", width: "200px", objectFit: "cover" }}
							src={pix}
						/>
					</Second>
				</Card>
				<Card2>
					<First>
						<TextHold>
							<h3>20% off</h3>
							<h3>Agege Bread</h3>
						</TextHold>
						<Button>Shop Now</Button>
					</First>

					<Second>
						<img
							style={{ height: "100px", width: "200px", objectFit: "cover" }}
							src={pix}
						/>
					</Second>
				</Card2>
				<Card3>
					<First>
						<TextHold>
							<h3>20% off</h3>
							<h3>Agege Bread</h3>
						</TextHold>
						<Button>Shop Now</Button>
					</First>

					<Second>
						<img
							style={{ height: "100px", width: "200px", objectFit: "cover" }}
							src={pix}
						/>
					</Second>
				</Card3>
			</CardHold>
		</Container>
	);
};

export default TopComponents;
const Button = styled.div`
	height: 50px;
	width: 150px;
	color: white;
	background-color: #7aa93c;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	transition: all 350ms;
	cursor: pointer;

	:hover {
		background-color: white;
		color: black;
	}
`;

const TextHold = styled.div`
	display: flex;
	flex-direction: column;

	:hover {
		flex-direction: column-reverse;
		transition: all 0.4s ease;
		transition-delay: 30s;
		-webkit-transition-delay: 1s;
	}
`;
const First = styled.div``;
const Second = styled.div`
	:hover {
		transform: scale(1.1);
		transition: all 350ms;
	}
`;
const CardHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Card3 = styled.div`
	background-color: #b2d8cd;
	height: 200px;
	width: 400px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;
const Card2 = styled.div`
	background-color: #fac730;
	height: 200px;
	width: 400px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;
const Card = styled.div`
	background-color: #f3c2c6;
	height: 200px;
	width: 400px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	flex-direction: column;

	h2 {
		font-size: 30px;
	}
`;
