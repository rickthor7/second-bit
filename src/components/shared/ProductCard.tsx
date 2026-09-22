import { Link } from "react-router-dom";
import { Star, Clock, MapPin } from "lucide-react";
import { Product, formatPrice, getDiscountPercent } from "@/data/mockData";

interface ProductCardProps {
  product: Product;
  showUMKM?: boolean;
}

export default function ProductCard({ product, showUMKM = true }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? getDiscountPercent(product.originalPrice!, product.price)
    : 0;

  return (
    <Link
      to={`/product/${product.slug}`}
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          paddingTop: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform var(--transition-slow)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />

        {/* Badges */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {product.type === "flash-deal" && (
            <span className="badge badge-flash">⚡ Flash Deal</span>
          )}
          {product.type === "surplus" && (
            <span className="badge badge-surplus">🌿 Surplus</span>
          )}
          {product.isBestSeller && (
            <span className="badge badge-bestseller">🔥 Best Seller</span>
          )}
        </div>

        {/* Discount Badge */}
        {hasDiscount && (
          <div
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "var(--destructive)",
              color: "#fff",
              padding: "2px 8px",
              borderRadius: "var(--radius-sm)",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            -{discountPercent}%
          </div>
        )}

        {/* Stock indicator */}
        {product.stock <= 5 && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(229, 57, 53, 0.9)",
              color: "#fff",
              textAlign: "center",
              fontSize: 11,
              fontWeight: 600,
              padding: "4px 0",
            }}
          >
            Sisa {product.stock} porsi!
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "12px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--foreground)",
            marginBottom: 4,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: 1.4,
          }}
        >
          {product.name}
        </h3>

        {showUMKM && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginBottom: 6,
            }}
          >
            <MapPin size={12} style={{ color: "var(--muted)", flexShrink: 0 }} />
            <span
              style={{
                fontSize: 12,
                color: "var(--muted)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {product.umkmName}
            </span>
          </div>
        )}

        {/* Price */}
        <div className="price" style={{ marginBottom: 6 }}>
          <span className="price-current">{formatPrice(product.price)}</span>
          {hasDiscount && (
            <span className="price-original">
              {formatPrice(product.originalPrice!)}
            </span>
          )}
        </div>

        {/* Rating & Sold */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: "auto",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Star
              size={13}
              fill="var(--warning)"
              stroke="var(--warning)"
            />
            <span style={{ fontWeight: 600, color: "var(--foreground)" }}>
              {product.rating}
            </span>
          </div>
          <span>•</span>
          <span>Terjual {product.soldCount > 999 ? `${(product.soldCount / 1000).toFixed(1)}rb` : product.soldCount}</span>
        </div>

        {/* Pickup time for surplus/flash-deal */}
        {product.pickupTime && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginTop: 8,
              fontSize: 11,
              color: "var(--success)",
              fontWeight: 500,
            }}
          >
            <Clock size={12} />
            {product.pickupTime}
          </div>
        )}
      </div>
    </Link>
  );
}
