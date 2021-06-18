import express from "express";
import {
	getAllMovies,
	searchMovieByImdbId,
	searchMovieName,
} from "../Controller/movies-controller";
const moviesRouter = express.Router();

//Route for getting all the users
moviesRouter
	.get("/", getAllMovies)
	.get("/containing", searchMovieName)
	.get("/containing/imdb", searchMovieByImdbId);

export default moviesRouter;
