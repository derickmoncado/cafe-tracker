"use client";

import React from "react";
import styles from "./page-header.module.scss";
import { Search, User } from "lucide-react";

type StatusFilter = "Visited" | "Not Visited" | "Scheduled";

type PageHeaderProps = {
	title: string;
	activeFilter?: StatusFilter | null;
	onFilterChange?: (filter: StatusFilter | null) => void;
};

export default function PageHeader({ title, activeFilter = null, onFilterChange }: PageHeaderProps) {
	const handleClick = (filter: StatusFilter) => {
		if (!onFilterChange) return;
		// Toggle off if clicking the active filter
		onFilterChange(activeFilter === filter ? null : filter);
	};

	return (
		<div className={styles["page-header"]}>
			<div className={styles["page-header__title"]}>
				<h2>{title}</h2>
				<div className={styles["page-header__title__filters"]}>
					<button type="button" className={activeFilter === "Visited" ? styles["active"] : undefined} onClick={() => handleClick("Visited")}>
						Visited
					</button>
					<button type="button" className={activeFilter === "Not Visited" ? styles["active"] : undefined} onClick={() => handleClick("Not Visited")}>
						Not Visited
					</button>
					<button type="button" className={activeFilter === "Scheduled" ? styles["active"] : undefined} onClick={() => handleClick("Scheduled")}>
						Scheduled
					</button>
				</div>
			</div>

			<div className={styles["page-header__user"]}>
				<div className={styles["page-header__user__profile"]}>
					<div className={styles["page-header__user__profile__name-and-location"]}>
						<p className={styles["name"]}>Derick Moncado</p>
						<p className={styles["location"]}>Los Angeles, CA</p>
					</div>
					<div className={styles["page-header__user__profile__photo"]}>
						<User />
					</div>
				</div>
				<div className={styles["page-header__user__search"]}>
					<input type="text" placeholder="Search entries..." />
					<Search />
				</div>
			</div>
		</div>
	);
}
