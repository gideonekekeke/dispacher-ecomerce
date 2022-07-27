import React from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { shootOTP } from "../Global/actions";
const DispatcherPage = () => {
	const [data, setData] = React.useState([]);
	const readOtp = useSelector((state) => state.myReducer.referenceOtp);
	const dispatch = useDispatch();
	const getAllOrders = async () => {
		await axios.get("http://localhost:14000/api/order").then((res) => {
			console.log(res.data.allOrders);
			setData(res.data.allOrders);
		});
	};

	const changeIt = readOtp?.toString();

	console.log(changeIt);

	React.useEffect(() => {
		getAllOrders();
	}, []);

	return (
		<Container>
			<h2>Dispatcher Screen</h2>
			<Holder>
				<div>Total Sale</div>
				<div>0</div>
				<h3>All Orders</h3>
				{data?.map((props, i) => (
					<>
						{props.activate ? (
							<>
								{props.allorders.map(({ _id, title, price, avatar }) => (
									<Div>
										<img
											src={avatar}
											style={{
												height: "100px",
												width: "100px",
												background: "silver",
											}}
										/>
										<h2>{_id}</h2>
										<h3>{title}</h3>
									</Div>
								))}
							</>
						) : null}

						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "200px",
								alignItems: "center",
							}}>
							{props.activate ? (
								<>
									{props.done ? (
										<button
											style={{ background: "silver", cursor: "not-allowed" }}>
											Product Delievered
										</button>
									) : (
										<button
											onClick={() => {
												const tok = props.otpCode;
												console.log(tok);
												dispatch(shootOTP(props.otpCode));

												Swal.fire({
													title: "Submit OTP Reference Code",
													input: "text",
													inputAttributes: {
														autocapitalize: "off",
													},
													showCancelButton: true,
													confirmButtonText: "Submit",
													showLoaderOnConfirm: true,
													inputValidator: (value) => {
														if (value === changeIt) {
															axios
																.patch(
																	`http://localhost:14000/api/order/updatingit/${props._id}`,
																	{
																		done: true,
																	},
																)
																.then((res) => {
																	Swal.fire({
																		title: "Success",
																		icon: "success",
																	}).then(() => {
																		window.location.reload();
																	});
																})
																.catch((error) => {
																	Swal.showValidationMessage(
																		`Request failed: ${error}`,
																	);
																});
														} else if (value !== changeIt) {
															Swal.fire({
																icon: "error",
																title: "OTP Refrence Code error",
																text: "",
																//   footer: '<a href="">Why do I have this issue?</a>'
															}).then((value) => {});
														}
													},

													allowOutsideClick: () => !Swal.isLoading(),
												});
											}}>
											Enter product OTP
										</button>
									)}
								</>
							) : null}
						</div>
					</>
				))}
			</Holder>
		</Container>
	);
};

export default DispatcherPage;
const Div = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	width: 90%;
`;

const Holder = styled.div`
	width: 80%;
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
