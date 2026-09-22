import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Zap,
  Leaf,
  TrendingUp,
  Gem,
  ShieldCheck,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProductCard from "@/components/shared/ProductCard";
import UMKMCard from "@/components/shared/UMKMCard";
import CountdownTimer from "@/components/shared/CountdownTimer";
import {
  categories,
  banners,
  getFlashDealProducts,
  getBestSellerProducts,
  getSurplusProducts,
  getHiddenGemUMKM,
} from "@/data/mockData";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 60 });
  }, []);

  const flashDeals = getFlashDealProducts();
  const bestSellers = getBestSellerProducts();
  const surplusProducts = getSurplusProducts();
  const hiddenGems = getHiddenGemUMKM();

  return (
    <main>
      {/* ===== Hero Banner Carousel ===== */}
      <section style={{ padding: "20px 0 0" }}>
        <div className="container">
          <div
            className="scroll-x"
            style={{ gap: 16, paddingBottom: 8 }}
          >
            {banners.map((banner) => (
              <Link
                key={banner.id}
                to={banner.link}
                style={{
                  display: "block",
                  minWidth: "min(85vw, 560px)",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  position: "relative",
                  height: 180,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: banner.bgColor,
                    zIndex: 1,
                  }}
                />
                <img
                  src={banner.image}
                  alt={banner.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.2,
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    zIndex: 3,
                    padding: "28px 32px",
                    color: "#fff",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h2
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      marginBottom: 6,
                      lineHeight: 1.2,
                    }}
                  >
                    {banner.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 14,
                      opacity: 0.9,
                      maxWidth: 320,
                    }}
                  >
                    {banner.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Categories ===== */}
      <section style={{ padding: "24px 0 8px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 8,
            }}
            className="category-grid"
          >
            {categories.slice(0, 10).map((cat, i) => (
              <Link
                key={cat.id}
                to={`/explore?category=${cat.slug}`}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  padding: "14px 8px",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "var(--surface)",
                  transition: "all var(--transition-fast)",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--primary-light)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--surface)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: 28 }}>{cat.icon}</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "var(--foreground)",
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Flash Deal ===== */}
      <section className="section" data-aos="fade-up">
        <div className="container">
          <div className="section-header">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--warning-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Zap size={20} style={{ color: "var(--warning)" }} fill="var(--warning)" />
                </div>
                <h2 className="section-title">Flash Deal</h2>
              </div>
              {flashDeals[0]?.flashDealEndsAt && (
                <CountdownTimer targetDate={flashDeals[0].flashDealEndsAt} />
              )}
            </div>
            <Link to="/flash-deals" className="section-link">
              Lihat Semua <ChevronRight size={16} />
            </Link>
          </div>
          <div className="scroll-x" style={{ gap: 16 }}>
            {flashDeals.map((product) => (
              <div key={product.id} style={{ minWidth: 180, maxWidth: 200 }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Best Seller ===== */}
      <section className="section" style={{ backgroundColor: "var(--surface)", padding: "40px 0" }} data-aos="fade-up">
        <div className="container">
          <div className="section-header">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--primary-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TrendingUp size={20} style={{ color: "var(--primary)" }} />
              </div>
              <h2 className="section-title">Best Seller</h2>
            </div>
            <Link to="/explore?sort=best-seller" className="section-link">
              Lihat Semua <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid-products">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Surplus Rescue ===== */}
      <section className="section" data-aos="fade-up">
        <div className="container">
          <div className="section-header">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--success-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Leaf size={20} style={{ color: "var(--success)" }} />
              </div>
              <div>
                <h2 className="section-title">Surplus Rescue</h2>
                <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>
                  Selamatkan makanan, hemat kantong!
                </p>
              </div>
            </div>
            <Link to="/explore?type=surplus" className="section-link">
              Lihat Semua <ChevronRight size={16} />
            </Link>
          </div>

          {/* Surplus Info Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, #E8F8F0 0%, #D4EDDA 100%)",
              borderRadius: "var(--radius-lg)",
              padding: "16px 20px",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", gap: 20, flex: 1, flexWrap: "wrap" }}>
              {[
                { icon: ShieldCheck, label: "Masih Layak Konsumsi", color: "var(--success)" },
                { icon: Clock, label: "Pickup Terbatas", color: "var(--warning)" },
                { icon: Star, label: "Harga Spesial", color: "var(--primary)" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--foreground-secondary)",
                  }}
                >
                  <Icon size={16} style={{ color }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-x" style={{ gap: 16 }}>
            {surplusProducts.map((product) => (
              <div key={product.id} style={{ minWidth: 180, maxWidth: 200 }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Hidden Gem ===== */}
      <section
        className="section"
        style={{
          backgroundColor: "var(--surface)",
          padding: "40px 0",
        }}
        data-aos="fade-up"
      >
        <div className="container">
          <div className="section-header">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--info-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Gem size={20} style={{ color: "var(--info)" }} />
              </div>
              <div>
                <h2 className="section-title">Hidden Gem Ketintang</h2>
                <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>
                  UMKM tersembunyi yang wajib kamu coba!
                </p>
              </div>
            </div>
            <Link to="/hidden-gem" className="section-link">
              Lihat Semua <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid-umkm">
            {hiddenGems.slice(0, 3).map((umkm) => (
              <UMKMCard key={umkm.id} umkm={umkm} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="section" data-aos="fade-up">
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
              borderRadius: "var(--radius-xl)",
              padding: "48px 32px",
              textAlign: "center",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 200,
                height: 200,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -60,
                left: -30,
                width: 160,
                height: 160,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                Punya UMKM Makanan?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  opacity: 0.9,
                  maxWidth: 480,
                  margin: "0 auto 24px",
                  lineHeight: 1.6,
                }}
              >
                Gabung jadi Mitra SecondBit! Dapatkan pembeli baru, kurangi food waste,
                dan kelola bisnis lebih mudah.
              </p>
              <Link
                to="/register"
                className="btn btn-lg"
                style={{
                  backgroundColor: "#fff",
                  color: "var(--primary)",
                  fontWeight: 700,
                  gap: 8,
                }}
              >
                Daftar Jadi Mitra <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .category-grid {
          grid-template-columns: repeat(5, 1fr) !important;
        }
        @media (min-width: 768px) {
          .category-grid {
            grid-template-columns: repeat(10, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
}
