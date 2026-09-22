import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Clock, Award, ChevronLeft } from "lucide-react";
import { getUMKMBySlug, getProductsByUMKM } from "@/data/mockData";
import ProductCard from "@/components/shared/ProductCard";

export default function UMKMDetail() {
  const { slug } = useParams<{ slug: string }>();
  const umkm = getUMKMBySlug(slug || "");

  if (!umkm) {
    return (
      <div className="container" style={{ padding: "80px 16px", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🏪</div>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>UMKM tidak ditemukan</h2>
        <Link to="/hidden-gem" className="btn btn-primary">Lihat Hidden Gem</Link>
      </div>
    );
  }

  const products = getProductsByUMKM(umkm.id);

  return (
    <main style={{ minHeight: "80vh" }}>
      {/* Cover Image */}
      <div
        style={{
          height: 220,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={umkm.coverImage}
          alt={umkm.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))",
          }}
        />
        <Link
          to="/hidden-gem"
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            display: "flex",
            alignItems: "center",
            gap: 4,
            color: "#fff",
            fontSize: 14,
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: "6px 12px",
            borderRadius: "var(--radius-full)",
          }}
        >
          <ChevronLeft size={18} /> Kembali
        </Link>
      </div>

      <div className="container">
        {/* Profile Card */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-lg)",
            padding: "24px",
            marginTop: -40,
            position: "relative",
            zIndex: 10,
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
            <img
              src={umkm.image}
              alt={umkm.name}
              style={{
                width: 80,
                height: 80,
                borderRadius: "var(--radius-lg)",
                objectFit: "cover",
                border: "3px solid #fff",
                boxShadow: "var(--shadow-md)",
              }}
            />
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
                <h1 style={{ fontSize: 22, fontWeight: 700 }}>{umkm.name}</h1>
                {umkm.isMVP && <span className="badge badge-mvp"><Award size={11} /> Mitra MVP</span>}
                {umkm.isHiddenGem && (
                  <span className="badge" style={{ backgroundColor: "var(--info-light)", color: "var(--info)" }}>
                    💎 Hidden Gem
                  </span>
                )}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap", fontSize: 13 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Star size={14} fill="var(--warning)" stroke="var(--warning)" />
                  <span style={{ fontWeight: 600 }}>{umkm.rating}</span>
                  <span style={{ color: "var(--muted)" }}>({umkm.ratingCount} ulasan)</span>
                </div>
                <span style={{ color: "var(--border)" }}>|</span>
                <span style={{ color: "var(--muted)" }}>{umkm.totalSold} terjual</span>
                <span style={{ color: "var(--border)" }}>|</span>
                <span
                  style={{
                    fontWeight: 600,
                    color: umkm.isOpen ? "var(--success)" : "var(--destructive)",
                  }}
                >
                  {umkm.isOpen ? "🟢 Buka" : "🔴 Tutup"}
                </span>
              </div>

              <p style={{ fontSize: 14, color: "var(--foreground-secondary)", lineHeight: 1.6, marginBottom: 12 }}>
                {umkm.description}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "var(--muted)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <MapPin size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                  {umkm.address} {umkm.distance && `(${umkm.distance})`}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Clock size={14} style={{ color: "var(--muted)", flexShrink: 0 }} />
                  Jam Operasional: {umkm.operatingHours}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div style={{ paddingBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
            Menu ({products.length} produk)
          </h2>
          {products.length > 0 ? (
            <div className="grid-products">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} showUMKM={false} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--muted)" }}>
              <p>Belum ada produk tersedia.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
