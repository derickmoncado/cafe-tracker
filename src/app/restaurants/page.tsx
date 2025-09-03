"use client";

import React, { useState } from "react";
import type { StatusFilter } from "@/types";
import PageHeader from "@/components/page-header/page-header";
import Entries from "@/components/entries/entries";

export default function Restaurants() {
    const [filter, setFilter] = useState<StatusFilter | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    return (
        <div className="container">
            <PageHeader
                title={"Restaurants"}
                activeFilter={filter}
                onFilterChange={setFilter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />
            <Entries filter={filter} searchQuery={searchQuery} category={"Restaurant"} />
        </div>
    );
}
