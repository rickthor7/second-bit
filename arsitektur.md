# ARSITEKTUR — Platform Food Rescue & Hidden-Gem UMKM

## 1. Ringkasan

Platform dibangun sebagai website marketplace makanan UMKM dengan **Vite + React** sebagai frontend utama.

Arsitektur frontend menggunakan pendekatan modular berbasis komponen agar setiap fitur dapat dikembangkan dan dirawat secara terpisah. UI menggunakan **shadcn/ui** sebagai fondasi komponen, **AOS.js** untuk animasi berbasis scroll, dan **SweetAlert2** untuk alert, konfirmasi, feedback transaksi, serta notifikasi aksi penting.

Prinsip utama arsitektur:
- Modular.
- Component-based.
- Reusable.
- Responsive.
- Maintainable.
- Tidak menggunakan template UI generik yang menghasilkan tampilan “AI slop”.
- Setiap komponen harus memiliki fungsi dan alasan desain yang jelas.

---

## 2. Technology Stack

### Frontend

| Teknologi | Fungsi |
|---|---|
| Vite | Build tool dan development server |
| React | Framework/library utama frontend |
| TypeScript | Type safety |
| React Router | Routing halaman |
| shadcn/ui | Component system dan UI primitives |
| Tailwind CSS | Styling dan layout |
| AOS.js | Scroll reveal dan entrance animation |
| SweetAlert2 | Alert, confirmation, success/error feedback |
| Lucide React | Icon system |
| TanStack Query | Server-state/data fetching jika diperlukan |
| Zod | Validasi schema |
| React Hook Form | Pengelolaan form |

### Backend / API

Frontend berkomunikasi dengan backend melalui REST API.

Backend tidak dikunci pada implementasi tertentu di dalam frontend. API harus dipisahkan dari presentation layer agar backend dapat dikembangkan atau diganti tanpa mengubah struktur UI secara besar.

### Database

Database menyimpan data:
- User.
- UMKM.
- Produk.
- Flash Deal.
- Surplus Food.
- Order.
- Order Item.
- Payment.
- Pickup Ticket.
- Settlement.
- Rating.
- Review.
- Voucher.
- Subscription.
- Notification.
- Analytics.

---

## 3. Arsitektur High-Level

```text
                    ┌──────────────────────┐
                    │      User / Client   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Vite + React     │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        React Router       UI Components     State/Data
              │             shadcn/ui       TanStack Query
              │                │
              │                ├── Tailwind
              │                ├── AOS.js
              │                └── SweetAlert2
              │
              ▼
        API / Service Layer
              │
              ▼
        Backend REST API
              │
       ┌──────┼────────┐
       │      │        │
       ▼      ▼        ▼
    Database Payment  Storage
               Gateway
                 │
                 ▼
               QRIS
```

---

## 4. Prinsip Frontend Architecture

Frontend dibagi menjadi beberapa layer:

```text
Pages
  ↓
Feature Components
  ↓
Shared Components
  ↓
UI Components
  ↓
Services / API
  ↓
Backend
```

### Pages

Page bertanggung jawab terhadap:
- Layout halaman.
- Penggabungan feature component.
- Routing context.
- Pengambilan data tingkat halaman.

Page tidak boleh berisi terlalu banyak logic bisnis.

### Feature Components

Feature component menangani fitur tertentu.

Contoh:
- ProductCard.
- FlashDealCard.
- UMKMCard.
- OrderCard.
- PickupQR.
- PaymentStatus.
- ReviewForm.
- SurplusForm.

### Shared Components

Komponen yang digunakan oleh banyak halaman.

Contoh:
- Navbar.
- Footer.
- SearchBar.
- EmptyState.
- LoadingState.
- ErrorState.
- Pagination.
- Modal.
- ConfirmDialog.

### UI Components

Komponen dasar berasal dari shadcn/ui.

Contoh:
- Button.
- Card.
- Dialog.
- DropdownMenu.
- Input.
- Select.
- Tabs.
- Badge.
- Sheet.
- Table.
- Skeleton.
- Toast.

---

## 5. Struktur Folder

