"use client";

import React, { useState } from "react";
import type { StatusFilter } from "@/types";
import PageHeader from "@/components/page-header/page-header";
import Entries from "@/components/entries/entries";

export default function Home() {
    const [filter, setFilter] = useState<StatusFilter | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    return (
        <div className="container">
            <PageHeader
                title={"All Entries"}
                activeStatusFilter={filter}
                onStatusFilterChange={setFilter}
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
            />
            <Entries statusFilter={filter} searchQuery={searchQuery} />
        </div>
    );
}
