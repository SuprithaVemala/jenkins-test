import { createStore, combineReducers } from "redux";
import { moviesReducer, userReducer } from "../reducers/reducers";

const combinedReducer = combineReducers({
	user: userReducer,
	movies: moviesReducer,
});

const store = createStore(combinedReducer);
console.log(store.getState());

export { store };
