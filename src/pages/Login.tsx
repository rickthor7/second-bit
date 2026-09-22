import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ShoppingBag, Store, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
import logoImg from "@/assets/images/logo.jpg";

type RoleType = "buyer" | "seller" | "admin";

interface RoleOption {
  value: RoleType;
  label: string;
  badge: string;
  desc: string;
  icon: typeof ShoppingBag;
  targetPath: string;
  demoEmail: string;
  demoPass: string;
}

const ROLES: RoleOption[] = [
  {
    value: "buyer",
    label: "Pembeli",
    badge: "Buyer",
    desc: "Pesan & selamatkan makanan",
    icon: ShoppingBag,
    targetPath: "/buyer",
    demoEmail: "buyer@secondbit.com",
    demoPass: "buyer123",
  },
  {
    value: "seller",
    label: "Mitra UMKM",
    badge: "Seller",
    desc: "Kelola menu & pesanan",
    icon: Store,
    targetPath: "/seller",
    demoEmail: "seller@secondbit.com",
    demoPass: "seller123",
  },
  {
    value: "admin",
    label: "Admin",
    badge: "Super Admin",
    desc: "Audit sistem & mitra",
    icon: ShieldCheck,
    targetPath: "/admin",
    demoEmail: "admin@secondbit.com",
    demoPass: "admin123",
  },
];

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState<RoleType>("buyer");
  const [email, setEmail] = useState("buyer@secondbit.com");
  const [password, setPassword] = useState("buyer123");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const activeRoleConfig = ROLES.find((r) => r.value === role) || ROLES[0];

  const handleRoleChange = (newRole: RoleType) => {
    setRole(newRole);
    const targetConfig = ROLES.find((r) => r.value === newRole);
    if (targetConfig) {
      setEmail(targetConfig.demoEmail);
      setPassword(targetConfig.demoPass);
    }
  };

  const handleUseDemo = () => {
    setEmail(activeRoleConfig.demoEmail);
    setPassword(activeRoleConfig.demoPass);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save auth session
    localStorage.setItem(
      "secondbit-auth",
      JSON.stringify({
        email: email || activeRoleConfig.demoEmail,
        role: role,
        name:
          role === "buyer"
            ? "Ahmad Rizky"
            : role === "seller"
            ? "Warung Bu Siti (Mitra)"
            : "Super Admin SecondBit",
        isLoggedIn: true,
        loginAt: new Date().toISOString(),
      })
    );

    Swal.fire({
      icon: "success",
      title: "Login Berhasil!",
      html: `<div style="font-size: 15px; color: var(--muted); margin-top: 6px;">
        Selamat datang kembali di <b>SecondBit</b> sebagai <b>${activeRoleConfig.label}</b>.<br/>
        Mengarahkan ke Dashboard...
      </div>`,
      confirmButtonColor: "#EE4D2D",
      timer: 1400,
      showConfirmButton: false,
    }).then(() => {
      navigate(activeRoleConfig.targetPath);
    });
  };

  return (
    <main
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 16px",
        backgroundColor: "var(--surface)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          backgroundColor: "var(--background)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          padding: "36px 30px",
          border: "1px solid var(--border)",
          transition: "background-color 0.25s ease, border-color 0.25s ease",
        }}
      >
        {/* Logo & Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <img
            src={logoImg}
            alt="SecondBit"
            style={{ height: 46, margin: "0 auto 14px", objectFit: "contain" }}
          />
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "var(--foreground)" }}>
            Masuk ke SecondBit
          </h1>
          <p style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 4 }}>
            Pilih role akun kamu untuk masuk ke dashboard yang sesuai
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div style={{ marginBottom: 24 }}>
          <label
            style={{
              fontSize: 12.5,
              fontWeight: 600,
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              display: "block",
              marginBottom: 10,
            }}
          >
            Pilih Role Akun
          </label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            {ROLES.map((r) => {
              const isSelected = role === r.value;
              const Icon = r.icon;
              return (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => handleRoleChange(r.value)}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "14px 8px",
                    borderRadius: "var(--radius-lg)",
                    border: `2px solid ${
                      isSelected ? "var(--primary)" : "var(--border)"
                    }`,
                    backgroundColor: isSelected
                      ? "var(--primary-light)"
                      : "transparent",
                    cursor: "pointer",
                    transition: "all var(--transition-fast)",
                    outline: "none",
                  }}
                >
                  {isSelected && (
                    <span
                      style={{
                        position: "absolute",
                        top: 6,
                        right: 6,
                        color: "var(--primary)",
                        display: "flex",
                      }}
                    >
                      <CheckCircle2 size={14} />
                    </span>
                  )}
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "var(--radius-full)",
                      backgroundColor: isSelected
                        ? "var(--primary)"
                        : "var(--surface)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 8,
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <Icon
                      size={19}
                      style={{
                        color: isSelected ? "#fff" : "var(--muted)",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: isSelected ? 700 : 600,
                      color: isSelected
                        ? "var(--primary)"
                        : "var(--foreground)",
                    }}
                  >
                    {r.label}
                  </span>
                  <span
                    style={{
                      fontSize: 10.5,
                      color: isSelected ? "var(--primary-dark)" : "var(--muted)",
                      marginTop: 2,
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {r.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Info & Demo Account Pill */}
          <div
            style={{
              marginTop: 12,
              padding: "10px 14px",
              backgroundColor: "var(--surface)",
              borderRadius: "var(--radius-md)",
              border: "1px dashed var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <div style={{ fontSize: 12, color: "var(--foreground)" }}>
              🎯 Target: <b>{activeRoleConfig.targetPath}</b>
              <span style={{ color: "var(--muted)", marginLeft: 6 }}>
                ({activeRoleConfig.desc})
              </span>
            </div>
            <button
              type="button"
              onClick={handleUseDemo}
              title="Isi form dengan akun demo role ini"
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "var(--primary)",
                background: "var(--primary-light)",
                border: "none",
                borderRadius: "var(--radius-full)",
                padding: "3px 10px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Isi Demo
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                fontSize: 13,
                fontWeight: 500,
                display: "block",
                marginBottom: 6,
                color: "var(--foreground)",
              }}
            >
              Email ({activeRoleConfig.label})
            </label>
            <div style={{ position: "relative" }}>
              <Mail
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
                type="email"
                placeholder={activeRoleConfig.demoEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ paddingLeft: 42 }}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: 22 }}>
            <label
              style={{
                fontSize: 13,
                fontWeight: 500,
                display: "block",
                marginBottom: 6,
                color: "var(--foreground)",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <Lock
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
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingLeft: 42, paddingRight: 42 }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "var(--muted)",
                  padding: 4,
                  cursor: "pointer",
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div style={{ textAlign: "right", marginTop: 8 }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  Swal.fire({
                    icon: "info",
                    title: "Lupa Password?",
                    text: `Gunakan akun demo: ${activeRoleConfig.demoEmail} / ${activeRoleConfig.demoPass}`,
                    confirmButtonColor: "#EE4D2D",
                  });
                }}
                style={{ fontSize: 12.5, color: "var(--primary)", fontWeight: 500 }}
              >
                Lupa Password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="btn btn-primary btn-lg"
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontSize: 15,
            }}
          >
            <span>Masuk ke Dashboard {activeRoleConfig.label}</span>
            <ArrowRight size={17} />
          </button>
        </form>

        {/* Footer Link */}
        <div
          style={{
            textAlign: "center",
            marginTop: 22,
            fontSize: 13.5,
            color: "var(--muted)",
          }}
        >
          Belum punya akun?{" "}
          <Link to="/register" style={{ color: "var(--primary)", fontWeight: 600 }}>
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </main>
  );
}
