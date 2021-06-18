import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchByMovieName } from "../../services/services";
import CustomCard from "../Card/card";

export const SearchMovies = (props: any) => {
	const state: any = useSelector((state: any) => state.movies);
	const dispatch = useDispatch();
	let result = async () => {
		let data = await searchByMovieName(state.searchedParams);
		dispatch(data);
	};

	useEffect(() => {
		result();
	}, [state.searchedParams]);

	return (
		<div>
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
		</div>
	);
};
