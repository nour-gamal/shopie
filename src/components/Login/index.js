import React, { Component } from "react";
import "./styles.scss";
import { SignInWithGoogle } from "../Firebase/utils";
class Login extends Component {
	submitHandler = (e) => {
		e.preventDefault();
	};
	render(props) {
		return (
			<div className="login">
				<form onSubmit={this.submitHandler} className="loginForm">
					<h1>Social Login</h1>
					<button onClick={SignInWithGoogle}>Sign in with google </button>
				</form>
			</div>
		);
	}
}

export default Login;
