import type { Status } from "./status";
import type { Category } from "./category";

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export type Entry = {
  id: number;
  name: string;
  status: Status;
  address: string;
  date: string;
  rating: Rating;
  category: Category;
};

export type { Status } from "./status";
