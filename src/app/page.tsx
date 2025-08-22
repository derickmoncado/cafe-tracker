import PageHeader from "@/components/page-header/page-header";
import React from "react";
import Entries from "@/components/entries/entries";

export default function Home() {
	return (
		<div className="container">
			<PageHeader />
			<Entries />
		</div>
	);
}
