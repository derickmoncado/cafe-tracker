import React from "react";
import styles from "./navigation.module.scss";

export default function Navigation() {
	return (
		<nav className={styles.navigation}>
			<ul>
				<li>
					<a href="/">All Entries</a>
				</li>
				<li>
					<a href="/coffee-shops">Coffee Shops</a>
				</li>
				<li>
					<a href="/bars-lounges">Bars & Lounges</a>
				</li>
				<li>
					<a href="/restaurants">Restaurants</a>
				</li>
			</ul>
		</nav>
	);
}
