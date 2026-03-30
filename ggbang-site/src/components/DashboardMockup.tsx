"use client";

/**
 * SVG illustration of a payment dashboard UI —
 * gives the hero section a "product screenshot" feel
 * similar to what Airwallex uses.
 */
export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Glow behind the mockup */}
      <div className="absolute -inset-4 bg-gradient-to-br from-[#612FFF]/15 via-[#FF6B35]/10 to-[#0BE2D6]/10 rounded-3xl blur-2xl" />

      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/15 border border-white/20">
        {/* Title bar */}
        <div className="bg-[#1A2332] px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 mx-8">
            <div className="bg-white/10 rounded-md px-3 py-1 text-[11px] text-white/50 text-center" style={{ fontFamily: "var(--font-body)" }}>
              dashboard.ggbang.com
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="bg-[#F8F9FC] p-5">
          {/* Top stats row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Today's Revenue", value: "$12,847", change: "+23.5%", color: "#10B981" },
              { label: "Transactions", value: "1,284", change: "+18.2%", color: "#10B981" },
              { label: "Success Rate", value: "98.6%", change: "+0.8%", color: "#10B981" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                <div className="text-[10px] text-gray-400 mb-1" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</div>
                <div className="text-lg font-bold text-[#1A2332]" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</div>
                <div className="text-[10px] font-medium" style={{ color: stat.color }}>{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#1A2332]" style={{ fontFamily: "var(--font-display)" }}>Revenue Overview</span>
              <div className="flex gap-2">
                {["7D", "1M", "3M"].map((period) => (
                  <span
                    key={period}
                    className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                      period === "1M" ? "bg-[#612FFF]/10 text-[#612FFF]" : "text-gray-400"
                    }`}
                  >
                    {period}
                  </span>
                ))}
              </div>
            </div>
            {/* SVG chart */}
            <svg viewBox="0 0 400 120" className="w-full h-auto">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#612FFF" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#612FFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              {[0, 30, 60, 90].map((y) => (
                <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#F0F0F5" strokeWidth="1" />
              ))}
              {/* Area fill */}
              <path
                d="M0,90 C30,85 50,70 80,65 C110,60 130,45 160,50 C190,55 210,30 240,25 C270,20 290,35 320,20 C350,5 370,15 400,10 L400,120 L0,120 Z"
                fill="url(#chartGrad)"
              />
              {/* Line */}
              <path
                d="M0,90 C30,85 50,70 80,65 C110,60 130,45 160,50 C190,55 210,30 240,25 C270,20 290,35 320,20 C350,5 370,15 400,10"
                fill="none"
                stroke="#612FFF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Dot */}
              <circle cx="320" cy="20" r="4" fill="#612FFF" />
              <circle cx="320" cy="20" r="7" fill="#612FFF" fillOpacity="0.15" />
            </svg>
          </div>

          {/* Recent transactions */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-xs font-semibold text-[#1A2332] mb-3" style={{ fontFamily: "var(--font-display)" }}>Recent Transactions</div>
            {[
              { name: "Shopify Store #2841", method: "Visa ****4829", amount: "+$249.00", status: "Success" },
              { name: "WooCommerce #1093", method: "PayPal", amount: "+$187.50", status: "Success" },
              { name: "Custom Store #387", method: "Alipay", amount: "+$432.00", status: "Pending" },
            ].map((tx, i) => (
              <div key={tx.name} className={`flex items-center justify-between py-2 ${i < 2 ? "border-b border-gray-50" : ""}`}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-white ${
                    i === 0 ? "bg-[#612FFF]" : i === 1 ? "bg-[#FF6B35]" : "bg-[#0BE2D6]"
                  }`}>
                    {tx.name[0]}
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-[#1A2332]">{tx.name}</div>
                    <div className="text-[9px] text-gray-400">{tx.method}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-semibold text-[#1A2332]">{tx.amount}</div>
                  <div className={`text-[9px] font-medium ${tx.status === "Success" ? "text-[#10B981]" : "text-[#F59E0B]"}`}>
                    {tx.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
