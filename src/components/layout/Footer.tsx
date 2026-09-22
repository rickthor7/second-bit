import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, MessageCircle, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--foreground)",
        color: "var(--background)",
        padding: "48px 0 24px",
        marginTop: 60,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 36,
            marginBottom: 36,
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              <span>Second</span>
              <span style={{ color: "var(--primary)" }}>Bit</span>
            </h3>
            <p
              style={{
                fontSize: 14,
                opacity: 0.6,
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              Platform Food Rescue & UMKM Marketplace. Temukan kuliner lokal,
              Flash Deal, dan Surplus Food di sekitar UNESA Ketintang.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
              }}
            >
              {[Send, Globe, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background var(--transition-fast)",
                    color: "inherit",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--primary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.1)")
                  }
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 16,
                opacity: 0.5,
              }}
            >
              Menu
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Jelajahi", path: "/explore" },
                { label: "Flash Deal", path: "/flash-deals" },
                { label: "Hidden Gem", path: "/hidden-gem" },
                { label: "Surplus Rescue", path: "/explore?type=surplus" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: 14,
                    opacity: 0.7,
                    transition: "opacity var(--transition-fast)",
                    color: "inherit",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "0.7")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* For UMKM */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 16,
                opacity: 0.5,
              }}
            >
              Untuk UMKM
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Daftar Jadi Mitra",
                "Seller Dashboard",
                "Panduan Mitra",
                "SOP Food Safety",
              ].map((label) => (
                <a
                  key={label}
                  href="#"
                  style={{
                    fontSize: 14,
                    opacity: 0.7,
                    transition: "opacity var(--transition-fast)",
                    color: "inherit",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "0.7")}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 16,
                opacity: 0.5,
              }}
            >
              Kontak
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                { icon: MapPin, text: "UNESA Ketintang, Surabaya" },
                { icon: Phone, text: "+62 812-3456-7890" },
                { icon: Mail, text: "hello@secondbit.id" },
              ].map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    opacity: 0.7,
                  }}
                >
                  <Icon size={16} style={{ flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            fontSize: 13,
            opacity: 0.4,
          }}
        >
          <span>© 2026 SecondBit. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#" style={{ color: "inherit" }}>
              Kebijakan Privasi
            </a>
            <a href="#" style={{ color: "inherit" }}>
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
