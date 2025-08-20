import React from "react";
import styles from "./page-header.module.scss";
import { Search } from "lucide-react";

export default function PageHeader() {
	return (
		<div className={styles["page-header"]}>
			<div className={styles["page-header__title"]}>
				<h2>All Entries</h2>
				<div className={styles["page-header__title__filters"]}>
					filters go here
				</div>
			</div>

			<div className={styles["page-header__user"]}>
				<div className={styles["page-header__user__profile"]}>
					user stuff here
				</div>
				<div className={styles["page-header__user__search"]}>
					<input type="text" placeholder="Search entries..." />
					<Search className="search-icon" />
				</div>
			</div>
		</div>
	);
}
