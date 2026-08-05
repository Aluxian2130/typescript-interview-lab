import SidebarGroup from "./SideBarGroup";
import { navigationGroups } from "@/shared/data/navigation";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-950 p-4">
      <div className="space-y-8">
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.id} group={group} />
        ))}
      </div>
    </aside>
  );
}
