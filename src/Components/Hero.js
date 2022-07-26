import React from "react";
import styled from "styled-components";
import pix from "./img/2.png";
const Hero = () => {
	return (
		<Container>
			<MainHold>
				<TextHold>
					<h2>Online Shopping Bread</h2>
					<h3>100% Freshely Baked Bread</h3>
					<p>Get Flat 20% off</p>
					<Button>Shop Now</Button>
				</TextHold>
				<ImageHold src={pix} />
			</MainHold>
		</Container>
	);
};

export default Hero;

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
const MainHold = styled.div`
	display: flex;
	align-items: center;
`;
const TextHold = styled.div`
	h2 {
		font-size: 40px;
		line-height: 0;
	}
	h3 {
		font-size: 30px;
	}
	p {
		font-size: 20px;
	}
`;
const ImageHold = styled.img`
	height: 100%;
	width: 700px;
	object-fit: cover;
`;

const Container = styled.div`
	height: 500px;
	width: 100%;
	background-color: #f2f8dc;
	display: flex;
	justify-content: center;
	align-items: center;
`;
