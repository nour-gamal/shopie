import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
	return (
		<header className="header">
			<div className="wrap">
				<Link to="/">
					<img src={logo} alt="logo"></img>
				</Link>
				<div className="callsToActions">
					<Link to="/registration">
						<FontAwesomeIcon icon={faUserPlus} /> Register
					</Link>
					<Link to="/signin">
						<FontAwesomeIcon icon={faSignInAlt} /> Sign iN
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
