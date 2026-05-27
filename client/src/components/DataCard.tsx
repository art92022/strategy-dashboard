import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DataCardProps {
  icon?: ReactNode;
  title: string;
  value?: string | number;
  unit?: string;
  description?: string;
  color?: "blue" | "amber" | "green" | "red";
  variant?: "default" | "compact" | "highlight";
  className?: string;
}

const colorMap = {
  blue: "border-l-blue-600 bg-blue-50 text-blue-900",
  amber: "border-l-amber-500 bg-amber-50 text-amber-900",
  green: "border-green-500 bg-green-50 text-green-900",
  red: "border-l-red-500 bg-red-50 text-red-900",
};

const variantMap = {
  default: "p-6 rounded-xl border-l-4 shadow-sm hover:shadow-md transition-shadow",
  compact: "p-4 rounded-lg border-l-4 shadow-sm",
  highlight: "p-8 rounded-2xl border-l-4 shadow-lg hover:shadow-xl transition-all",
};

export function DataCard({
  icon,
  title,
  value,
  unit,
  description,
  color = "blue",
  variant = "default",
  className,
}: DataCardProps) {
  return (
    <div
      className={cn(
        "bg-white transition-all duration-200 hover:translate-y-[-2px]",
        variantMap[variant],
        colorMap[color],
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-sm md:text-base">{title}</h3>
        {icon && <div className="text-xl opacity-60">{icon}</div>}
      </div>

      {value !== undefined && (
        <div className="mb-2">
          <span className="text-2xl md:text-3xl font-bold">{value}</span>
          {unit && <span className="text-xs md:text-sm ml-1 opacity-70">{unit}</span>}
        </div>
      )}

      {description && (
        <p className="text-xs md:text-sm opacity-75 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
