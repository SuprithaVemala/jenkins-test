"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var movies_controller_1 = require("../Controller/movies-controller");
var moviesRouter = express_1.default.Router();
//Route for getting all the users
moviesRouter
    .get("/", movies_controller_1.getAllMovies)
    .get("/containing", movies_controller_1.searchMovieName)
    .get("/containing/imdb", movies_controller_1.searchMovieByImdbId);
exports.default = moviesRouter;
