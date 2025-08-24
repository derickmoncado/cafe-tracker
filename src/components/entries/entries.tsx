import React from "react";
import styles from "./entries.module.scss";
import { Star } from "lucide-react";

export default function Entries() {
	return (
		<section className={styles["entries"]}>
			<details>
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
					<li className={styles["entry-item"]}>
						<span className={styles["name"]}>Bodega Park</span>
						<span className={styles["status"]}>Visited</span>
						<span className={styles["address"]}>
							2852 W Sunset Blvd, Los Angeles, CA 90026
						</span>
						<span className={styles["date"]}>4/13/2015</span>
						<span className={styles["rating"]}>
							<Star />
							<Star />
							<Star />
							<Star />
							<Star />
						</span>
					</li>
				</ul>
			</details>
		</section>
	);
}
