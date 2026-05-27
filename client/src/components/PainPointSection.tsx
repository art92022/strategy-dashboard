import { AlertCircle, TrendingDown, Clock, Users } from "lucide-react";
import { ComparisonSlider } from "./ComparisonSlider";

export function PainPointSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">核心痛點：象箸之憂</h2>
        <p className="text-lg text-gray-600">
          過度精緻化導致的效率瓶頸，讓人力成本持續攀升，即使接到大量訂單也難以獲利。
        </p>
      </div>

      {/* Main Pain Point */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-12 border-2 border-red-200">
        <div className="flex gap-4 md:gap-6 items-start">
          <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-4">
              每一顆都精緻 = 每一顆都昂貴
            </h3>
            <p className="text-base md:text-lg text-red-800 leading-relaxed">
              目前的營運模式像「日式無菜單料理」，每顆達克瓦茲都需要 8 分鐘的職人工時。當客戶購買一盒 (6 顆) 時，製作時間就變得可怕。這種精緻化雖然建立了品牌形象，但卻成為了規模化的最大障礙。
            </p>
          </div>
        </div>
      </div>

      {/* Impact Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-red-500">
          <div className="flex items-start gap-4 mb-4">
            <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <h4 className="text-xl font-bold text-gray-900">時間成本爆炸</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            單顆 8 分鐘 × 6 顆 = 48 分鐘製作時間。高報廢率、人力加班、旺季瓶頸，導致成本結構失衡。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-orange-500">
          <div className="flex items-start gap-4 mb-4">
            <TrendingDown className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <h4 className="text-xl font-bold text-gray-900">利潤被吃掉</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            即使銷售額達 112 萬，支出卻高達 200 萬。人工、包材、原料、冷鏈成本全部拉滿，導致當月缺口 88 萬。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-amber-500">
          <div className="flex items-start gap-4 mb-4">
            <Users className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <h4 className="text-xl font-bold text-gray-900">人力被綁架</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            6 位內場員工 (含 3 位新手) 一週只能穩定出 2,500 顆。旺季加班、人力教育成本高、效率難以提升。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-yellow-500">
          <div className="flex items-start gap-4 mb-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <h4 className="text-xl font-bold text-gray-900">象箸之憂</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            高規格設備 (印表機、投影機、錄音設備) 帶來的隱形成本持續累積，拉高整體營運標準，卻未必能帶來相應回報。
          </p>
        </div>
      </div>

      {/* Comparison Slider */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">現況 vs 目標</h3>
        <ComparisonSlider />
      </div>

      {/* The Butterfly Effect */}
      <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">蝴蝶效應：精緻化的連鎖反應</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <p className="font-semibold text-blue-900">每顆都要精緻</p>
              <p className="text-sm text-blue-800">工序複雜、時間長、教育成本高</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <p className="font-semibold text-blue-900">人力被吃重</p>
              <p className="text-sm text-blue-800">旺季加班、報廢率高、效率難提升</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <p className="font-semibold text-blue-900">成本全部拉高</p>
              <p className="text-sm text-blue-800">原料、包材、冷鏈、人工成本同步上升</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <p className="font-semibold text-blue-900">獲利空間被擠壓</p>
              <p className="text-sm text-blue-800">即使銷售成長，利潤反而下降</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
