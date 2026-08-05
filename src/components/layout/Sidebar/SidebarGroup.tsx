import type { NavigationGroup } from "@/shared/types";

import SidebarItem from "./SidebarItem";

interface SidebarGroupProps {
  group: NavigationGroup;
}

export default function SidebarGroup({ group }: SidebarGroupProps) {
  return (
    <section className="space-y-2">
      {group.title && (
        <h2 className="px-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
          {group.title}
        </h2>
      )}

      <nav className="space-y-1" aria-label={group.title ?? "Navigation"}>
        {group.items.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </nav>
    </section>
  );
}
