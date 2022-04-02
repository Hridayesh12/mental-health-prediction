import React from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import blob1 from "../assets/blob1.svg";
import blob2 from "../assets/blob2.svg";
const MainContent = () => {
	return (
		<div>
			<img
				src={blob1}
				className="xs:hidden lg:block absolute -z-10 opacity-60 h-60 -left-14"
				alt=""
			/>
			<h1 className="font-bold xs:text-xl sm:text-2xl xs:text-center">
				Know About the Survey
			</h1>
			<div className="lg:mx-6">
				<div className="flex xs:flex-col lg:flex-row w-full xs:py-4 lg:p-8">
					<div className="xs:m-auto flex items-center ">
						<img className="h-12 p-2" src={one} alt="" />
						<h1 className="font-bold xs:text-l sm:text-xl">General Survey</h1>
					</div>
					<div className="w-3/4 h-1/2 xs:self-center text-justify">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
							tincidunt congue ipsum, cursus pellentesque feugiat. Ultrices
							pellentesque sed dictum tortor quis faucibus id tellus auctor.
							Sapien quam erat scelerisque vel amet amet, suscipit fermentum.
							Aliquam tincidunt vel sollicitudin odio accumsan vestibulum risus
							nunc arcu.
						</p>
					</div>
				</div>
				<img
					src={blob2}
					className="xs:hidden lg:block absolute right-0 -z-10 opacity-60 h-60 block"
					alt=""
				/>
				<div className="flex xs:flex-col lg:flex-row-reverse w-full justify-between xs:py-4 lg:p-8">
					<div className="xs:m-auto flex items-center">
						<img className="h-12 p-2" src={two} alt="" />
						<h1 className="font-bold xs:text-l sm:text-xl">Tech Survey</h1>
					</div>
					<div className="w-3/4 h-1/2 xs:self-center text-justify">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
							tincidunt congue ipsum, cursus pellentesque feugiat. Ultrices
							pellentesque sed dictum tortor quis faucibus id tellus auctor.
							Sapien quam erat scelerisque vel amet amet, suscipit fermentum.
							Aliquam tincidunt vel sollicitudin odio accumsan vestibulum risus
							nunc arcu.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
