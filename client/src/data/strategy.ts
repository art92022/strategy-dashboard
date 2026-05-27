// 策略展示數據

export const currentSituation = {
  title: "現況診斷：營收成長，但成本結構已失衡",
  april: {
    sales: 1120000,
    expenses: 2000000,
    gap: 880000,
  },
  description: "四月數據顯示，雖然銷售額達 112 萬，但支出高達 200 萬，導致當月缺口約 88 萬。這不是產品不好，而是目前營運模式與成本結構無法有效支撐現有規格。",
};

export const productionCapacity = {
  title: "生產端現況分析",
  staffCount: 6,
  staffWithBoss: 7,
  seniorStaff: 3,
  juniorStaff: 3,
  workDays: 5,
  workHoursPerDay: 8,
  weeklyProduction: 2500,
  totalWeeklyManHours: 336,
  avgTimePerUnit: 8.06,
  unitsPerPersonPerDay: 60,
  unitsPerPersonPerHour: 7.4,
};

export const costBreakdown = [
  {
    category: "原料成本",
    percentage: 35,
    description: "最好的蛋與各國高規原料",
  },
  {
    category: "人工成本",
    percentage: 28,
    description: "高人工製程與精緻化工序",
  },
  {
    category: "包材成本",
    percentage: 15,
    description: "高規格包裝與禮盒",
  },
  {
    category: "冷鏈與物流",
    percentage: 12,
    description: "冷凍物流與配送",
  },
  {
    category: "其他",
    percentage: 10,
    description: "房租、水電、設備等",
  },
];

export const productStrategy = {
  title: "產品結構重整：建立價格梯隊",
  products: [
    {
      id: 1,
      name: "頂規定錨款",
      count: 1,
      features: ["最精緻", "最高價", "最多人工"],
      purpose: "建立品牌高度，讓其他商品顯得更具價值",
      color: "#1e40af",
    },
    {
      id: 2,
      name: "主推毛利款",
      count: "1-2",
      features: ["原料穩定", "人工可控", "毛利最高"],
      purpose: "成為主要的營收來源",
      color: "#3b82f6",
    },
    {
      id: 3,
      name: "入門走量款",
      count: 1,
      features: ["工序最簡", "成本最低"],
      purpose: "降低購買門檻，提高轉單率",
      color: "#93c5fd",
    },
  ],
};

export const strategies = [
  {
    id: 1,
    title: "包裝優化",
    subtitle: "一體成型禮盒導入",
    icon: "Package",
    before: "新人約 1 分鐘/盒",
    after: "最快 2 秒完成",
    improvement: "80%",
    description: "導入一體成型盒，大幅降低包裝工時，減少教育成本與包裝錯誤。",
  },
  {
    id: 2,
    title: "採購決策",
    subtitle: "象箸之憂防控機制",
    icon: "TrendingUp",
    before: "高規設備 → 隱形成本",
    after: "評估使用率後決策",
    improvement: "成本控制",
    description: "建立設備採購 SOP，避免一次性採購形成長期支出。",
  },
  {
    id: 3,
    title: "機器化",
    subtitle: "常溫產品優先啟動",
    icon: "Zap",
    before: "冷凍：高人工 + 高物流",
    after: "常溫：自動化 + 長貨架",
    improvement: "產能提升",
    description: "優先投入常溫產品與半自動設備，降低冷鏈依賴。",
  },
  {
    id: 4,
    title: "金流優化",
    subtitle: "月開單 → 常態金流",
    icon: "BarChart3",
    before: "月開單集中出貨",
    after: "常態販售 + 園區模式",
    improvement: "現金流穩定",
    description: "建立常態販售模式，結合園區限定與預約制，分散產能。",
  },
  {
    id: 5,
    title: "報廢下降",
    subtitle: "重點專案",
    icon: "Target",
    before: "週報廢約 5 萬",
    after: "週報廢降至 2 萬",
    improvement: "50%",
    description: "透過預估生產、分批製作、尾貨快閃等方式，大幅降低報廢率。",
  },
  {
    id: 6,
    title: "開源",
    subtitle: "達克大蛋糕",
    icon: "Cake",
    before: "單顆銷售",
    after: "高單價大蛋糕",
    improvement: "毛利提升",
    description: "利用相同原料，透過一次工序製作高單價產品，降低人工密度。",
  },
];

export const kpis = [
  {
    id: 1,
    category: "銷售策略",
    metric: "前兩名 SKU 佔營收",
    target: ">60%",
    current: "~40%",
    status: "進行中",
  },
  {
    id: 2,
    category: "銷售策略",
    metric: "主推款毛利率",
    target: "最高",
    current: "中等",
    status: "進行中",
  },
  {
    id: 3,
    category: "包裝優化",
    metric: "包裝工時下降",
    target: "80%",
    current: "0%",
    status: "待啟動",
  },
  {
    id: 4,
    category: "包裝優化",
    metric: "單盒包裝成本",
    target: "下降",
    current: "基準",
    status: "待啟動",
  },
  {
    id: 5,
    category: "採購決策",
    metric: "非生產設備採購",
    target: "下降",
    current: "基準",
    status: "進行中",
  },
  {
    id: 6,
    category: "機器化",
    metric: "常溫營收佔比",
    target: "提升",
    current: "~0%",
    status: "待啟動",
  },
  {
    id: 7,
    category: "金流優化",
    metric: "園區訂單佔比",
    target: "提升",
    current: "~20%",
    status: "進行中",
  },
  {
    id: 8,
    category: "金流優化",
    metric: "回購率",
    target: "提升",
    current: "基準",
    status: "進行中",
  },
  {
    id: 9,
    category: "報廢下降",
    metric: "報廢率下降",
    target: "50%",
    current: "0%",
    status: "待啟動",
  },
  {
    id: 10,
    category: "開源",
    metric: "大蛋糕佔營收",
    target: "≥10%",
    current: "~0%",
    status: "待啟動",
  },
];

export const timeline = [
  {
    phase: "01",
    title: "開場：成長中的挑戰",
    description: "認同品牌成就，引入升級契機",
    duration: "建立信任基礎",
  },
  {
    phase: "02",
    title: "現況診斷",
    description: "數據呈現營收與成本失衡",
    duration: "問題識別",
  },
  {
    phase: "03",
    title: "核心痛點",
    description: "過度精緻化導致效率瓶頸",
    duration: "根本原因分析",
  },
  {
    phase: "04",
    title: "策略方案",
    description: "六大策略方向與具體執行",
    duration: "解決方案設計",
  },
  {
    phase: "05",
    title: "KPI 目標",
    description: "明確的績效指標與衡量方式",
    duration: "行動計畫",
  },
  {
    phase: "06",
    title: "最終願景",
    description: "從精品到可持續精品品牌",
    duration: "長期目標確立",
  },
];
