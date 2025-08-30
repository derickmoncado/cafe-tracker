import React from "react";
import styles from "./entry.module.scss";
import { Star } from "lucide-react";

type EntryProps = {
	name: string;
	status: "Favorite" | "Visited" | "Not Visited" | "Scheduled";
	address: string;
	date: string;
	rating: number; // 0-5
};

export default function Entry({ name, status = "Not Visited", address, date, rating }: EntryProps) {
	return (
		<li className={`${styles["entry"]} ${styles[status.toLowerCase().replace(/\s/g, "-")]}`}>
			<span className={styles["name"]}>{name}</span>
			<span className={styles["status"]}>{status}</span>
			<span className={styles["address"]}>{address}</span>
			<span className={styles["date"]}>{date}</span>
			<span className={styles["rating"]}>
				{[...Array(5)].map((_, i) => (
					<Star key={i} fill={i < rating ? "#000" : "none"} stroke={i < rating ? "#000" : "#000"} />
				))}
			</span>
		</li>
	);
}
