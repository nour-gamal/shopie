import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import logo from "../../assets/logo.png";
const Header = (props) => {
	return (
		<header className="header">
			<div className="wrap">
				<Link to="/">
					<img src={logo} alt="logo"></img>
				</Link>
				<Link className="callsToActions" to="/registration">
					Register
				</Link>
			</div>
		</header>
	);
};

export default Header;
