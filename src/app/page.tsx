"use client";

import React, { useState } from "react";
import type { StatusFilter } from "@/types/status";
import PageHeader from "@/components/page-header/page-header";
import Entries from "@/components/entries/entries";

export default function Home() {
    const [filter, setFilter] = useState<StatusFilter | null>(null);
	return (
		<div className="container">
			<PageHeader title={"All Entries"} activeFilter={filter} onFilterChange={setFilter} />
			<Entries filter={filter} />
		</div>
	);
}
