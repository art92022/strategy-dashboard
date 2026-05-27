import { useState } from "react";

interface ComparisonItem {
  label: string;
  current: string;
  target: string;
  icon: string;
}

const comparisonData: ComparisonItem[] = [
  {
    label: "營運模式",
    current: "日式無菜單料理",
    target: "海底撈可複製模式",
    icon: "🍱",
  },
  {
    label: "人工密度",
    current: "8 分鐘/顆",
    target: "3-4 分鐘/顆",
    icon: "👥",
  },
  {
    label: "月營收",
    current: "112 萬",
    target: "250 萬+",
    icon: "💰",
  },
  {
    label: "毛利率",
    current: "負數",
    target: "30-40%",
    icon: "📈",
  },
];

export function ComparisonSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-8">
      {/* Slider Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {comparisonData.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
              activeIndex === idx
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Comparison Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* Current State */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-red-50 to-orange-50">
            <p className="text-sm font-semibold text-red-600 mb-2">目前狀況</p>
            <div className="text-5xl mb-4">{comparisonData[activeIndex].icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-4">
              {comparisonData[activeIndex].current}
            </h3>
            <p className="text-sm text-red-700">
              高成本、低效率、難以規模化
            </p>
          </div>

          {/* Target State */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-emerald-50">
            <p className="text-sm font-semibold text-green-600 mb-2">目標狀態</p>
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
              {comparisonData[activeIndex].target}
            </h3>
            <p className="text-sm text-green-700">
              可複製、高效率、可持續獲利
            </p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-6 bg-gradient-to-r from-red-100 via-yellow-100 to-green-100">
          <div className="text-3xl animate-bounce">→</div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-gray-600">
          {activeIndex + 1} / {comparisonData.length}
        </span>
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / comparisonData.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
