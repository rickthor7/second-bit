import { useEffect } from "react";
import { Zap, Flame } from "lucide-react";
import AOS from "aos";

import ProductCard from "@/components/shared/ProductCard";
import CountdownTimer from "@/components/shared/CountdownTimer";
import { getFlashDealProducts } from "@/data/mockData";

export default function FlashDeals() {
  const flashDeals = getFlashDealProducts();

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <main style={{ minHeight: "80vh" }}>
      {/* Header Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #EE4D2D 0%, #FF6633 50%, #FFAA00 100%)",
          padding: "36px 0",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)" }} />
        <div style={{ position: "absolute", bottom: -50, left: 20, width: 100, height: 100, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zap size={28} fill="#fff" />
            </div>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.2 }}>
                Flash Deal
              </h1>
              <p style={{ fontSize: 14, opacity: 0.9 }}>
                Diskon besar untuk makanan UMKM lokal!
              </p>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            {flashDeals[0]?.flashDealEndsAt && (
              <CountdownTimer
                targetDate={flashDeals[0].flashDealEndsAt}
                label="Berakhir dalam"
              />
            )}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container" style={{ padding: "32px 16px" }}>
        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 24,
            flexWrap: "wrap",
          }}
          data-aos="fade-up"
        >
          {[
            { icon: Zap, label: "Diskon s.d. 50%", color: "var(--warning)" },
            { icon: Flame, label: `${flashDeals.length} Deal Tersedia`, color: "var(--primary)" },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                backgroundColor: "var(--surface)",
                borderRadius: "var(--radius-full)",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              <Icon size={16} style={{ color }} />
              {label}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid-products">
          {flashDeals.map((product, i) => (
            <div key={product.id} data-aos="fade-up" data-aos-delay={i * 80}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {flashDeals.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--muted)" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>⚡</div>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--foreground)" }}>
              Belum ada Flash Deal
            </h3>
            <p style={{ fontSize: 14 }}>Nantikan Flash Deal seru berikutnya!</p>
          </div>
        )}
      </div>
    </main>
  );
}
