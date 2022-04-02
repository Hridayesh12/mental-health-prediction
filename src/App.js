import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Dashboard></Dashboard>
			<Footer></Footer>
		</div>
	);
}
