import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  MapPin,
  ChevronDown,
} from "lucide-react";
import logoImg from "@/assets/images/logo.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Beranda", path: "/" },
    { label: "Jelajahi", path: "/explore" },
    { label: "Flash Deal", path: "/flash-deals" },
    { label: "Hidden Gem", path: "/hidden-gem" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className="navbar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: "var(--z-sticky)" as any,
          backgroundColor: isScrolled ? "rgba(255,255,255,0.97)" : "#fff",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled ? "var(--shadow-sm)" : "none",
          transition: "all var(--transition-normal)",
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            backgroundColor: "var(--primary)",
            color: "#fff",
            fontSize: 12,
            padding: "6px 0",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <MapPin size={13} />
            <span>Sekitar UNESA Ketintang, Surabaya</span>
            <ChevronDown size={13} />
          </div>
        </div>

        {/* Main Nav */}
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              padding: "12px 0",
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}
            >
              <img
                src={logoImg}
                alt="SecondBit"
                style={{
                  height: 36,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>

            {/* Search Bar - Desktop */}
            <div
              style={{
                flex: 1,
                display: "none",
                position: "relative",
              }}
              className="search-desktop"
            >
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
                placeholder="Cari makanan, UMKM, atau kategori..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  paddingLeft: 42,
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--surface)",
                  border: "none",
                }}
              />
            </div>

            {/* Nav Links - Desktop */}
            <nav
              style={{ display: "none", gap: 4 }}
              className="nav-desktop"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: "8px 14px",
                    fontSize: 14,
                    fontWeight: isActive(link.path) ? 600 : 500,
                    color: isActive(link.path)
                      ? "var(--primary)"
                      : "var(--foreground)",
                    borderRadius: "var(--radius-md)",
                    transition: "all var(--transition-fast)",
                    whiteSpace: "nowrap",
                    backgroundColor: isActive(link.path)
                      ? "var(--primary-light)"
                      : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginLeft: "auto",
              }}
            >
              {/* Search icon - Mobile */}
              <Link
                to="/explore"
                className="btn btn-icon btn-ghost mobile-only"
                style={{ display: "flex" }}
              >
                <Search size={20} />
              </Link>
              <Link to="/buyer" className="btn btn-icon btn-ghost" aria-label="Cart">
                <ShoppingCart size={20} />
              </Link>
              <Link to="/login" className="btn btn-primary btn-sm desktop-only">
                <User size={16} />
                Masuk
              </Link>
              <button
                className="btn btn-icon btn-ghost mobile-only"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
                style={{ display: "flex" }}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              boxShadow: "var(--shadow-lg)",
              padding: "16px",
              animation: "fadeIn 0.2s ease",
              zIndex: "var(--z-dropdown)" as any,
            }}
          >
            {/* Mobile Search */}
            <div style={{ position: "relative", marginBottom: 16 }}>
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
                placeholder="Cari makanan, UMKM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  paddingLeft: 42,
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--surface)",
                  border: "none",
                }}
              />
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: "12px 16px",
                    fontSize: 15,
                    fontWeight: isActive(link.path) ? 600 : 400,
                    color: isActive(link.path)
                      ? "var(--primary)"
                      : "var(--foreground)",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: isActive(link.path)
                      ? "var(--primary-light)"
                      : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid var(--border-light)",
                  margin: "8px 0",
                }}
              />
              <Link
                to="/login"
                style={{
                  padding: "12px 16px",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--primary)",
                }}
              >
                Masuk / Daftar
              </Link>
            </nav>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 768px) {
          .search-desktop { display: flex !important; }
          .mobile-only { display: none !important; }
        }
        @media (min-width: 1024px) {
          .nav-desktop { display: flex !important; }
        }
        @media (max-width: 767px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </>
  );
}
