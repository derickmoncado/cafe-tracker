"use client";

import React from "react";
import styles from "./entries.module.scss";
import Entry from "../entry/entry";
import entries from "@/data/entries.json";
import type { StatusFilter } from "@/types/status";

type EntriesProps = {
    filter?: StatusFilter | null;
    searchQuery?: string;
};

export default function Entries({ filter = null, searchQuery = "" }: EntriesProps) {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const byStatus = filter ? entries.filter((e) => e.status === filter) : entries;
    const filteredEntries = normalizedQuery
        ? byStatus.filter((e) => e.name.toLowerCase().includes(normalizedQuery))
        : byStatus;
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
					{filteredEntries.map((entry) => (
						<Entry key={entry.id as any} name={entry.name} status={entry.status as "Favorite" | "Visited" | "Not Visited" | "Scheduled"} address={entry.address} date={entry.date} rating={entry.rating} />
					))}
				</ul>
			</details>
		</section>
	);
}
