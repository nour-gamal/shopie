import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import HomePage from "./components/Pages/HomePage";
import RegistrationPage from "./components/Pages/RegistrationPage/index";
import LoginPage from "./components/Pages/LoginPage/index";
import { auth, HandleUserProfile } from "./components/Firebase/utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "./default.scss";

class App extends Component {
	state = {
		currentUser: null,
	};

	authListener = null;

	componentDidMount() {
		this.authListener = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await HandleUserProfile(userAuth);
				userRef.onSnapshot((snapshot) => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			}
			this.setState({
				currentUser: null,
			});
		});
	}
	componentWillUnmount() {
		this.authListener();
	}
	render() {
		const { currentUser } = this.state;
		return (
			<div className="App">
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path="/" render={() => <HomePage />} />
					<Route path="/registration" render={() => <RegistrationPage />} />
					<Route
						path="/login"
						render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
					/>
				</Switch>
				<Footer />
			</div>
		);
	}
}
export default App;
