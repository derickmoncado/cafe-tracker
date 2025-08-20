import React from "react";
import styles from "./page-header.module.scss";

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
				<div className={styles["page-header__user__search"]}></div>
			</div>
		</div>
	);
}
