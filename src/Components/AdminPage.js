import React from "react";
import styled from "styled-components";
const AdminPage = () => {
	return (
		<Container>
			<h2>Admin Screen</h2>
			<Holder>
				<div>Total Sale</div>
				<div>0</div>
				<h3>All Orders</h3>
				<Div>
					{" "}
					<img
						style={{ height: "100px", width: "100px", background: "silver" }}
					/>
					<h2>id</h2>
					<h3>title</h3>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "200px",
							alignItems: "center",
						}}>
						<button>Dispatch</button>
					</div>
				</Div>
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
