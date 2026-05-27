import { AlertCircle, TrendingDown, Clock, Users } from "lucide-react";
import { ComparisonSlider } from "./ComparisonSlider";

export function PainPointSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">核心痛點：象箸之憂</h2>
        <p className="text-lg text-gray-600">
          經營模式的複雜性，導致成本結構與銷售成長之間出現失衡。這是一個值得探討的機會。
        </p>
      </div>

      {/* Main Pain Point */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-12 border-2 border-red-200">
        <div className="flex gap-4 md:gap-6 items-start">
          <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-4">
              象箸之憂：成本環環相扣
            </h3>
            <p className="text-base md:text-lg text-red-800 leading-relaxed mb-4">
              物料、包裝、機器設備、人力成本之間的相互影響，形成了複雜的成本結構。機器設備的投資成本高，但是否能充分發揮其效能，是一個值得整理的領域。
            </p>
            <p className="text-base md:text-lg text-red-800 leading-relaxed">
              目前的營運模式像「日式無菜單料理」，每顆達克瓦茲都需要 8 分鐘的職人工時。當客戶購買一盒 (6 顆) 時，製作時間的成本就需要審慎考量。
            </p>
          </div>
        </div>
      </div>

      {/* Impact Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-red-500">
          <div className="flex items-start gap-4 mb-4">
            <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <h4 className="text-xl font-bold text-gray-900">時間成本考量</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            單顆 8 分鐘 × 6 顆 = 48 分鐘製作時間。報廢率、人力調配、旺季產能等因素，都會影響整體成本結構。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-orange-500">
          <div className="flex items-start gap-4 mb-4">
            <TrendingDown className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <h4 className="text-xl font-bold text-gray-900">成本結構分析</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            銷售額與支出之間的比例關係，反映出營運模式的效率。人工、包材、原料、冷鏈等成本項目，都是優化的對象。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-amber-500">
          <div className="flex items-start gap-4 mb-4">
            <Users className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <h4 className="text-xl font-bold text-gray-900">人力資源配置</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            內場員工的產能與工作效率，受到多個因素影響。優化工作流程與培訓體系，有助於提升整體產能。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-yellow-500">
          <div className="flex items-start gap-4 mb-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <h4 className="text-xl font-bold text-gray-900">機器設備成本優化</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            高規格設備（印表機及其周邊設備、投影機、錄音筆，以及內場的頂級規格設備）的投資成本持續累積。檢視這些設備是否充分發揮其效能，是優化營運成本的重要方向。
          </p>
        </div>
      </div>

      {/* Comparison Slider */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">現況 vs 目標：營運模式的優化方向</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current State */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
            <div className="text-5xl mb-4">🍱</div>
            <h4 className="text-2xl font-bold text-red-900 mb-3">日式無菜單料理</h4>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex gap-2">
                <span>•</span>
                <span>高成本、精緻化複雜</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>產量高不起來</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>難以規模化</span>
              </li>
            </ul>
          </div>

          {/* Target State */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
            <div className="text-5xl mb-4">✨</div>
            <h4 className="text-2xl font-bold text-green-900 mb-3">海底撈可複製模式</h4>
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex gap-2">
                <span>•</span>
                <span>精緻品量縮小</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>可複製、高效率</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>高產量、可持續獲利</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Butterfly Effect */}
      <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">成本結構：環環相扣的連鎖反應</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <p className="font-semibold text-blue-900">精緻化的工序設計</p>
              <p className="text-sm text-blue-800">高工序複雜度、長工時、高教育成本</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <p className="font-semibold text-blue-900">人力資源壓力</p>
              <p className="text-sm text-blue-800">旺季調配、報廢率、效率提升挑戰</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <p className="font-semibold text-blue-900">成本項目同步上升</p>
              <p className="text-sm text-blue-800">原料、包材、冷鏈、人工成本聯動</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <p className="font-semibold text-blue-900">營收與成本的平衡</p>
              <p className="text-sm text-blue-800">銷售成長與利潤之間的優化空間</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
