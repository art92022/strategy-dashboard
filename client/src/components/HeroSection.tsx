export function HeroSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Left Column: Main Message */}
        <div className="md:col-span-2">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            從精品到
            <span className="text-blue-600"> 可持續精品</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            營運優化策略展示平台。透過數據分析、成本優化與策略調整，實現品牌的永續發展。
          </p>

          {/* Key Takeaway Box */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-600">
            <h3 className="font-bold text-gray-900 mb-4">整篇重點結論</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  <strong>現況觀察</strong>：過度精緻化的營運模式，導致成本結構與銷售成長不成正比
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  <strong>根本因素</strong>：象箸之憂 —— 物料、包裝、機器設備、人力成本環環相扣
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  <strong>優化方向</strong>：從「日式無菜單」轉向「海底撈可複製」模式
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  <strong>預期成果</strong>：六大策略 + 園區開發，實現高品質 × 可複製 × 可獲利
                </span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              開始探索
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              下載簡報
            </button>
          </div>
        </div>

        {/* Right Column: Disclaimer */}
        <div>
          {/* Disclaimer Box */}
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 sticky top-20">
            <div className="flex gap-3 mb-3">
              <span className="text-2xl">ℹ️</span>
              <h4 className="font-bold text-amber-900">數據說明</h4>
            </div>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              本簡報中的所有數據均為<strong>概略估算</strong>，基於現有可見資訊推導。由於職位限制，部分數據可能無法完全準確反映實際營運狀況。
            </p>
            <p className="text-sm text-amber-800 leading-relaxed">
              本文件旨在提供策略思考方向，具體執行時建議與財務、營運部門進行深入討論，以完整、準確的資訊為基礎進行決策。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
