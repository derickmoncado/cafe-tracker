"use client";

import React from "react";
import styles from "./entry.module.scss";
import { Star } from "lucide-react";
import type { Status, Rating } from "@/types";

type EntryListItemProps = {
	name: string;
	status: Status;
	address: string;
	date: string;
	rating: Rating; // 0-5
};

export default function Entry({ name, status = "Not Visited", address, date, rating }: EntryListItemProps) {
    const statusModifierClass = styles[status.toLowerCase().replace(/\s/g, "-")];
    const entryClassName = `${styles["entry"]} ${statusModifierClass}`;
    return (
        <li className={entryClassName}>
            <span className={styles["name"]}>{name}</span>
			<span className={styles["status"]}>{status}</span>
			<span className={styles["address"]}>{address}</span>
			<span className={styles["date"]}>{date}</span>
			<span className={styles["rating"]}>
				{[...Array(5)].map((_, starIndex) => (
					<Star
						key={starIndex}
						fill={starIndex < rating ? "#000" : "none"}
						stroke={starIndex < rating ? "#000" : "#000"}
					/>
				))}
			</span>
		</li>
	);
}
