import React from "react";
import styled from "styled-components";
import pic from "./img/1.jpg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
	const [showInput, setShowInput] = React.useState(false);

	const toggleShowInput = () => {
		setShowInput(!showInput);
	};
	return (
		<Container>
			<Holder>
				<First>
					<span>Welcome to our online store!</span>
					<CurrencyHold>
						<h5>Currency: NG </h5>
						<h5>Language: English</h5>
					</CurrencyHold>
				</First>
				<Second>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
							height: "100%",
						}}>
						<span>
							<img style={{ objectFit: "contain", width: "120px" }} src={pic} />
							(Breads)
						</span>

						<IconHold>
							<FiSearch
								onClick={toggleShowInput}
								style={{ marginLeft: "20px", cursor: "pointer" }}
							/>
							<AiOutlineUser
								style={{ marginLeft: "20px", cursor: "pointer" }}
							/>
							<Link to='/carts'>
								<div
									style={{
										marginLeft: "20px",
										display: "flex",
										cursor: "pointer",
									}}>
									<FiShoppingCart />
									<div
										style={{
											position: "absolute",
											marginLeft: "16px",
											marginTop: "-5px",
											height: "15px",
											width: "15px",
											borderRadius: "50%",
											color: "white",
											fontSize: "10px",
											background: "#7ab831",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										0
									</div>
								</div>
							</Link>
							<HiMenuAlt2 style={{ marginLeft: "20px", cursor: "pointer" }} />
						</IconHold>
					</div>
					{showInput ? (
						<SearchHold>
							<input placeholder='Search' />
						</SearchHold>
					) : null}
				</Second>
			</Holder>
		</Container>
	);
};

export default Header;

const SearchHold = styled.div`
	padding-bottom: 10px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-in-out;
	input {
		width: 80%;
		border-radius: 5px;
	}
`;

const IconHold = styled.div`
	margin-right: 100px;
	font-size: 23px;
	display: flex;
	align-items: center;
`;

const CurrencyHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	position: sticky;
	top: 0;
`;
const Holder = styled.div`
	display: flex;
	flex-direction: column;
`;
const First = styled.div`
	width: 100%;
	height: 40px;
	background-color: #7ab831;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		margin-left: 100px;
	}

	h5 {
		margin-right: 100px;
	}
`;
const Second = styled.div`
	background-color: #f7f7f7;
	color: black;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;

	span {
		margin-left: 100px;
		display: flex;
		align-items: center;
	}
`;
