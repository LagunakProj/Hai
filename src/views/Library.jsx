import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import configData from "../config.json";
import axios from "axios";

const Library = () => {
	const [library, setLibrary] = useState();

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			`http://${configData.CLIENTIP}:${configData.MEDIAPORT}/media/library`
	// 		)
	// 		.then((response) => {
	// 			console.log(response.data);
	// 			// setLibrary(response.data);
	// 		});
	// }, []);
	// console.log(data[0][0].Films);

	return (
		<div>
			<h1>MOVIES LIST</h1>
			<Link to={"/"}>Home</Link>
			{/* {library ? (
				library.map((item, index) => {
					const [key, { titles }] = Object.entries(item)[0];
					return (
						<div key={index}>
							<h2>{key}</h2>
							<ul>
								{titles.map((title, index) => (
									<li key={index}>{title}</li>
								))}
							</ul>
						</div>
					);
				})
			) : (
				<h1>Loading...</h1>
			)} */}
			<h1>Loading...</h1>
		</div>
	);
};

export default Library;
