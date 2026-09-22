import {
  Users,
  Store,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  Settings,
  ChevronRight,
  Activity,
  Package,
  Star,
} from "lucide-react";
import { formatPrice } from "@/data/mockData";

export default function AdminDashboard() {
  return (
    <main style={{ minHeight: "80vh", backgroundColor: "var(--surface)" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          padding: "32px 0 48px",
          color: "#fff",
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>
            Admin Dashboard
          </h1>
          <p style={{ fontSize: 13, opacity: 0.7 }}>
            SecondBit Platform Overview — {new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: -24, paddingBottom: 40 }}>
        {/* KPI Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
            marginBottom: 24,
          }}
        >
          {[
            { label: "Total UMKM", value: "20", icon: Store, color: "var(--primary)", change: "+2 bulan ini" },
            { label: "Total Pembeli", value: "450", icon: Users, color: "var(--info)", change: "+38 bulan ini" },
            { label: "Transaksi Hari Ini", value: "127", icon: ShoppingBag, color: "var(--success)", change: "+15% vs kemarin" },
            { label: "GMV Bulan Ini", value: formatPrice(42500000), icon: DollarSign, color: "#FFB300", change: "+22% vs bulan lalu" },
            { label: "Revenue Platform", value: formatPrice(3400000), icon: TrendingUp, color: "var(--success)", change: "Fee 8%" },
            { label: "Food Rescued", value: "856 porsi", icon: Package, color: "#26AA6C", change: "bulan ini" },
          ].map(({ label, value, icon: Icon, color, change }) => (
            <div
              key={label}
              style={{
                backgroundColor: "var(--background)",
                borderRadius: "var(--radius-xl)",
                boxShadow: "var(--shadow-sm)",
                padding: "18px 20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>{label}</span>
                <Icon size={18} style={{ color }} />
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "var(--foreground)", marginBottom: 2 }}>
                {value}
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)" }}>{change}</div>
            </div>
          ))}
        </div>

        {/* Alerts */}
        <div
          style={{
            backgroundColor: "var(--warning-light)",
            border: "1px solid #FFE0A3",
            borderRadius: "var(--radius-lg)",
            padding: "16px 20px",
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <AlertTriangle size={20} style={{ color: "var(--warning)", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>
              3 verifikasi UMKM menunggu approval
            </div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              Segera review untuk menghindari delay
            </div>
          </div>
          <span className="section-link" style={{ marginLeft: "auto", cursor: "pointer", flexShrink: 0 }}>
            Review <ChevronRight size={16} />
          </span>
        </div>

        {/* Management Sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >
          {/* Recent Activities */}
          <div
            style={{
              backgroundColor: "var(--background)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-sm)",
              padding: "20px",
            }}
          >
            <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>
              <Activity size={16} style={{ color: "var(--primary)", verticalAlign: "middle", marginRight: 6 }} />
              Aktivitas Terbaru
            </h3>
            {[
              { action: "UMKM baru mendaftar", detail: "Nasi Goreng Pak Min", time: "5 menit lalu", color: "var(--info)" },
              { action: "Transaksi selesai", detail: "Order SB-127 — Rp45.000", time: "12 menit lalu", color: "var(--success)" },
              { action: "Review baru", detail: "Rating 5 untuk Bakso Pak Darmo", time: "30 menit lalu", color: "var(--warning)" },
              { action: "Refund request", detail: "Order SB-098 — Rp15.000", time: "1 jam lalu", color: "var(--destructive)" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: i < 3 ? "1px solid var(--border-light)" : "none",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "var(--radius-full)",
                    backgroundColor: item.color,
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{item.action}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>{item.detail}</div>
                  <div style={{ fontSize: 11, color: "var(--muted-light)", marginTop: 2 }}>{item.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Management */}
          <div
            style={{
              backgroundColor: "var(--background)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-sm)",
              padding: "20px",
            }}
          >
            <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>
              <Settings size={16} style={{ color: "var(--muted)", verticalAlign: "middle", marginRight: 6 }} />
              Manajemen
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { icon: Users, label: "Kelola Pembeli", count: 450 },
                { icon: Store, label: "Kelola UMKM", count: 20 },
                { icon: Package, label: "Kelola Produk", count: 156 },
                { icon: ShoppingBag, label: "Kelola Transaksi", count: 1240 },
                { icon: DollarSign, label: "Settlement", count: 15 },
                { icon: Star, label: "Rating & Review", count: 892 },
                { icon: BarChart3, label: "Laporan & Analitik", count: null },
              ].map(({ icon: Icon, label, count }) => (
                <button
                  key={label}
                  className="card"
                  style={{
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "none",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    boxShadow: "none",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Icon size={18} style={{ color: "var(--muted)" }} />
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{label}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {count !== null && (
                      <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>{count}</span>
                    )}
                    <ChevronRight size={16} style={{ color: "var(--muted-light)" }} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
