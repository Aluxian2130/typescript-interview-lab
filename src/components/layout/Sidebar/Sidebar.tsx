import { navigationGroups } from "@/shared/data/navigation";

import SidebarGroup from "./SidebarGroup";

export default function Sidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-slate-800 bg-slate-950 p-4">
      <div className="space-y-8">
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.id} group={group} />
        ))}
      </div>
    </aside>
  );
}
