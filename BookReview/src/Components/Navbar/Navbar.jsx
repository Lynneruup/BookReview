import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

	return (
	<div className="navContainer">
		<div className="logoAndMenu">
			<div className="navLogo">{<img src="/Logo.png"></img>}</div>
			<ul className="menuList">
				<NavLink to="/">Home</NavLink>
				<NavLink to="about">About</NavLink>
				<NavLink to="fiction">More</NavLink>
			</ul>
		</div>
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