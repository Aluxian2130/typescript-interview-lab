import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-emerald-200
        bg-emerald-500
        p-6
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}
