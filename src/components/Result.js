import React from "react";
import logo from "../assets/formicon.png";
import happy from "../assets/happy.png";
import Footer from "./Footer";
import { useNavigate } from "react-router";

function Result() {
	const navigate = useNavigate();
	function selfhelp() {
		navigate("/selfhelp");
	}
	function redo() {
		navigate("/form");
	}
	function psycho() {
		navigate("/form");
	}
	return (
		<div>
			<div className=" flex items-center  justify-center mt-10 mb-5">
				<img className="h-20 mr-5" src={logo} alt="log" />
				<h1 className="font-bold sm:1xl text-6xl text-center">
					Diagnosis Test Results
				</h1>
			</div>
			<div className="  mb-15">
				<div>
					<h2 className="text-3xl font-bold text-center my-20">
						Our Test Analysis Says That You Are Not in depression
					</h2>
				</div>
				<div className="mt-30 flex justify-center ">
					<button
						onClick={selfhelp}
						className="text-white w-40 h-10 rounded-lg bg-primary  my-5 mr-3 "
					>
						Self Help
					</button>
					<button
						onClick={redo}
						className="text-white w-40 h-10 rounded-lg bg-primary  my-5 mr-3 "
					>
						Redo Survey
					</button>
				</div>
				<div className="mt-30 flex justify-center ">
					<button
						onClick={psycho}
						className="text-white w-40 h-10 rounded-lg bg-primary  my-5 mr-3 "
					>
						Find Psychologist
					</button>
				</div>
			</div>
			<div className="fixed bottom-0 w-full">
				<Footer></Footer>
			</div>
		</div>
	);
}

export default Result;
