import React from "react";
import styles from "./page-header.module.scss";
import { Search, User } from "lucide-react";

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
					<div
						className={
							styles[
								"page-header__user__profile__name-and-location"
							]
						}
					>
						<p className={styles["name"]}>Derick Moncado</p>
						<p className={styles["location"]}>Los Angeles, CA</p>
					</div>
					<div
						className={styles["page-header__user__profile__photo"]}
					>
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
