import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/loginPage/login";
import Signup from "./component/signupPage/signupForm";
import Header from "./component/header/header";
import { CardComponent } from "./component/displayDetails/Details";
import { SearchMovies } from "./component/search/search";
import AppError from "./component/Errorpage/error";
import SingleCard from "./component/SingleCard/singleCard";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
					<Route exact path="/home">
						<Header />
						<CardComponent />
					</Route>
					<Route exact path="/search">
						<Header />
						<SearchMovies />
					</Route>
					<Route exact path="/details">
						<Header />
						<SingleCard />
					</Route>
					<Route exact path="/error">
						<AppError />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
