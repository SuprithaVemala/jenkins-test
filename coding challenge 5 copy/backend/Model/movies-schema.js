"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var movieSchema = new mongoose.Schema({
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
var movies = mongoose.model("movies", movieSchema);
exports.default = movies;
