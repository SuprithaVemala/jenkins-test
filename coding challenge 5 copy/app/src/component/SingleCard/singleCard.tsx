import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchByMovieId } from "../../services/services";
import "./singleCard.css";
interface Props {}

const SingleCard = (props: any) => {
	const state: any = useSelector((state: any) => state.movies);
	const dispatch = useDispatch();
	let result = async () => {
		let data = await searchByMovieId(state.searchedParams);
		dispatch(data);
	};

	useEffect(() => {
		result();
	}, [state.searchedParams]);

	return (
		<div className="details-card">
			<div className="image">
				<img height="70%" src={state.oneMovie.Poster} alt="card-img" />
			</div>
			<div className="details">
				<p>{state.oneMovie.Title}</p>
				<p>{state.oneMovie.Year}</p>
				<p>{state.oneMovie.imdbID}</p>
				<p>{state.oneMovie.Type}</p>
				<p>{state.oneMovie.Plot}</p>
				<p>{state.oneMovie.Actors}</p>
				<p>{state.oneMovie.imdbRatings}</p>
				<p>{state.oneMovie.imdbVotes}</p>
			</div>
		</div>
	);
};

export default SingleCard;
