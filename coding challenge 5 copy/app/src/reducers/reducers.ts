import {
	LOGGED_IN,
	LOGGED_OUT,
	USER_PROFILE,
	SEARCH_MOVIE,
	MOVIES,
	SINGLE_MOVIE,
} from "../store/constants";

const initialStateOfUser = {
	loggedInUser: "",
	userProfile: [],
};
const userReducer = (currentState = initialStateOfUser, action: any): any => {
	switch (action.type) {
		case LOGGED_IN:
			return {
				...currentState,
				loggedInUser: action.payload,
			};
		case LOGGED_OUT:
			return {
				...currentState,
				loggedInUser: action.payload,
			};
		case USER_PROFILE:
			return {
				...currentState,
				userProfile: action.payload,
			};
		default:
			return currentState;
	}
};

const initialStateOfMovie = {
	movies: [],
	searchedParams: "",
	oneMovie: {},
};

const moviesReducer = (
	currentState = initialStateOfMovie,
	action: any
): any => {
	switch (action.type) {
		case MOVIES:
			return {
				...currentState,
				movies: action.payload,
			};

		case SINGLE_MOVIE:
			return {
				...currentState,
				oneMovie: action.payload,
			};

		case SEARCH_MOVIE:
			console.log(action.payload);
			return {
				...currentState,
				searchedParams: action.payload,
			};

		default:
			return currentState;
	}
};

export { userReducer, moviesReducer };
