import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { auth } from "../Firebase/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const Header = (props) => {
	const { currentUser } = props;

	return (
		<header className="header">
			<div className="wrap">
				<Link to="/">
					<img src={logo} alt="logo"></img>
				</Link>
				<div className="callsToActions">
					{!currentUser ? (
						<div className="siginLinks">
							<Link to="/registration">
								<FontAwesomeIcon icon={faUserPlus} /> Register
							</Link>
							<Link to="/login">
								<FontAwesomeIcon icon={faSignInAlt} /> Login
							</Link>
						</div>
					) : (
						<div className="signoutLinks">
							<Link to="/" onClick={() => auth.signOut()}>
								<FontAwesomeIcon icon={faSignOutAlt} /> Logout
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
