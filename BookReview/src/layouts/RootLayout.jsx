import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function RootLayout() {
	return (
		<div>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
				<Navbar />
				<main>
					<Outlet />
				</main>


			<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
		</div>
	)
}