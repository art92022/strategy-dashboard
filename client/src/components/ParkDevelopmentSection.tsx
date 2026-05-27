import { MapPin, Users, TrendingUp, Target, Zap } from "lucide-react";

export function ParkDevelopmentSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">園區開發：增加現金流的新引擎</h2>
        <p className="text-lg text-gray-600">
          利用園區的地理優勢與高密度客群，建立常態金流與規模化銷售模式。
        </p>
      </div>

      {/* Market Overview */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-12 border-2 border-green-200">
        <h3 className="text-2xl font-bold text-green-900 mb-6">市場發現</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6">
            <MapPin className="w-8 h-8 text-green-600 mb-3" />
            <p className="text-sm text-gray-600 mb-2">垂直鄰居規模</p>
            <p className="text-3xl font-bold text-green-900">2,000+</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <Zap className="w-8 h-8 text-green-600 mb-3" />
            <p className="text-sm text-gray-600 mb-2">物流時間</p>
            <p className="text-3xl font-bold text-green-900">0 分鐘</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <Users className="w-8 h-8 text-green-600 mb-3" />
            <p className="text-sm text-gray-600 mb-2">消費力</p>
            <p className="text-3xl font-bold text-green-900">高</p>
          </div>
        </div>
      </div>

      {/* Dual Track Strategy */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">雙軌戰線：客群與模式切分</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-blue-600">
            <h4 className="text-xl font-bold text-gray-900 mb-4">常態公開賣場</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>目標客群：一般客戶</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>模式：一般選購、不開放自取</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>策略：維持品牌單價信譽</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-green-600">
            <h4 className="text-xl font-bold text-gray-900 mb-4">園區隱藏賣場</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>目標客群：企業員工、福委</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>模式：團購、低消 $15,000、指定時段自取</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>策略：規模化降低物流成本</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Target Companies */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">第一階段目標：131/137 號指標企業</h3>
        <div className="space-y-4">
          {[
            {
              name: "研華科技 (AAEON)",
              size: "650+ 人",
              location: "1F/2F 研發中心",
              opportunity: "高次研發議題中心",
            },
            {
              name: "四零四科技 (MOXA)",
              size: "1,000+ 人",
              location: "戰略層 (137 號)",
              opportunity: "福利預算 $30,000+ 大額訂單主力",
            },
            {
              name: "晶邦光電 (Litemax)",
              size: "188+ 人",
              location: "6F/7F/8F",
              opportunity: "行政部門聯誼、團購需求",
            },
            {
              name: "醫療科技 (Onyx)",
              size: "170+ 人",
              location: "7F/8F",
              opportunity: "高淨白領群眾、企業禮贈",
            },
          ].map((company, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-bold text-gray-900">{company.name}</h4>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                  {company.size}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <strong>位置：</strong> {company.location}
              </p>
              <p className="text-sm text-gray-600">
                <strong>機會：</strong> {company.opportunity}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Automation Rules */}
      <div className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200 mb-12">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">無人化營運：三大銅鐵規則</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <div className="text-4xl mb-3">💳</div>
            <h4 className="font-bold text-gray-900 mb-3">金流全自動</h4>
            <p className="text-sm text-gray-600">
              一律線上信用卡結帳，金流取消口頭領貨，極大化行政效率。
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-4xl mb-3">📋</div>
            <h4 className="font-bold text-gray-900 mb-3">系統排單制</h4>
            <p className="text-sm text-gray-600">
              嚴格依付款時間自動排序，產能用量即時止，保持生產序。
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-4xl mb-3">✅</div>
            <h4 className="font-bold text-gray-900 mb-3">履約零容忍</h4>
            <p className="text-sm text-gray-600">
              請準取貨準時間放棄物權，儲保資源流暢效率、教會客戶準時習慣。
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-4xl mb-3">📦</div>
            <h4 className="font-bold text-gray-900 mb-3">產能提包化</h4>
            <p className="text-sm text-gray-600">
              提動下午茶「提包化」等略，大幅減少包裝人工時，提升 60% 產出速度。
            </p>
          </div>
        </div>
      </div>

      {/* Sales Funnel */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">階段性銷售漏斗：獲利規模化</h3>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-6 border-l-4 border-green-600">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-green-600">$5K-$8K</div>
              <div>
                <h4 className="font-bold text-gray-900">入門款</h4>
                <p className="text-sm text-gray-600">經層客戶購購求、經認品質</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-amber-600">$15,000</div>
              <div>
                <h4 className="font-bold text-gray-900">核心款</h4>
                <p className="text-sm text-gray-600">同事團購引、品牌主銷售</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-blue-600">VIP</div>
              <div>
                <h4 className="font-bold text-gray-900">超值大眾</h4>
                <p className="text-sm text-gray-600">年節禮盒、福委合約購</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Ecosystem */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">產品生態系：滿足多元需求</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-4xl flex-shrink-0">⭐</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">園區限定甜點</h4>
              <p className="text-sm text-gray-600">定期推出高產品、強化地緣關聯與回購因</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-4xl flex-shrink-0">🍵</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">下午茶系列</h4>
              <p className="text-sm text-gray-600">100 顆超訂、單親口口分享、園區心備配</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-4xl flex-shrink-0">🎂</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">達克大蛋糕</h4>
              <p className="text-sm text-gray-600">公司慶祝、團隊分享會議、創造新銷售曝露</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-4xl flex-shrink-0">🎁</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">企業禮盒</h4>
              <p className="text-sm text-gray-600">規模統一、常溫運費、組合福至會生回購</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
