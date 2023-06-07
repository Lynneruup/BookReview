import React from "react";
import "./ExploreMenu.css";

const ExploreMenu = () => {

	return (
	<div className="menuContainer">
		<ul className="actualList">
			<li className="menuItem">Membership
				<ul className="drop">
					<li className="listItem">Advantages</li>
					<li className="listItem">Student</li>
					<li className="listItem">Events</li>
				</ul>
			</li>
{			<li className="menuItem">Fiction
				<ul className="drop">
					<li className="listItem">Advantages</li>
					<li className="listItem">Student</li>
					<li className="listItem">Events</li>
				</ul>
			</li>}
{			<li className="menuItem">Non Fiction
				<ul className="drop">
					<li className="listItem">Advantages</li>
					<li className="listItem">Student</li>
				</ul>
			</li>}
		</ul>
	</div>
	)
}

export default ExploreMenu;