import React from "react";
import "./Navbar.css";

const Navbar = () => {

	return (
	<div className="navContainer">
		<div className="navLogo"><img src="/book.png"></img><a>Bøøk</a></div>
		<div className="navSearch"><input type="text" placeholder="Search books"></input></div>
		<div className="navAccount">
			<div className="logInSection">
				<img src="/avatar.png"></img>
				<h3>Log In</h3>
			</div>
			<div className="logInSection">
				<img src="/avatar.png"></img>
				<h3>Opret bruger</h3>
			</div>
		</div>
	</div>
	)
}

export default Navbar;