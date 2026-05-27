import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface KPIData {
  name: string;
  current: number;
  target: number;
  unit: string;
}

const sampleKPIData: KPIData[] = [
  { name: "SKU 集中度", current: 40, target: 60, unit: "%" },
  { name: "包裝工時", current: 100, target: 20, unit: "%" },
  { name: "報廢率", current: 100, target: 50, unit: "%" },
  { name: "園區訂單", current: 20, target: 50, unit: "%" },
  { name: "常溫營收", current: 0, target: 30, unit: "%" },
  { name: "大蛋糕占比", current: 0, target: 10, unit: "%" },
];

const timelineData = [
  { month: "5月", value: 112 },
  { month: "6月", value: 135 },
  { month: "7月", value: 168 },
  { month: "8月", value: 195 },
  { month: "9月", value: 220 },
  { month: "10月", value: 250 },
];

export function KPIDashboard() {
  const [activeTab, setActiveTab] = useState<"progress" | "timeline" | "breakdown">("progress");

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex gap-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("progress")}
          className={`pb-4 px-4 font-semibold transition-colors ${
            activeTab === "progress"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          進度對比
        </button>
        <button
          onClick={() => setActiveTab("timeline")}
          className={`pb-4 px-4 font-semibold transition-colors ${
            activeTab === "timeline"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          營收預測
        </button>
        <button
          onClick={() => setActiveTab("breakdown")}
          className={`pb-4 px-4 font-semibold transition-colors ${
            activeTab === "breakdown"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          目標分佈
        </button>
      </div>

      {/* Progress Chart */}
      {activeTab === "progress" && (
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-6">KPI 進度對比</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={sampleKPIData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="current" fill="#ef4444" name="目前" radius={[8, 8, 0, 0]} />
              <Bar dataKey="target" fill="#10b981" name="目標" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          {/* Progress Bars */}
          <div className="mt-12 space-y-6">
            {sampleKPIData.map((kpi, idx) => {
              const progress = (kpi.current / kpi.target) * 100;
              return (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">{kpi.name}</span>
                    <span className="text-sm text-gray-600">
                      {kpi.current}/{kpi.target} {kpi.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-red-500 via-amber-500 to-green-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Timeline Chart */}
      {activeTab === "timeline" && (
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-6">營收預測 (策略實施後)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#1e40af"
                strokeWidth={3}
                dot={{ fill: "#1e40af", r: 6 }}
                activeDot={{ r: 8 }}
                name="預測營收 (萬元)"
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <p className="text-sm text-blue-600 font-semibold mb-2">起始營收</p>
              <p className="text-3xl font-bold text-blue-900">112 萬</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <p className="text-sm text-amber-600 font-semibold mb-2">預計增長</p>
              <p className="text-3xl font-bold text-amber-900">+123%</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <p className="text-sm text-green-600 font-semibold mb-2">目標營收</p>
              <p className="text-3xl font-bold text-green-900">250 萬</p>
            </div>
          </div>
        </div>
      )}

      {/* Breakdown Chart */}
      {activeTab === "breakdown" && (
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-6">策略實施優先級分佈</h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={[
                  { name: "立即啟動", value: 30, color: "#ef4444" },
                  { name: "進行中", value: 40, color: "#f59e0b" },
                  { name: "待啟動", value: 30, color: "#3b82f6" },
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label={({ name, value }) => `${name} ${value}%`}
              >
                {[
                  { color: "#ef4444" },
                  { color: "#f59e0b" },
                  { color: "#3b82f6" },
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <p className="font-semibold text-gray-900">立即啟動</p>
              </div>
              <p className="text-sm text-gray-600">包裝優化、報廢下降</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <p className="font-semibold text-gray-900">進行中</p>
              </div>
              <p className="text-sm text-gray-600">銷售策略、金流優化</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <p className="font-semibold text-gray-900">待啟動</p>
              </div>
              <p className="text-sm text-gray-600">機器化、開源新品</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
