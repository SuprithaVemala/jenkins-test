import movies from "../Model/movies-schema";
import axios from "axios";

const getAllMovies = async (request: any, response: any) => {
	try {
		let result = await movies.find().limit(12);
		response.status(200).send(result);
	} catch (err) {
		response.status(404).send(err.message);
		console.log(err);
	}
};

const searchMovieName = async (request: any, response: any) => {
	let value = eval(`/${request.query["s"]}/i`);
	console.log(request.query["s"]);
	console.log(value);

	try {
		let result = await movies.find({ Title: value });
		console.log(result);

		if (result.length === 0) {
			let apiResult = await axios.get(
				`http://www.omdbapi.com/?s=${request.query["s"]}&apikey=cecc65d4`
			);
			console.log(apiResult.data.Search);

			if (apiResult.data.Search) {
				await movies.create(apiResult.data.Search);
				return response.status(200).send(apiResult.data.Search);
			}
		}
		response.status(200).send(result);
	} catch (err) {
		response.status(404).send(err.message);
	}
};

const searchMovieByImdbId = async (request: any, response: any) => {
	try {
		let apiResult = await axios.get(
			`http://www.omdbapi.com/?i=${request.query["i"]}&apikey=cecc65d4`
		);
		console.log(apiResult);
		return response.status(200).send(apiResult.data);
	} catch (err) {
		response.status(404).send(err.message);
	}
};

export { getAllMovies, searchMovieName, searchMovieByImdbId };
