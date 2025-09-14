"use client";

import React from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee, Martini, Rows4, Utensils } from "lucide-react";

export default function Navigation() {
	const currentPath = usePathname();
	const getActiveClass = (path: string) => (currentPath === path ? styles.active : undefined);

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
					<Link href="/" className={getActiveClass("/")}>
						<Rows4 /> All Entries
					</Link>
				</li>
				<li>
					<Link href="/coffee-shops" className={getActiveClass("/coffee-shops")}>
						<Coffee /> Coffee Shops
					</Link>
				</li>
				<li>
					<Link href="/bars-lounges" className={getActiveClass("/bars-lounges")}>
						<Martini /> Bars & Lounges
					</Link>
				</li>
				<li>
					<Link href="/restaurants" className={getActiveClass("/restaurants")}>
						<Utensils /> Restaurants
					</Link>
				</li>
			</ul>
		</nav>
	);
}
