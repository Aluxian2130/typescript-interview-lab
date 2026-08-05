import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "interactive";
}

export default function Card({
  children,
  className,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border bg-slate-900 p-6 shadow-lg",
        {
          "border-slate-800": variant === "default",
          "cursor-pointer border-slate-800 transition-all hover:-translate-y-1 hover:border-sky-500 hover:shadow-xl":
            variant === "interactive",
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
