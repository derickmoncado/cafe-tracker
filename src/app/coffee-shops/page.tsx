"use client";

import React, { useState } from "react";
import type { StatusFilter } from "@/types/status";
import PageHeader from "@/components/page-header/page-header";
import Entries from "@/components/entries/entries";

export default function CoffeeShops() {
    const [filter, setFilter] = useState<StatusFilter | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    return (
        <div className="container">
            <PageHeader
                title={"Coffee Shops"}
                activeFilter={filter}
                onFilterChange={setFilter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />
            <Entries filter={filter} searchQuery={searchQuery} category={"Coffee Shop"} />
        </div>
    );
}
