import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, User, Store } from "lucide-react";
import Swal from "sweetalert2";
import logoImg from "@/assets/images/logo.jpg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"buyer" | "seller">("buyer");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Registrasi Berhasil!",
      text: role === "seller"
        ? "Akun mitra UMKM kamu sedang diverifikasi"
        : "Selamat bergabung di SecondBit!",
      confirmButtonColor: "#EE4D2D",
      timer: 2500,
    });
  };

  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
        backgroundColor: "var(--surface)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          backgroundColor: "var(--background)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          padding: "40px 32px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <img
            src={logoImg}
            alt="SecondBit"
            style={{ height: 44, margin: "0 auto 16px", objectFit: "contain" }}
          />
          <h1 style={{ fontSize: 22, fontWeight: 700 }}>Buat Akun Baru</h1>
          <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 4 }}>
            Gabung dan nikmati kuliner UMKM lokal
          </p>
        </div>

        {/* Role Selector */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 24,
          }}
        >
          {[
            { value: "buyer" as const, label: "Pembeli", icon: User, desc: "Cari & beli makanan" },
            { value: "seller" as const, label: "Mitra UMKM", icon: Store, desc: "Jual makananmu" },
          ].map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setRole(opt.value)}
              style={{
                padding: "16px 12px",
                borderRadius: "var(--radius-lg)",
                border: `2px solid ${role === opt.value ? "var(--primary)" : "var(--border)"}`,
                backgroundColor: role === opt.value ? "var(--primary-light)" : "transparent",
                cursor: "pointer",
                textAlign: "center",
                transition: "all var(--transition-fast)",
              }}
            >
              <opt.icon
                size={24}
                style={{
                  color: role === opt.value ? "var(--primary)" : "var(--muted)",
                  margin: "0 auto 6px",
                }}
              />
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: role === opt.value ? "var(--primary)" : "var(--foreground)",
                }}
              >
                {opt.label}
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>
                {opt.desc}
              </div>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, fontWeight: 500, display: "block", marginBottom: 6 }}>
              Nama Lengkap
            </label>
            <div style={{ position: "relative" }}>
              <User
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
                placeholder="Masukkan nama lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ paddingLeft: 42 }}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, fontWeight: 500, display: "block", marginBottom: 6 }}>
              Email
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
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ paddingLeft: 42 }}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 13, fontWeight: 500, display: "block", marginBottom: 6 }}>
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
                placeholder="Minimal 8 karakter"
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
          </div>

          <button className="btn btn-primary btn-lg" type="submit" style={{ width: "100%" }}>
            Daftar Sekarang
          </button>
        </form>

        <div
          style={{
            textAlign: "center",
            marginTop: 24,
            fontSize: 14,
            color: "var(--muted)",
          }}
        >
          Sudah punya akun?{" "}
          <Link to="/login" style={{ color: "var(--primary)", fontWeight: 600 }}>
            Masuk
          </Link>
        </div>
      </div>
    </main>
  );
}
