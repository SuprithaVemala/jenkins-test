import axios from "axios";
import { ALL_POSTS, LOGGED_IN, MOVIES, SINGLE_MOVIE } from "../store/constants";
const loginUser = async (data: any) => {
	try {
		let response = await axios.post("/api/users/login", JSON.stringify(data), {
			headers: { "Content-Type": "application/json" },
		});
		localStorage.setItem("token", response.data.token);
		localStorage.setItem("user", response.data.user);
		localStorage.setItem("userID", response.data.userId);
		return { type: LOGGED_IN, payload: response.data.user };
	} catch (err) {
		console.log(err.message);
		return null;
	}
};

const signupUser = async (data: any) => {
	try {
		let response = await axios.post("/api/users/signup", JSON.stringify(data), {
			headers: { "Content-Type": "application/json" },
		});
		return response;
	} catch (err) {
		return null;
	}
};

const searchByMovieName = async (data: any) => {
	console.log(data);

	try {
		let response: any = await axios.get(`/api/movies/containing?s=${data}`);
		console.log(response.data);

		return { type: MOVIES, payload: response.data };
	} catch (err) {
		return null;
	}
};

const searchByMovieId = async (data: any) => {
	console.log(data);

	try {
		let response: any = await axios.get(
			`http://www.omdbapi.com?i=${data}&apikey=cecc65d4`
		);
		console.log(response.data);

		return { type: SINGLE_MOVIE, payload: response.data };
	} catch (err) {
		return null;
	}
};

const getMovies = async () => {
	try {
		let response = await axios.get(`/api/movies/`);

		return { type: MOVIES, payload: response.data };
	} catch (err) {
		return null;
	}
};

export { loginUser, signupUser, searchByMovieName, getMovies, searchByMovieId };
