"use client";

import React from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee, Martini, Rows4, Utensils } from "lucide-react";

export default function Navigation() {
	const pathname = usePathname();

	return (
		<nav className={styles.navigation}>
			<div className={styles.logo}>
				<Link href="/">
					<h1>CafeTracker</h1>
					<p>Track, rate & review your favorite spots</p>
				</Link>
			</div>
			<ul>
				<li>
					<Link
						href="/"
						className={pathname === "/" ? styles.active : undefined}
					>
						<Rows4 /> All Entries
					</Link>
				</li>
				<li>
					<Link
						href="/coffee-shops"
						className={
							pathname === "/coffee-shops"
								? styles.active
								: undefined
						}
					>
						<Coffee /> Coffee Shops
					</Link>
				</li>
				<li>
					<Link
						href="/bars-lounges"
						className={
							pathname === "/bars-lounges"
								? styles.active
								: undefined
						}
					>
						<Martini /> Bars & Lounges
					</Link>
				</li>
				<li>
					<Link
						href="/restaurants"
						className={
							pathname === "/restaurants"
								? styles.active
								: undefined
						}
					>
						<Utensils /> Restaurants
					</Link>
				</li>
			</ul>
		</nav>
	);
}
