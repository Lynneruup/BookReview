import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function RootLayout() {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</div>
	)
}