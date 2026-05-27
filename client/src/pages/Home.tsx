import { BarChart3, Package, TrendingUp, Zap, Target, Cake } from "lucide-react";
import { DataCard } from "@/components/DataCard";
import { StrategyCard } from "@/components/StrategyCard";
import { KPIDashboard } from "@/components/KPIDashboard";
import { PainPointSection } from "@/components/PainPointSection";
import {
  currentSituation,
  productionCapacity,
  costBreakdown,
  productStrategy,
  strategies,
  kpis,
} from "@/data/strategy";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const iconMap = {
    Package,
    TrendingUp,
    Zap,
    BarChart3,
    Target,
    Cake,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">策略展示平台</h1>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#situation" className="text-gray-600 hover:text-blue-600 transition">
              現況診斷
            </a>
            <a href="#strategy" className="text-gray-600 hover:text-blue-600 transition">
              策略方案
            </a>
            <a href="#kpi" className="text-gray-600 hover:text-blue-600 transition">
              KPI 目標
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              從精品到
              <span className="text-blue-600"> 可持續精品</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              營運優化策略展示平台。透過數據分析、成本優化與策略調整，實現品牌的永續發展。
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                開始探索
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                下載簡報
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-600">數據可視化區域</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Situation Section */}
      <section id="situation" className="container py-16 md:py-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentSituation.title}</h2>
        <p className="text-lg text-gray-600 mb-12">{currentSituation.description}</p>

        {/* Financial Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <DataCard
            title="銷售額"
            value={currentSituation.april.sales.toLocaleString()}
            unit="元"
            color="green"
            variant="highlight"
          />
          <DataCard
            title="支出"
            value={currentSituation.april.expenses.toLocaleString()}
            unit="元"
            color="red"
            variant="highlight"
          />
          <DataCard
            title="當月缺口"
            value={currentSituation.april.gap.toLocaleString()}
            unit="元"
            color="amber"
            variant="highlight"
          />
        </div>

        {/* Production Capacity */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">生產端現況分析</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <DataCard
              title="內場人力"
              value={productionCapacity.staffCount}
              unit="人"
              description="(含老闆娘共 7 人)"
              color="blue"
            />
            <DataCard
              title="一週產量"
              value={productionCapacity.weeklyProduction.toLocaleString()}
              unit="顆"
              color="blue"
            />
            <DataCard
              title="平均工時/顆"
              value={productionCapacity.avgTimePerUnit}
              unit="分鐘"
              color="blue"
            />
            <DataCard
              title="每人日產"
              value={productionCapacity.unitsPerPersonPerDay}
              unit="顆"
              color="blue"
            />
          </div>
        </div>

        {/* Cost Breakdown Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">成本結構分佈</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={costBreakdown}
                dataKey="percentage"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {costBreakdown.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={["#1e40af", "#3b82f6", "#60a5fa", "#93c5fd", "#dbeafe"][index]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Pain Point Section */}
      <PainPointSection />

      {/* Product Strategy Section */}
      <section className="container py-16 md:py-24 bg-gradient-to-r from-blue-50 to-transparent rounded-3xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{productStrategy.title}</h2>
        <p className="text-lg text-gray-600 mb-12">
          不再追求所有產品都極致精緻，而是讓每款產品各司其職，建立清晰的價格梯隊。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {productStrategy.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-8 shadow-md border-t-4"
              style={{ borderTopColor: product.color }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: product.color }}
                >
                  {product.count}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
              </div>
              <div className="mb-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {feature}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic">{product.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategies Section */}
      <section id="strategy" className="container py-16 md:py-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">六大策略方向</h2>
        <p className="text-lg text-gray-600 mb-12">
          透過節流與開源並行，實現成本優化與營收成長的雙重目標。
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy) => {
            const IconComponent = iconMap[strategy.icon as keyof typeof iconMap];
            return (
              <StrategyCard
                key={strategy.id}
                title={strategy.title}
                subtitle={strategy.subtitle}
                icon={<IconComponent className="w-8 h-8" />}
                before={strategy.before}
                after={strategy.after}
                improvement={strategy.improvement}
                description={strategy.description}
              />
            );
          })}
        </div>
      </section>

      {/* KPI Section */}
      <section id="kpi" className="container py-16 md:py-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">關鍵績效指標 (KPI)</h2>
        <p className="text-lg text-gray-600 mb-12">
          明確的績效指標與衡量方式，確保策略執行的有效性。
        </p>
        <KPIDashboard />
      </section>

      {/* Final Vision Section */}
      <section className="container py-16 md:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">最終願景</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            從「高品質 × 高壓力」轉變為「高品質 × 可複製 × 可獲利」的可持續精品品牌。
          </p>
          <p className="text-lg opacity-80">
            不是降低標準，而是將有限的資源策略性地投入到最有價值的位置。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container text-center text-gray-400">
          <p>營運優化策略展示平台 © 2026</p>
          <p className="text-sm mt-2">讓品牌活得久，而不是短期漂亮。</p>
        </div>
      </footer>
    </div>
  );
}
