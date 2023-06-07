import React from "react";
import "./ExploreMenu.css";

const ExploreMenu = () => {

	return (
	<div className="menuContainer">
		<ul>
			<li className="menuItem">
				<div>Membership</div>
				<div className="dropDown">
					<div className="dropDownHeader">Why a membership?
					</div>
					<div className="dropDownHeader">Advantages</div>
				</div>
			</li>
			<li className="menuItem">
				<div>Bestsellers</div>
				<div className="dropDown"></div>
			</li>
			<li className="menuItem">
				<div>Fiction</div>
				<div className="dropDown"></div>
			</li>
			<li className="menuItem">
				<div>Non-fiction</div>
				<div className="dropDown"></div>
			</li>
			<li className="menuItem">
				<div>Academics</div>
				<div className="dropDown"></div>
			</li>
			<li className="menuItem">
				<div>Kids</div>
				<div className="dropDown"></div>
			</li>
			<li className="menuItem">
				<div>Explore</div>
				<div className="dropDown"></div>
			</li>
		</ul>
	</div>
	)
}

export default ExploreMenu;