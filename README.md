# SecondBit 🍲🌱
> **Platform Food Rescue & Hidden-Gem UMKM** — Solusi cerdas selamatkan makanan surplus, dukung UMKM lokal, dan nikmati kuliner lezat berkualitas dengan harga hemat.

[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

---

## 📌 Tentang SecondBit

**SecondBit** adalah marketplace kuliner digital yang mengusung misi **Food Rescue** dan pemberdayaan **Hidden-Gem UMKM** (fokus awal di sekitar kawasan kampus UNESA Ketintang, Surabaya).

Banyak UMKM kuliner menghadapi risiko *food waste* akibat surplus makanan yang belum terjual di penghujung hari, sementara di sisi lain mahasiswa dan masyarakat sekitar membutuhkan akses kuliner yang lezat, terjangkau, dan mudah ditemukan. SecondBit menjembatani keduanya melalui transaksi *closed-loop*, fitur **Flash Deal**, **Surplus Rescue**, direktori **Hidden Gem**, serta sistem **QR Code Pickup**.

---

## ✨ Fitur Utama

### 🛒 1. Pengalaman Konsumen (Buyer)
- **Katalog & Navigasi Fleksibel**: Beranda bergaya *ShopeeFood* dengan banner promo interaktif, kategori kuliner, dan kurasi resto favorit.
- **⚡ Flash Deal & Surplus Rescue**: Diskon besar untuk makanan lezat surplus harian guna menekan potensi *food waste*.
- **💎 Hidden Gem Directory**: Rekomendasi kuliner legendaris dan UMKM tersembunyi dengan filter rating, jarak, dan kategori.
- **📱 QR Code Pickup System**: Pesanan dibeli secara online dan diverifikasi saat pengambilan makanan menggunakan QR Code.
- **🌗 Light & Dark Mode**: Tampilan responsif dengan default Light Mode yang nyaman di mata dan tombol toggle Dark Mode instan.

### 🏪 2. Portal Mitra UMKM (Seller)
- **Dashboard Bisnis**: Ringkasan performa penjualan, pesanan masuk, dan total pendapatan.
- **Manajemen Menu & Stok Surplus**: Tambah dan atur status makanan normal vs. surplus food rescue.
- **Validasi QR Pickup**: Scanner/verifikasi kode unik pesanan pelanggan secara langsung.

### 🛡️ 3. Portal Administrator (Admin)
- **Monitoring Platform**: Pantau metrik KPI (Total Transaksi, GMV, Total Makanan Diselamatkan, UMKM Aktif).
- **Audit & Approval UMKM**: Kurasi pendaftaran merchant dan pemantauan kepatuhan standar kualitas.

### 🔑 4. Multi-Role Authentication
- Halaman login cerdas dengan pemilih role instan (**Pembeli**, **Mitra UMKM**, **Admin**).
- Tombol **1-Click Auto Fill Demo** untuk pengujian cepat tanpa ribet.
- **Otomatis Redirect**: Pengguna langsung dialihkan ke dashboard spesifik sesuai role yang dipilih.

---

## 🛠️ Tech Stack

- **Frontend Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: Vanilla CSS Design System (ShopeeFood theme, Glassmorphism, CSS Custom Properties) + Tailwind CSS v4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive Alerts**: [SweetAlert2](https://sweetalert2.github.io/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

---

## 📂 Struktur Proyek

```plaintext
SECOND-BIT/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Gambar lokal & logo SecondBit
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, BottomNav
│   │   └── shared/         # ProductCard, UMKMCard, Badges
│   ├── data/               # Mock data (UMKM, produk, order, kategori)
│   ├── hooks/              # useTheme (Light/Dark mode)
│   ├── pages/
│   │   ├── admin/          # Admin Dashboard & Analytics
│   │   ├── buyer/          # Buyer Dashboard & History Pesanan
│   │   ├── seller/         # Seller Dashboard & Manajemen Produk
│   │   ├── Explore.tsx     # Katalog eksplorasi & pencarian
│   │   ├── FlashDeals.tsx  # Halaman Flash Deal & Food Rescue
│   │   ├── HiddenGem.tsx   # Direktori Hidden Gem UMKM
│   │   ├── Home.tsx        # Halaman Beranda (ShopeeFood UI)
│   │   ├── Login.tsx       # Login dengan role selector & redirect
│   │   ├── ProductDetail.tsx
│   │   ├── Register.tsx
│   │   └── UMKMDetail.tsx  # Profil Toko & Menu UMKM
│   ├── types/              # Deklarasi antarmuka TypeScript
│   ├── App.tsx             # Root routing & context provider
│   ├── index.css           # Global Design System tokens & styles
│   └── main.tsx            # Entry point aplikasi
├── PRD.md                  # Product Requirements Document
├── arsitektur.md           # Dokumen Arsitektur Sistem & Database
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Memulai (Quick Start)

### 1. Prasyarat
Pastikan sistem Anda telah terpasang:
- [Node.js](https://nodejs.org/) (versi 18+ disarankan)
- Package manager `npm` atau `yarn`

### 2. Instalasi Dependensi
```bash
git clone https://github.com/username/second-bit.git
cd SECOND-BIT
npm install
```

### 3. Menjalankan Server Lokal (Development)
```bash
npm run dev
```
Buka browser dan akses: **`http://localhost:5173`**

### 4. Build untuk Production
```bash
npm run build
```
Hasil build yang optimal dan terkompresi akan disimpan di folder `dist/`.

---

## 🧪 Akun Demo Pengujian

Untuk mempermudah eksplorasi semua role, gunakan akun demo berikut di halaman **`/login`** (atau gunakan tombol *Isi Demo*):

| Role | Email Demo | Password Demo | Dashboard Target |
|:---|:---|:---|:---|
| 🛍️ **Pembeli (Buyer)** | `buyer@secondbit.com` | `buyer123` | [`/buyer`](http://localhost:5173/buyer) |
| 🏪 **Mitra UMKM (Seller)** | `seller@secondbit.com` | `seller123` | [`/seller`](http://localhost:5173/seller) |
| 🛡️ **Administrator** | `admin@secondbit.com` | `admin123` | [`/admin`](http://localhost:5173/admin) |

---

## 🤝 Kontribusi & Lisensi

Proyek ini dikembangkan untuk mendukung ketahanan pangan lokal, mengurangi *food waste*, dan mendigitalisasi UMKM Indonesia. Kontribusi berupa saran fitur, pull request, dan pengujian sangat diapresiasi!

Lisensi: [MIT](LICENSE)
