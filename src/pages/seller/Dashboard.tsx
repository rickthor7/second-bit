import { Link } from "react-router-dom";
import {
  Package,
  Plus,
  QrCode,
  DollarSign,
  TrendingUp,
  BarChart3,
  Star,
  ShoppingBag,
  ChevronRight,
  Leaf,
} from "lucide-react";
import { formatPrice } from "@/data/mockData";

export default function SellerDashboard() {
  return (
    <main style={{ minHeight: "80vh", backgroundColor: "var(--surface)" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #222 0%, #444 100%)",
          padding: "32px 0 48px",
          color: "#fff",
        }}
      >
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              🏪
            </div>
            <div>
              <h1 style={{ fontSize: 20, fontWeight: 700 }}>Warung Bu Siti</h1>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, opacity: 0.8 }}>
                <span className="badge badge-mvp" style={{ fontSize: 10 }}>Mitra MVP</span>
                <span>•</span>
                <Star size={12} fill="#FFD700" stroke="#FFD700" />
                <span>4.8 (324 ulasan)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: -24, paddingBottom: 40 }}>
        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
            marginBottom: 24,
          }}
        >
          {[
            { label: "Penjualan Hari Ini", value: formatPrice(450000), icon: DollarSign, color: "var(--success)", change: "+12%" },
            { label: "Pesanan Masuk", value: "8", icon: ShoppingBag, color: "var(--primary)", change: "+3" },
            { label: "Porsi Terjual", value: "32", icon: TrendingUp, color: "var(--info)", change: "+15%" },
            { label: "Surplus Rescue", value: "5", icon: Leaf, color: "var(--success)", change: "terselamatkan" },
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
              <div style={{ fontSize: 22, fontWeight: 800, color: "var(--foreground)", marginBottom: 2 }}>
                {value}
              </div>
              <div style={{ fontSize: 11, color, fontWeight: 500 }}>{change}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div
          style={{
            backgroundColor: "var(--background)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-sm)",
            padding: "20px",
            marginBottom: 24,
          }}
        >
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Aksi Cepat</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            {[
              { icon: Plus, label: "Tambah Produk", color: "var(--primary)" },
              { icon: Leaf, label: "Tambah Surplus", color: "var(--success)" },
              { icon: QrCode, label: "Scanner QR", color: "var(--info)" },
              { icon: BarChart3, label: "Laporan", color: "var(--warning)" },
            ].map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                className="btn"
                style={{
                  flexDirection: "column",
                  gap: 6,
                  padding: "14px 8px",
                  backgroundColor: `${color}10`,
                  color,
                  borderRadius: "var(--radius-lg)",
                  fontSize: 11,
                  fontWeight: 500,
                }}
              >
                <Icon size={22} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Pending Orders */}
        <div
          style={{
            backgroundColor: "var(--background)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-sm)",
            padding: "20px",
            marginBottom: 24,
          }}
        >
          <div className="section-header" style={{ marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600 }}>
              Pesanan Masuk
              <span
                style={{
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                  borderRadius: "var(--radius-full)",
                  padding: "2px 8px",
                  fontSize: 11,
                  marginLeft: 8,
                  fontWeight: 700,
                }}
              >
                3
              </span>
            </h3>
            <span className="section-link" style={{ cursor: "pointer" }}>
              Lihat Semua <ChevronRight size={16} />
            </span>
          </div>
          {[
            { id: "SB-001", customer: "Ahmad F.", items: "2x Nasi Pecel", total: 30000, status: "Siap Pickup" },
            { id: "SB-002", customer: "Dina S.", items: "1x Rawon", total: 25000, status: "Baru Dibayar" },
            { id: "SB-003", customer: "Rizki A.", items: "3x Es Teh Solo", total: 24000, status: "Baru Dibayar" },
          ].map((order) => (
            <div
              key={order.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: "1px solid var(--border-light)",
                gap: 12,
              }}
            >
              <div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>{order.id}</div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{order.items}</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>{order.customer}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <span
                  className="badge"
                  style={{
                    backgroundColor: order.status === "Siap Pickup" ? "var(--success-light)" : "var(--warning-light)",
                    color: order.status === "Siap Pickup" ? "var(--success)" : "#B87C00",
                    marginBottom: 4,
                  }}
                >
                  {order.status}
                </span>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>
                  {formatPrice(order.total)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Balance */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
            borderRadius: "var(--radius-xl)",
            padding: "24px",
            color: "#fff",
          }}
        >
          <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 4 }}>Saldo Tersedia</div>
          <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>{formatPrice(1250000)}</div>
          <button
            className="btn"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <DollarSign size={16} /> Cairkan Dana
          </button>
        </div>
      </div>
    </main>
  );
}
