import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface IconLabelProps {
  icon: LucideIcon;
  label: ReactNode;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
}

export default function IconLabel({
  icon: Icon,
  label,
  className = "",
  iconClassName = "",
  labelClassName = "",
}: IconLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Icon className={`h-5 w-5 shrink-0 text-sky-400 ${iconClassName}`} />

      <span className={labelClassName}>{label}</span>
    </div>
  );
}
