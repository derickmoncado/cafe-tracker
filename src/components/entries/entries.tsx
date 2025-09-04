"use client";

import React from "react";
import styles from "./entries.module.scss";
import Entry from "../entry/entry";
import entries from "@/data/entries.json";
import type { StatusFilter, Category, Entry as EntryModel } from "@/types";
import { isEntry } from "@/types/guards";

type EntriesProps = {
	filter?: StatusFilter | null;
	searchQuery?: string;
	category?: Category | null;
};

export default function Entries({ filter = null, searchQuery = "", category = null }: EntriesProps) {
	const data: EntryModel[] = (entries as unknown[]).filter((e): e is EntryModel => isEntry(e));
	const normalizedQuery = searchQuery.trim().toLowerCase();
	const byCategory = category ? data.filter((e) => e.category === category) : data;
	const byStatus = filter ? byCategory.filter((e) => e.status === filter) : byCategory;
	const filteredEntries = normalizedQuery ? byStatus.filter((e) => e.name.toLowerCase().includes(normalizedQuery)) : byStatus;
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
						<Entry key={entry.id} name={entry.name} status={entry.status} address={entry.address} date={entry.date} rating={entry.rating} />
					))}
				</ul>
			</details>
		</section>
	);
}
