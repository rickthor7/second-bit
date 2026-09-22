import { useEffect } from "react";
import { Gem } from "lucide-react";
import AOS from "aos";

import UMKMCard from "@/components/shared/UMKMCard";
import { getHiddenGemUMKM } from "@/data/mockData";

export default function HiddenGem() {
  const hiddenGems = getHiddenGemUMKM();

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <main style={{ minHeight: "80vh" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "36px 0",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -20, right: -20, width: 140, height: 140, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)" }} />
        <div style={{ position: "absolute", bottom: -40, left: 40, width: 80, height: 80, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
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
              <Gem size={28} />
            </div>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.2 }}>
                Hidden Gem
              </h1>
              <p style={{ fontSize: 14, opacity: 0.9 }}>
                UMKM tersembunyi yang wajib kamu coba di sekitar Ketintang!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ padding: "32px 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 24,
            fontSize: 14,
            color: "var(--muted)",
          }}
          data-aos="fade-up"
        >
          <span>💎</span>
          <span>
            <strong style={{ color: "var(--foreground)" }}>{hiddenGems.length}</strong> UMKM hidden gem ditemukan
          </span>
        </div>

        <div className="grid-umkm">
          {hiddenGems.map((umkm, i) => (
            <div key={umkm.id} data-aos="fade-up" data-aos-delay={i * 80}>
              <UMKMCard umkm={umkm} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
