import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import AOS from "aos";

import ProductCard from "@/components/shared/ProductCard";
import CategoryPills from "@/components/shared/CategoryPills";
import { products, categories } from "@/data/mockData";

export default function Explore() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const typeFilter = searchParams.get("type") || "";

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, []);

  let filtered = [...products];

  // Filter by search
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.umkmName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  // Filter by category
  if (categoryFilter) {
    const cat = categories.find((c) => c.slug === categoryFilter);
    if (cat) {
      filtered = filtered.filter((p) => p.category === cat.name);
    }
  }

  // Filter by type
  if (typeFilter) {
    filtered = filtered.filter((p) => p.type === typeFilter);
  }

  // Sort
  switch (sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "best-seller":
      filtered.sort((a, b) => b.soldCount - a.soldCount);
      break;
    default:
      filtered.sort((a, b) => b.soldCount - a.soldCount);
  }

  return (
    <main style={{ minHeight: "80vh" }}>
      <div className="container" style={{ paddingTop: 20, paddingBottom: 40 }}>
        {/* Header */}
        <div data-aos="fade-up">
          <h1
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            {typeFilter === "surplus"
              ? "🌿 Surplus Rescue"
              : "Jelajahi Makanan"}
          </h1>
          <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 20 }}>
            {typeFilter === "surplus"
              ? "Makanan layak konsumsi dengan harga spesial — kurangi food waste!"
              : "Temukan kuliner UMKM lokal terbaik di sekitarmu"}
          </p>
        </div>

        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 16,
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div style={{ flex: 1, position: "relative" }}>
            <Search
              size={18}
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--muted-light)",
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="Cari makanan atau UMKM..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: 42 }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "var(--muted)",
                  padding: 4,
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button
            className="btn btn-outline"
            onClick={() => setShowFilters(!showFilters)}
            style={{ flexShrink: 0 }}
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {/* Categories */}
        <div style={{ marginBottom: 16 }} data-aos="fade-up" data-aos-delay="150">
          <CategoryPills categories={categories} activeSlug={categoryFilter} />
        </div>

        {/* Filter/Sort Bar */}
        {showFilters && (
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 20,
              flexWrap: "wrap",
              padding: "16px",
              backgroundColor: "var(--surface)",
              borderRadius: "var(--radius-lg)",
              animation: "fadeInUp 0.3s ease",
            }}
          >
            <div style={{ flex: 1, minWidth: 160 }}>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--muted)",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Urutkan
              </label>
              <select
                className="input"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ fontSize: 13 }}
              >
                <option value="popular">Terpopuler</option>
                <option value="rating">Rating Tertinggi</option>
                <option value="price-low">Harga Terendah</option>
                <option value="price-high">Harga Tertinggi</option>
                <option value="best-seller">Terlaris</option>
              </select>
            </div>
          </div>
        )}

        {/* Results */}
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: 13, color: "var(--muted)" }}>
            {filtered.length} produk ditemukan
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid-products">
            {filtered.map((product, i) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={i * 60}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "var(--muted)",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--foreground)" }}>
              Produk tidak ditemukan
            </h3>
            <p style={{ fontSize: 14 }}>
              Coba kata kunci lain atau ubah filter pencarian
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
