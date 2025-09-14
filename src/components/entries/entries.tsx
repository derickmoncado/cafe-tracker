"use client";

import React from "react";
import styles from "./entries.module.scss";
import Entry from "../entry/entry";
import rawEntries from "@/data/entries.json";
import type { StatusFilter, Category, Entry as EntryModel } from "@/types";
import { isEntry } from "@/types/guards";

type EntriesProps = {
	statusFilter?: StatusFilter | null;
	searchQuery?: string;
	category?: Category | null;
};

export default function Entries({ statusFilter = null, searchQuery = "", category = null }: EntriesProps) {
	const validatedEntries: EntryModel[] = (rawEntries as unknown[]).filter((entry): entry is EntryModel => isEntry(entry));
	const normalizedSearchQuery = searchQuery.trim().toLowerCase();
	const entriesFilteredByCategory = category ? validatedEntries.filter((entry) => entry.category === category) : validatedEntries;
	const entriesFilteredByStatus = statusFilter ? entriesFilteredByCategory.filter((entry) => entry.status === statusFilter) : entriesFilteredByCategory;
	const entriesMatchingSearchQuery = normalizedSearchQuery ? entriesFilteredByStatus.filter((entry) => entry.name.toLowerCase().includes(normalizedSearchQuery)) : entriesFilteredByStatus;
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
					{entriesMatchingSearchQuery.map((entry) => (
						<Entry key={entry.id} name={entry.name} status={entry.status} address={entry.address} date={entry.date} rating={entry.rating} />
					))}
				</ul>
			</details>
		</section>
	);
}
