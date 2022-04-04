import "./App.css";
import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import SelfHelp from "./components/SelfHelp";
export default function App() {
	return (
		<Router>
        <Routes>
          <Route path="/selfhelp" element={<><SelfHelp/></>}/>
		</Routes>
		</Router>
	);
}
