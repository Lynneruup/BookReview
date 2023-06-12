import React from "react";
import {NavLink, Outlet} from "react-router-dom";

export default function RootLayout() {
	return (
		<div>
			<div className="navContainer">
				<div className="navLogo">{<img src="/Logo.png"></img>}</div>
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

			<main>
				<Outlet />
			</main>
		</div>
	)
}