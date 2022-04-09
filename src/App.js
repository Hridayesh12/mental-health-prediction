import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Survey from "./components/Survey";
import Result1 from "./components/Result1";
import Result from "./components/Result";

import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";


export default function App() {
	return (
	  <div>
		  <Router>
			<Routes>
			<Route path="/" element={<><Navbar /><Dashboard /> <Footer /></>}/>
			<Route path="/selfhelp" element={<><Navbar /></>}/>
			<Route path="/form" element={<><Navbar /> <Survey /> <Footer /></>}/>
			<Route path="/result" element={<><Navbar /> <Result /> <Footer /></>}/>
			<Route path="/result1" element={<><Navbar /> <Result1 /> <Footer /></>}/>
			</Routes>
      </Router>
		
	  </div>
	);
}
