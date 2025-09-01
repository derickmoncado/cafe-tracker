"use client";

import PageHeader from "@/components/page-header/page-header";
import React, { useState } from "react";
import Entries from "@/components/entries/entries";

export default function Home() {
	const [filter, setFilter] = useState<"Visited" | "Not Visited" | "Scheduled" | null>(null);
	return (
		<div className="container">
			<PageHeader title={"All Entries"} activeFilter={filter} onFilterChange={setFilter} />
			<Entries filter={filter} />
		</div>
	);
}
