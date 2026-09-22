import { useParams, Link } from "react-router-dom";
import {
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  Minus,
  Plus,
  ShoppingCart,
  ChevronLeft,
  Share2,
  Heart,
  Info,
} from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { getProductBySlug, getProductsByUMKM, formatPrice, getDiscountPercent, reviews } from "@/data/mockData";
import ProductCard from "@/components/shared/ProductCard";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [qty, setQty] = useState(1);
  const [isFav, setIsFav] = useState(false);

  if (!product) {
    return (
      <div className="container" style={{ padding: "80px 16px", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🍽️</div>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Produk tidak ditemukan</h2>
        <Link to="/explore" className="btn btn-primary">Kembali ke Jelajahi</Link>
      </div>
    );
  }

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount ? getDiscountPercent(product.originalPrice!, product.price) : 0;
  const relatedProducts = getProductsByUMKM(product.umkmId).filter((p) => p.id !== product.id);
  const productReviews = reviews.filter((r) => r.productId === product.id);

  const handleAddToCart = () => {
    Swal.fire({
      icon: "success",
      title: "Ditambahkan ke Keranjang!",
      text: `${qty}x ${product.name}`,
      confirmButtonColor: "#EE4D2D",
      confirmButtonText: "OK",
      timer: 2000,
    });
  };

  return (
    <main style={{ minHeight: "80vh", paddingBottom: 100 }}>
      <div className="container" style={{ paddingTop: 16 }}>
        {/* Back Button */}
        <Link
          to="/explore"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            fontSize: 14,
            color: "var(--muted)",
            marginBottom: 16,
          }}
        >
          <ChevronLeft size={18} /> Kembali
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
          }}
          className="product-detail-grid"
        >
          {/* Image */}
          <div>
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                position: "relative",
                paddingTop: "75%",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* Badges */}
              <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 6 }}>
                {product.type === "flash-deal" && <span className="badge badge-flash">⚡ Flash Deal</span>}
                {product.type === "surplus" && <span className="badge badge-surplus">🌿 Surplus</span>}
                {product.isBestSeller && <span className="badge badge-bestseller">🔥 Best Seller</span>}
              </div>
              {/* Actions */}
              <div style={{ position: "absolute", top: 16, right: 16, display: "flex", gap: 8 }}>
                <button
                  className="btn btn-icon"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "var(--radius-full)",
                    width: 40,
                    height: 40,
                  }}
                  onClick={() => setIsFav(!isFav)}
                >
                  <Heart size={20} fill={isFav ? "var(--primary)" : "none"} stroke={isFav ? "var(--primary)" : "var(--foreground)"} />
                </button>
                <button
                  className="btn btn-icon"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "var(--radius-full)",
                    width: 40,
                    height: 40,
                  }}
                >
                  <Share2 size={20} />
                </button>
              </div>
              {hasDiscount && (
                <div
                  className="badge badge-discount"
                  style={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    fontSize: 16,
                    padding: "6px 14px",
                  }}
                >
                  -{discountPercent}%
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill={s <= product.rating ? "var(--warning)" : "var(--border)"} stroke={s <= product.rating ? "var(--warning)" : "var(--border)"} />
                ))}
                <span style={{ fontSize: 14, fontWeight: 600, marginLeft: 4 }}>{product.rating}</span>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>({product.ratingCount})</span>
              </div>
              <span style={{ color: "var(--border)" }}>|</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>Terjual {product.soldCount}</span>
            </div>

            {/* Price */}
            <div
              style={{
                backgroundColor: "var(--primary-lighter)",
                padding: "16px 20px",
                borderRadius: "var(--radius-lg)",
                marginBottom: 20,
              }}
            >
              <div className="price" style={{ gap: 12 }}>
                <span className="price-current" style={{ fontSize: 28 }}>
                  {formatPrice(product.price)}
                </span>
                {hasDiscount && (
                  <span className="price-original" style={{ fontSize: 16 }}>
                    {formatPrice(product.originalPrice!)}
                  </span>
                )}
              </div>
            </div>

            {/* UMKM Info */}
            <Link
              to={`/umkm/${product.umkmId}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 16px",
                backgroundColor: "var(--surface)",
                borderRadius: "var(--radius-lg)",
                marginBottom: 20,
                transition: "background var(--transition-fast)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--surface-hover)")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "var(--surface)")}
            >
              <MapPin size={18} style={{ color: "var(--primary)", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{product.umkmName}</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Lihat toko →</div>
              </div>
            </Link>

            {/* Description */}
            <div style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>Deskripsi</h3>
              <p style={{ fontSize: 14, color: "var(--foreground-secondary)", lineHeight: 1.7 }}>
                {product.description}
              </p>
            </div>

            {/* Food Safety Info */}
            {(product.productionTime || product.shelfLife || product.pickupTime) && (
              <div
                style={{
                  backgroundColor: "var(--success-light)",
                  borderRadius: "var(--radius-lg)",
                  padding: "16px 20px",
                  marginBottom: 20,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <ShieldCheck size={18} style={{ color: "var(--success)" }} />
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--success)" }}>Info Keamanan Pangan</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {product.productionTime && (
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                      <Clock size={14} style={{ color: "var(--muted)" }} />
                      <span>Waktu Produksi: <strong>{product.productionTime}</strong></span>
                    </div>
                  )}
                  {product.shelfLife && (
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                      <Info size={14} style={{ color: "var(--muted)" }} />
                      <span>Masa Simpan: <strong>{product.shelfLife}</strong></span>
                    </div>
                  )}
                  {product.pickupTime && (
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                      <Clock size={14} style={{ color: "var(--warning)" }} />
                      <span style={{ color: "var(--warning)", fontWeight: 600 }}>{product.pickupTime}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Stock */}
            <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>
              Stok: <strong style={{ color: product.stock <= 5 ? "var(--destructive)" : "var(--foreground)" }}>{product.stock} porsi</strong>
            </div>

            {/* Quantity + Add to Cart */}
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0,
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                }}
              >
                <button
                  className="btn btn-icon btn-ghost"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  style={{ borderRadius: 0, width: 40, height: 40 }}
                >
                  <Minus size={16} />
                </button>
                <span
                  style={{
                    width: 48,
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: 15,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {qty}
                </span>
                <button
                  className="btn btn-icon btn-ghost"
                  onClick={() => setQty(Math.min(product.stock, qty + 1))}
                  style={{ borderRadius: 0, width: 40, height: 40 }}
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                className="btn btn-primary btn-lg"
                onClick={handleAddToCart}
                style={{ flex: 1, minWidth: 200 }}
              >
                <ShoppingCart size={18} />
                Tambah ke Keranjang — {formatPrice(product.price * qty)}
              </button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {productReviews.length > 0 && (
          <div style={{ marginTop: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
              Ulasan ({productReviews.length})
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {productReviews.map((review) => (
                <div
                  key={review.id}
                  style={{
                    padding: "16px 20px",
                    backgroundColor: "var(--surface)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "var(--primary-light)",
                        color: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                        fontSize: 13,
                      }}
                    >
                      {review.userName.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{review.userName}</div>
                      <div style={{ display: "flex", gap: 2 }}>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={11} fill={s <= review.rating ? "var(--warning)" : "var(--border)"} stroke={s <= review.rating ? "var(--warning)" : "var(--border)"} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--foreground-secondary)", lineHeight: 1.6 }}>
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
              Produk Lainnya dari {product.umkmName}
            </h2>
            <div className="scroll-x" style={{ gap: 16 }}>
              {relatedProducts.map((p) => (
                <div key={p.id} style={{ minWidth: 180, maxWidth: 200 }}>
                  <ProductCard product={p} showUMKM={false} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