Struktur project yang direkomendasikan:

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── tabs.tsx
│   │   ├── table.tsx
│   │   └── ...
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── MobileNav.tsx
│   │
│   └── shared/
│       ├── ProductCard.tsx
│       ├── UMKMCard.tsx
│       ├── FlashDealCard.tsx
│       ├── Rating.tsx
│       ├── SearchBar.tsx
│       ├── EmptyState.tsx
│       └── LoadingState.tsx
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   │
│   ├── products/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   │
│   ├── umkm/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   │
│   ├── orders/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   │
│   ├── payment/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   │
│   ├── pickup/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   │
│   ├── flash-deal/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   │
│   ├── reviews/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   │
│   └── admin/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types.ts
│
├── pages/
│   ├── Home.tsx
│   ├── Explore.tsx
│   ├── ProductDetail.tsx
│   ├── UMKMDetail.tsx
│   ├── FlashDeals.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── OrderDetail.tsx
│   ├── Pickup.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── buyer/
│   │   └── Dashboard.tsx
│   ├── seller/
│   │   └── Dashboard.tsx
│   └── admin/
│       └── Dashboard.tsx
│
├── hooks/
│   ├── useAuth.ts
│   ├── useDebounce.ts
│   └── useAOS.ts
│
├── lib/
│   ├── api.ts
│   ├── auth.ts
│   ├── utils.ts
│   ├── sweetalert.ts
│   └── aos.ts
│
├── routes/
│   ├── index.tsx
│   ├── ProtectedRoute.tsx
│   └── RoleRoute.tsx
│
├── types/
│   ├── auth.ts
│   ├── product.ts
│   ├── umkm.ts
│   ├── order.ts
│   └── payment.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 6. Routing

React Router digunakan untuk memisahkan area aplikasi berdasarkan role.

### Public

```text
/
 /explore
 /flash-deals
 /hidden-gem
 /umkm/:slug
 /product/:slug
 /login
 /register
```

### Buyer

```text
/buyer
/buyer/orders
/buyer/orders/:id
/buyer/pickup/:id
/buyer/favorites
/buyer/profile
/buyer/subscription
```

### Seller

```text
/seller
/seller/products
/seller/products/create
/seller/orders
/seller/orders/:id
/seller/pickup-scanner
/seller/sales
/seller/settlements
/seller/analytics
/seller/subscription
```

### Admin

```text
/admin
/admin/users
/admin/umkm
/admin/products
/admin/orders
/admin/payments
/admin/settlements
/admin/reviews
/admin/promotions
/admin/reports
```

---

## 7. Role-Based Access Control

Frontend menggunakan route guard:

```text
Authenticated
      │
      ▼
  Check Role
      │
 ┌────┼─────┐
 ▼    ▼     ▼
Admin Seller Buyer
```

Contoh:

```tsx
<Route
  path="/seller/*"
  element={
    <RoleRoute allowedRoles={["seller"]}>
      <SellerDashboard />
    </RoleRoute>
  }
/>
```

Backend tetap wajib melakukan authorization. Route guard frontend hanya untuk UX dan bukan mekanisme keamanan utama.

---

## 8. State Management

State dibagi menjadi dua kategori.

### Client State

Digunakan untuk:
- Modal.
- Sidebar.
- Filter UI.
- Cart sementara.
- Theme.
- Form state.

React state/context dapat digunakan.

### Server State

Digunakan untuk:
- Products.
- UMKM.
- Orders.
- Payments.
- Reviews.
- Dashboard statistics.

Gunakan TanStack Query agar:
- Cache terkontrol.
- Loading/error state konsisten.
- Refetch mudah.
- Mutation lebih terstruktur.

---

## 9. API Layer

Semua request API harus melewati service layer.

Contoh:

```text
components
    ↓
hooks
    ↓
services
    ↓
api client
    ↓
REST API
```

Contoh:

```ts
// features/products/services/product.service.ts

export async function getProducts(params?: ProductQuery) {
  return api.get("/products", { params });
}
```

Komponen tidak boleh melakukan request HTTP langsung.

---

## 10. API Domain

API dikelompokkan berdasarkan domain:

```text
/api/auth
/api/users
/api/umkms
/api/products
/api/categories
/api/flash-deals
/api/surplus
/api/orders
/api/payments
/api/pickups
/api/settlements
/api/reviews
/api/vouchers
/api/subscriptions
/api/notifications
/api/analytics
/api/admin
```

---

## 11. Payment Architecture

Payment flow:

```text
Buyer
  │
  ▼
Checkout
  │
  ▼
Create Order
  │
  ▼
Payment Gateway
  │
  ▼
QRIS / Payment
  │
  ▼
Payment Webhook
  │
  ▼
Backend Verification
  │
  ▼
Order = PAID
  │
  ▼
Generate Pickup QR
```

Frontend tidak boleh menentukan sendiri bahwa pembayaran berhasil hanya karena pengguna menekan tombol atau mengunggah screenshot.

Status pembayaran harus berasal dari backend/payment gateway.

---

## 12. Pickup QR Architecture

```text
Payment Success
      │
      ▼
Generate Order ID
      │
      ▼
Generate Dynamic QR
      │
      ▼
Buyer Pickup
      │
      ▼
Seller Scanner
      │
      ▼
Backend Verification
      │
      ▼
Valid?
 ┌────┴─────┐
 │          │
YES         NO
 │          │
 ▼          ▼
Complete   Reject
 │
 ▼
Settlement
```

