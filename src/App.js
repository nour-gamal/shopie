import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/index";
import HomePage from "./components/Pages/HomePage";
import Registration from "./components/Pages/Registration/index";
import Footer from "./components/Footer/index";

import "./default.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/registration" component={Registration} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
