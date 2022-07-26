import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import Header from "./Components/Header";
import DetailsPage from "./Components/DetailsPage";
import CartPage from "./Components/CartPage";
import AdminPage from "./Components/AdminPage";
import DispatcherPage from "./Components/DispatcherPage";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/details/:id' element={<DetailsPage />} />
				<Route path='/carts' element={<CartPage />} />
				<Route path='/admin-page' element={<AdminPage />} />
				<Route path='/dispatch-page' element={<DispatcherPage />} />
			</Routes>
		</Router>
	);
}

export default App;