QR tidak boleh menjadi satu-satunya sumber validasi. Scanner harus melakukan validasi ke backend untuk memastikan:
- Order valid.
- Pembayaran valid.
- Order belum pernah diambil.
- Order belum expired.
- QR sesuai dengan order.

---

## 13. AOS.js Animation System

AOS.js digunakan khusus untuk animasi berbasis scroll.

Contoh:

```tsx
<div data-aos="fade-up">
  <ProductCard />
</div>
```

### Prinsip Animasi

Gunakan animasi secara terukur.

Animasi yang diperbolehkan:
- `fade-up`
- `fade-down`
- `fade-left`
- `fade-right`
- `zoom-in`
- kombinasi duration/delay yang ringan.

Jangan:
- Memberikan animasi ke setiap elemen.
- Menggunakan animasi berlebihan.
- Membuat halaman terasa lambat.
- Menggunakan animasi sebagai pengganti hierarchy desain.

### Inisialisasi

AOS diinisialisasi sekali pada entry point aplikasi atau hook khusus.

```ts
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 600,
  once: true,
  offset: 80,
});
```

---

## 14. SweetAlert2

SweetAlert2 digunakan untuk aksi yang membutuhkan feedback atau konfirmasi.

### Use Cases

**Success**
- Produk berhasil dibuat.
- Pesanan berhasil dibuat.
- Pembayaran berhasil.
- Pickup berhasil diverifikasi.

**Error**
- Pembayaran gagal.
- QR tidak valid.
- Order sudah diambil.
- Server error.

**Confirmation**
- Hapus produk.
- Batalkan order.
- Logout.
- Refund.
- Menonaktifkan produk.

Contoh:

```ts
import Swal from "sweetalert2";

export function showSuccess(message: string) {
  return Swal.fire({
    icon: "success",
    title: "Berhasil",
    text: message,
    confirmButtonText: "OK",
  });
}
```

Gunakan wrapper/helper agar konfigurasi SweetAlert2 tidak ditulis berulang-ulang di setiap komponen.

---

## 15. shadcn/ui Design System

Semua komponen UI utama menggunakan shadcn/ui.

### Komponen Utama

```text
Button
Card
Badge
Dialog
Sheet
DropdownMenu
Input
Textarea
Select
Checkbox
RadioGroup
Tabs
Table
Pagination
Skeleton
Tooltip
Popover
Command
Separator
Avatar
```

Komponen dapat dikustomisasi sesuai visual identity platform.

### Prinsip Anti-AI-Slop

UI tidak boleh hanya berupa kombinasi:

```text
Gradient + Glassmorphism + Huge Text
+ Rounded Everything + Random Icons
```

Desain harus mempunyai:
- Hierarki visual.
- Spacing konsisten.
- Typography system.
- Grid system.
- Visual identity.
- Informasi yang jelas.
- CTA yang relevan.
- Empty state yang bermakna.
- Responsive behavior yang dirancang, bukan sekadar mengecilkan desktop.

shadcn/ui menjadi fondasi komponen, bukan batasan visual.

---

## 16. Design Tokens

Gunakan CSS variables untuk warna dan spacing.

Contoh:

```css
:root {
  --background: ...;
  --foreground: ...;
  --primary: ...;
  --secondary: ...;
  --muted: ...;
  --accent: ...;
  --destructive: ...;
  --border: ...;
  --radius: ...;
}
```

Semua komponen menggunakan token tersebut agar perubahan brand tidak membutuhkan perubahan manual pada banyak file.

---

## 17. Responsive Architecture

Target utama:

```text
Mobile
   ↓
Tablet
   ↓
Desktop
```

Breakpoint mengikuti kebutuhan layout, bukan berdasarkan perangkat tertentu.

Prioritas:
1. Mobile usability.
2. Touch target yang cukup.
3. Navigasi mudah.
4. Checkout sederhana.
5. Dashboard tetap usable pada layar kecil.
6. Scanner QR harus nyaman digunakan dari perangkat mobile.

---

## 18. Performance

Frontend harus menghindari bundle yang terlalu besar.

Implementasi:
- Lazy loading halaman.
- Code splitting berdasarkan route.
- Optimasi gambar.
- Lazy loading image.
- TanStack Query caching.
- Debounce search.
- Pagination/infinite query sesuai kebutuhan.
- Hindari render ulang yang tidak diperlukan.
- Jangan menjalankan animasi AOS secara berlebihan.

Contoh:

```tsx
const ProductDetail = lazy(
  () => import("@/pages/ProductDetail")
);
```

---

## 19. Error Handling

