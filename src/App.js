import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Survey from "./components/Survey";

import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";


export default function App() {
	return (
	  <div>
		  <Router>
			<Routes>
			<Route path="/" element={<><Navbar /><Dashboard /> <Footer /></>}/>
			<Route path="/selfhelp" element={<><Navbar /></>}/>
			<Route path="/form" element={<><Survey /></>}/>
			</Routes>
      </Router>
		
	  </div>
	);
}
