import React from "react";
import styles from "./entries.module.scss";
import Entry from "../entry/entry";

export default function Entries() {
	return (
		<section className={styles["entries"]}>
			<details open>
				<summary>
					<h2>Entries</h2>
				</summary>

				<div className={styles["entry-headings"]}>
					<span className={styles["name"]}>Name</span>
					<span className={styles["status"]}>Status</span>
					<span className={styles["address"]}>Address</span>
					<span className={styles["date"]}>Date</span>
					<span className={styles["rating"]}>Rating</span>
				</div>

				<ul className={styles["entry-list"]}>
					<Entry name={"Bodega Park"} status={"Not Visited"} address={"123 Fake St. Silver Lake, CA 90027"} date={"4/13/2024"} rating={3} />
				</ul>
			</details>
		</section>
	);
}
