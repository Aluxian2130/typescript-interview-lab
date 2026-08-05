import clsx from "clsx";
import { NavLink } from "react-router-dom";

import IconLabel from "@/components/ui/Card/IconLabel";
import type { NavigationItem } from "@/shared/types";

interface SidebarItemProps {
  item: NavigationItem;
}

export default function SidebarItem({ item }: SidebarItemProps) {
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        clsx(
          "block rounded-lg px-3 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none",
          isActive
            ? "bg-sky-500/15 text-sky-300"
            : "text-slate-400 hover:bg-slate-800 hover:text-slate-100",
        )
      }
    >
      <IconLabel
        icon={item.icon}
        label={item.title}
        iconClassName="h-4 w-4"
        labelClassName="font-medium"
      />
    </NavLink>
  );
}
