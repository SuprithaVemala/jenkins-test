import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovies } from "../../services/services";
import CustomCard from "../Card/card";

export const CardComponent = (props: any) => {
	const state = useSelector((state: any) => state.movies);
	const dispatch = useDispatch();

	let result = async () => {
		let data = await getMovies();
		dispatch(data);
	};
	useEffect(() => {
		result();
	}, []);

	console.log(state.movies.length);

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "25% 25% 25% 25%",
				margin: "auto",
			}}
		>
			{state.movies.map((value: any, index: any) => {
				return <CustomCard key={index} value={value} />;
			})}
		</div>
	);
};
