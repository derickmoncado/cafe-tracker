import React from "react";
import styles from "./entry.module.scss";
import { Star } from "lucide-react";

export default function Entry() {
	return (
		<>
			<li className={`${styles["entry"]} ${styles["favorite"]}`}>
				<span className={styles["name"]}>Bodega Park</span>
				<span className={styles["status"]}>Favorite</span>
				<span className={styles["address"]}>
					2852 W Sunset Blvd, Los Angeles, CA 90026
				</span>
				<span className={styles["date"]}>4/15/2025</span>
				<span className={styles["rating"]}>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</span>
			</li>
		</>
	);
}
