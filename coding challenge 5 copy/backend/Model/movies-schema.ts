const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
	imdbID: {
		type: String,
	},
	Title: {
		type: String,
	},

	Poster: {
		type: String,
	},
	Year: {
		type: String,
	},
	Type: {
		type: String,
	},
});

const movies = mongoose.model("movies", movieSchema);

export default movies;
