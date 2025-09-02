"use client";

import React from "react";
import styles from "./page-header.module.scss";
import { Search, User, X } from "lucide-react";
import type { StatusFilter } from "@/types/status";

type PageHeaderProps = {
    title: string;
    activeFilter?: StatusFilter | null;
    onFilterChange?: (filter: StatusFilter | null) => void;
    searchQuery?: string;
    onSearchChange?: (value: string) => void;
};

export default function PageHeader({ title, activeFilter = null, onFilterChange, searchQuery = "", onSearchChange }: PageHeaderProps) {
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
                <input
                    type="text"
                    placeholder="Search entries..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                />
                {searchQuery && (
                    <button
                        type="button"
                        aria-label="Clear search"
                        className={styles["clear-btn"]}
                        onClick={() => onSearchChange?.("")}
                    >
                        <X />
                    </button>
                )}
                <Search className={styles["search-icon"]} />
            </div>
			</div>
		</div>
	);
}
