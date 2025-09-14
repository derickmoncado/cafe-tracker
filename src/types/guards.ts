import type { Status, Category, Rating, Entry } from "@/types";

export const STATUSES: Status[] = ["Visited", "Not Visited", "Scheduled", "Favorite"];
export const CATEGORIES: Category[] = ["Coffee Shop", "Restaurant", "Bar"];

export function isStatus(val: unknown): val is Status {
  return typeof val === "string" && (STATUSES as readonly string[]).includes(val);
}

export function isCategory(val: unknown): val is Category {
  return typeof val === "string" && (CATEGORIES as readonly string[]).includes(val);
}

export function isRating(val: unknown): val is Rating {
  return typeof val === "number" && Number.isInteger(val) && val >= 0 && val <= 5;
}

export function isEntry(obj: unknown): obj is Entry {
  if (typeof obj !== "object" || obj === null) return false;
  const candidate = obj as Record<string, unknown>;
  return (
    typeof candidate.id === "number" &&
    typeof candidate.name === "string" &&
    isStatus(candidate.status) &&
    typeof candidate.address === "string" &&
    typeof candidate.date === "string" &&
    isRating(candidate.rating) &&
    isCategory(candidate.category)
  );
}