Error handling harus memiliki tiga level:

### UI Error
Kesalahan input pengguna.

Contoh:
- Harga kosong.
- Stok tidak valid.
- Form belum lengkap.

### API Error
Kesalahan request/backend.

Contoh:
- 400 Bad Request.
- 401 Unauthorized.
- 403 Forbidden.
- 404 Not Found.
- 422 Validation Error.
- 500 Server Error.

### Payment Error
Kesalahan pembayaran.

Contoh:
- Payment expired.
- Payment failed.
- Webhook belum masuk.
- Order tidak dapat diverifikasi.

Semua error harus menghasilkan feedback yang jelas kepada pengguna.

---

## 20. Security Principles

Frontend:
- Jangan menyimpan secret key.
- Jangan menyimpan credential payment gateway.
- Validasi input.
- Jangan mempercayai role dari localStorage tanpa verifikasi backend.
- Gunakan HTTPS.
- Jangan menganggap status pembayaran dari client sebagai sumber kebenaran.

Backend:
- Authentication.
- Authorization.
- Input validation.
- Rate limiting.
- Webhook verification.
- Database transaction.
- Audit log untuk aktivitas sensitif.

---

## 21. Environment Variables

Gunakan `.env` untuk konfigurasi.

Contoh:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=FoodRescue
```

Secret backend/payment gateway tidak boleh menggunakan prefix `VITE_` karena variabel tersebut dapat terekspos ke browser.

---

## 22. Development Workflow

```text
Feature Request
      ↓
Define Type / API Contract
      ↓
Create Service
      ↓
Create Hook
      ↓
Create Feature Components
      ↓
Compose Page
      ↓
Add Validation
      ↓
Add Loading/Error State
      ↓
Add AOS where appropriate
      ↓
Add SweetAlert feedback
      ↓
Test Responsive
      ↓
Review UI Consistency
```

---

## 23. Component Rules

Setiap component harus:
- Memiliki satu tanggung jawab utama.
- Reusable jika digunakan lebih dari satu tempat.
- Tidak memiliki business logic yang terlalu kompleks.
- Tidak melakukan API call langsung.
- Menggunakan komponen shadcn/ui jika komponen tersebut tersedia.
- Memiliki state yang jelas.
- Memiliki loading/empty/error state jika membutuhkan data asynchronous.

Hindari membuat satu file component berisi ratusan baris yang menangani seluruh halaman.

---

## 24. Naming Convention

### Components

PascalCase:

```text
ProductCard.tsx
UMKMCard.tsx
FlashDealCard.tsx
OrderSummary.tsx
```

### Hooks

camelCase dengan prefix `use`:

```text
useAuth.ts
useProducts.ts
useOrders.ts
```

### Services

camelCase:

```text
product.service.ts
order.service.ts
payment.service.ts
```

### Types

camelCase atau domain-based:

```text
product.ts
order.ts
payment.ts
```

---

## 25. UI State Standard

Setiap asynchronous feature minimal memiliki:

```text
Loading
Success
Empty
Error
```

Contoh katalog:

```text
Loading → Skeleton
Success → Product Grid
Empty → EmptyState
Error → ErrorState + Retry
```

Jangan menampilkan halaman putih kosong ketika request gagal.

---

## 26. Dashboard Architecture

Dashboard menggunakan layout yang sama tetapi data berbeda berdasarkan role.

```text
DashboardLayout
├── Sidebar
├── Header
└── Main Content
    ├── Stats
    ├── Charts
    ├── Tables
    └── Feature Components
```

### Buyer Dashboard
Fokus:
- Pesanan.
- Pickup.
- Flash Deal.
- Favorit.
- Saving.

### Seller Dashboard
Fokus:
- Penjualan.
- Produk.
- Surplus.
- Pickup.
- Settlement.
- Analytics.

### Admin Dashboard
Fokus:
- User.
- UMKM.
- Produk.
- Order.
- Payment.
- Settlement.
- Monitoring.

---

## 27. Architecture Goal

Arsitektur ini dibuat agar platform dapat berkembang dari MVP menjadi marketplace UMKM yang lebih besar tanpa harus melakukan rewrite frontend secara keseluruhan.

Urutan pengembangan:

```text
MVP Marketplace
      ↓
Closed-loop Payment
      ↓
QR Pickup
      ↓
Flash Deal / Surplus
      ↓
Premium
      ↓
Analytics
      ↓
Smart Surplus Predictor
      ↓
Data-driven Marketplace
```

Frontend tetap menggunakan **Vite + React**, dengan **shadcn/ui** sebagai UI component system, **Tailwind CSS** untuk styling, **AOS.js** untuk animasi yang terkontrol, dan **SweetAlert2** untuk feedback interaksi.
