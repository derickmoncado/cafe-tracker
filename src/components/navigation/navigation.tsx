import React from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";

export default function Navigation() {
	return (
		<nav className={styles.navigation}>
			<div className="logo">
				<Link href="/">
					<h1>CafeTracker</h1>
					<p>Track, rate & review your favorite spots</p>
				</Link>
			</div>
			<ul>
				<li>
					<Link href="/">All Entries</Link>
				</li>
				<li>
					<Link href="/coffee-shops">Coffee Shops</Link>
				</li>
				<li>
					<Link href="/bars-lounges">Bars & Lounges</Link>
				</li>
				<li>
					<Link href="/restaurants">Restaurants</Link>
				</li>
			</ul>
		</nav>
	);
}
