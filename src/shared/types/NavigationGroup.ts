import type { NavigationItem } from "./NavigationItem";

export interface NavigationGroup {
  id: string;
  title?: string;
  items: NavigationItem[];
}
