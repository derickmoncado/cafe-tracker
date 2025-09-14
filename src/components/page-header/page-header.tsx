"use client";

import React from "react";
import styles from "./page-header.module.scss";
import { Search, User, X } from "lucide-react";
import type { StatusFilter } from "@/types";

type PageHeaderProps = {
	title: string;
	activeStatusFilter?: StatusFilter | null;
	onStatusFilterChange?: (nextStatus: StatusFilter | null) => void;
	searchQuery?: string;
	onSearchQueryChange?: (value: string) => void;
};

export default function PageHeader({ title, activeStatusFilter = null, onStatusFilterChange, searchQuery = "", onSearchQueryChange }: PageHeaderProps) {
	const handleStatusFilterClick = (clickedStatus: StatusFilter) => {
		if (!onStatusFilterChange) return;
		// Toggle off if clicking the active status filter
		onStatusFilterChange(activeStatusFilter === clickedStatus ? null : clickedStatus);
	};

	return (
		<div className={styles["page-header"]}>
			<div className={styles["page-header__title"]}>
				<h2>{title}</h2>
				<div className={styles["page-header__title__filters"]}>
					<button type="button" className={activeStatusFilter === "Visited" ? styles["active"] : undefined} onClick={() => handleStatusFilterClick("Visited")}>
						Visited
					</button>
					<button type="button" className={activeStatusFilter === "Not Visited" ? styles["active"] : undefined} onClick={() => handleStatusFilterClick("Not Visited")}>
						Not Visited
					</button>
					<button type="button" className={activeStatusFilter === "Scheduled" ? styles["active"] : undefined} onClick={() => handleStatusFilterClick("Scheduled")}>
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
					<input type="text" name="Search entries" placeholder="Search entries..." value={searchQuery} onChange={(e) => onSearchQueryChange?.(e.target.value)} />
					{searchQuery && (
						<button type="button" aria-label="Clear search" className={styles["clear-btn"]} onClick={() => onSearchQueryChange?.("")}>
							<X />
						</button>
					)}
					<Search className={styles["search-icon"]} />
				</div>
			</div>
		</div>
	);
}
