import React from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
const AdminPage = () => {
	const [data, setData] = React.useState([]);
	const getAllOrders = async () => {
		await axios.get("http://localhost:14000/api/order").then((res) => {
			console.log(res.data.allOrders);
			setData(res.data.allOrders);
		});
	};

	React.useEffect(() => {
		getAllOrders();
	}, []);

	return (
		<Container>
			<h2>Admin Screen</h2>
			<Holder>
				<div>Total Sale</div>
				<div>0</div>
				<h3>All Orders</h3>
				{data?.map((props) => (
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

						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "200px",
								alignItems: "center",
							}}>
							{props.activate ? (
								<button
									style={{
										background: "silver",
										cursor: "not-allowed",
									}}>
									on Develievery
								</button>
							) : (
								<button
									onClick={() => {
										axios
											.patch(
												`http://localhost:14000/api/order/updatingDone/${props._id}`,
												{
													activate: true,
												},
											)
											.then((res) => {
												Swal.fire({
													title: "Success",
													icon: "success",
												});
											});
									}}>
									Dispatch
								</button>
							)}
						</div>
					</>
				))}
			</Holder>
		</Container>
	);
};

export default AdminPage;
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
