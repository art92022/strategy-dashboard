import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StrategyCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  before: string;
  after: string;
  improvement: string;
  description: string;
  className?: string;
}

export function StrategyCard({
  title,
  subtitle,
  icon,
  before,
  after,
  improvement,
  description,
  className,
}: StrategyCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="text-3xl md:text-4xl opacity-60 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
      </div>

      {/* Before/After Comparison */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <p className="text-xs text-red-600 font-semibold mb-1">BEFORE</p>
          <p className="text-sm font-medium text-red-900">{before}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-xs text-green-600 font-semibold mb-1">AFTER</p>
          <p className="text-sm font-medium text-green-900">{after}</p>
        </div>
      </div>

      {/* Improvement Badge */}
      <div className="mb-4 inline-block">
        <span className="bg-amber-100 text-amber-800 text-xs md:text-sm font-bold px-3 py-1 rounded-full">
          改善幅度: {improvement}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
