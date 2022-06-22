import React from "react";
import classes from "./Navbar.module.css";
import profileImage from "./profile.svg";

function Navbar() {
	return (
		<header>
			<nav className={classes.Container + " navbar"}>
				<h4>
					English<span className="primary_text">4</span>Kids
				</h4>
				<div className="userContent">
					<span className="primary_text">mohamed</span>
					<img className="rounded" src={profileImage}></img>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
