import { Link, useLocation } from "react-router-dom";
import { Home, Search, Zap, ClipboardList, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Beranda", path: "/" },
  { icon: Search, label: "Jelajahi", path: "/explore" },
  { icon: Zap, label: "Flash Deal", path: "/flash-deals" },
  { icon: ClipboardList, label: "Pesanan", path: "/buyer" },
  { icon: User, label: "Akun", path: "/login" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive =
          item.path === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.path);

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`bottom-nav-item ${isActive ? "active" : ""}`}
          >
            <item.icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
