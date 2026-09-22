import { Product, UMKM, Category, Banner, Review, Order } from "@/types";

// ===== Categories =====
export const categories: Category[] = [
  { id: "1", name: "Nasi & Lauk", icon: "🍚", slug: "nasi-lauk" },
  { id: "2", name: "Mie & Bakso", icon: "🍜", slug: "mie-bakso" },
  { id: "3", name: "Ayam & Bebek", icon: "🍗", slug: "ayam-bebek" },
  { id: "4", name: "Jajanan", icon: "🧁", slug: "jajanan" },
  { id: "5", name: "Minuman", icon: "🥤", slug: "minuman" },
  { id: "6", name: "Roti & Kue", icon: "🍞", slug: "roti-kue" },
  { id: "7", name: "Seafood", icon: "🦐", slug: "seafood" },
  { id: "8", name: "Sate & Bakar", icon: "🍢", slug: "sate-bakar" },
  { id: "9", name: "Dessert", icon: "🍰", slug: "dessert" },
  { id: "10", name: "Tradisional", icon: "🥘", slug: "tradisional" },
];

// ===== UMKM =====
export const umkmList: UMKM[] = [
  {
    id: "u1",
    name: "Warung Bu Siti",
    slug: "warung-bu-siti",
    description: "Warung nasi legendaris di Ketintang yang sudah berdiri sejak 2005. Terkenal dengan nasi pecel dan rawon autentik Surabaya.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop",
    category: "Nasi & Lauk",
    rating: 4.8,
    ratingCount: 324,
    address: "Jl. Ketintang No. 45, Surabaya",
    distance: "0.3 km",
    operatingHours: "06:00 - 21:00",
    isOpen: true,
    isMVP: true,
    isHiddenGem: true,
    totalProducts: 15,
    totalSold: 2840,
  },
  {
    id: "u2",
    name: "Bakso Pak Darmo",
    slug: "bakso-pak-darmo",
    description: "Bakso urat jumbo dengan kuah kaldu sapi yang gurih. Favorit mahasiswa UNESA sejak 2010.",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&h=300&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=400&fit=crop",
    category: "Mie & Bakso",
    rating: 4.6,
    ratingCount: 256,
    address: "Jl. Ketintang Baru III/5, Surabaya",
    distance: "0.5 km",
    operatingHours: "10:00 - 22:00",
    isOpen: true,
    isMVP: false,
    isHiddenGem: true,
    totalProducts: 8,
    totalSold: 1920,
  },
  {
    id: "u3",
    name: "Ayam Geprek Mas Eko",
    slug: "ayam-geprek-mas-eko",
    description: "Ayam geprek dengan sambal bawang level 1-10. Dijamin nendang!",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop",
    category: "Ayam & Bebek",
    rating: 4.5,
    ratingCount: 189,
    address: "Jl. Ketintang Madya No. 12, Surabaya",
    distance: "0.8 km",
    operatingHours: "10:00 - 21:00",
    isOpen: true,
    isMVP: true,
    isHiddenGem: false,
    totalProducts: 12,
    totalSold: 3120,
  },
  {
    id: "u4",
    name: "Es Teh Solo Mbak Ani",
    slug: "es-teh-solo-mbak-ani",
    description: "Es teh manis khas Solo dengan rempah spesial. Segar di cuaca panas Surabaya!",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop",
    category: "Minuman",
    rating: 4.7,
    ratingCount: 412,
    address: "Jl. Ketintang Permai No. 8, Surabaya",
    distance: "0.2 km",
    operatingHours: "08:00 - 22:00",
    isOpen: true,
    isMVP: false,
    isHiddenGem: true,
    totalProducts: 10,
    totalSold: 5200,
  },
  {
    id: "u5",
    name: "Jajanan Ibu Lestari",
    slug: "jajanan-ibu-lestari",
    description: "Aneka jajanan pasar tradisional — klepon, onde-onde, lemper, dan kue lapis. Dibuat fresh setiap pagi!",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
    category: "Jajanan",
    rating: 4.9,
    ratingCount: 567,
    address: "Jl. Ketintang Barat No. 20, Surabaya",
    distance: "0.6 km",
    operatingHours: "05:00 - 14:00",
    isOpen: true,
    isMVP: true,
    isHiddenGem: true,
    totalProducts: 20,
    totalSold: 8450,
  },
  {
    id: "u6",
    name: "Sate Madura Haji Ridwan",
    slug: "sate-madura-haji-ridwan",
    description: "Sate ayam dan kambing khas Madura dengan bumbu kacang rahasia turun-temurun.",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&h=300&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=800&h=400&fit=crop",
    category: "Sate & Bakar",
    rating: 4.7,
    ratingCount: 298,
    address: "Jl. Ketintang Timur No. 33, Surabaya",
    distance: "1.0 km",
    operatingHours: "15:00 - 23:00",
    isOpen: false,
    isMVP: false,
    isHiddenGem: true,
    totalProducts: 6,
    totalSold: 4200,
  },
];

// ===== Products =====
export const products: Product[] = [
  // Normal products
  {
    id: "p1", name: "Nasi Pecel Komplit", slug: "nasi-pecel-komplit",
    description: "Nasi pecel dengan sayur, tempe, tahu, dan rempeyek. Sambal pecel khas Madiun.",
    price: 15000, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop",
    category: "Nasi & Lauk", rating: 4.8, ratingCount: 152, soldCount: 890,
    umkmId: "u1", umkmName: "Warung Bu Siti", type: "normal", isBestSeller: true,
    stock: 50, productionTime: "06:00", shelfLife: "6 jam",
  },
  {
    id: "p2", name: "Rawon Surabaya", slug: "rawon-surabaya",
    description: "Rawon daging sapi asli Surabaya dengan kuah hitam kluwek. Disajikan dengan nasi, tauge, dan telur asin.",
    price: 25000, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=400&fit=crop",
    category: "Nasi & Lauk", rating: 4.9, ratingCount: 210, soldCount: 1200,
    umkmId: "u1", umkmName: "Warung Bu Siti", type: "normal", isBestSeller: true,
    stock: 30, productionTime: "05:00", shelfLife: "8 jam",
  },
  {
    id: "p3", name: "Bakso Urat Jumbo", slug: "bakso-urat-jumbo",
    description: "Bakso urat jumbo berisi daging sapi pilihan. Kuah kaldu sapi gurih.",
    price: 20000, image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=400&h=400&fit=crop",
    category: "Mie & Bakso", rating: 4.6, ratingCount: 180, soldCount: 760,
    umkmId: "u2", umkmName: "Bakso Pak Darmo", type: "normal", isBestSeller: true,
    stock: 40, productionTime: "09:00", shelfLife: "6 jam",
  },
  {
    id: "p4", name: "Ayam Geprek Level 5", slug: "ayam-geprek-level-5",
    description: "Ayam geprek crispy dengan sambal bawang level 5. Pedas mantap!",
    price: 18000, image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=400&fit=crop",
    category: "Ayam & Bebek", rating: 4.5, ratingCount: 142, soldCount: 920,
    umkmId: "u3", umkmName: "Ayam Geprek Mas Eko", type: "normal", isBestSeller: false,
    stock: 60, productionTime: "10:00", shelfLife: "4 jam",
  },
  {
    id: "p5", name: "Es Teh Solo Spesial", slug: "es-teh-solo-spesial",
    description: "Es teh manis khas Solo dengan rempah jahe, sereh, dan kayu manis.",
    price: 8000, image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&h=400&fit=crop",
    category: "Minuman", rating: 4.7, ratingCount: 320, soldCount: 4500,
    umkmId: "u4", umkmName: "Es Teh Solo Mbak Ani", type: "normal", isBestSeller: true,
    stock: 100, productionTime: "07:00", shelfLife: "12 jam",
  },
  // Flash Deal products
  {
    id: "p6", name: "Nasi Ayam Penyet", slug: "nasi-ayam-penyet",
    description: "Nasi ayam penyet dengan sambal terasi dan lalapan segar.",
    price: 12000, originalPrice: 18000, image: "https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?w=400&h=400&fit=crop",
    category: "Ayam & Bebek", rating: 4.4, ratingCount: 98, soldCount: 340,
    umkmId: "u3", umkmName: "Ayam Geprek Mas Eko", type: "flash-deal",
    stock: 15, flashDealEndsAt: new Date(Date.now() + 3 * 3600000).toISOString(),
    pickupTime: "Pickup sebelum 14:00",
  },
  {
    id: "p7", name: "Paket Bakso + Es Teh", slug: "paket-bakso-es-teh",
    description: "1 porsi bakso urat + 1 es teh manis. Combo hemat!",
    price: 18000, originalPrice: 28000, image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=400&h=400&fit=crop",
    category: "Mie & Bakso", rating: 4.5, ratingCount: 67, soldCount: 180,
    umkmId: "u2", umkmName: "Bakso Pak Darmo", type: "flash-deal",
    stock: 10, flashDealEndsAt: new Date(Date.now() + 5 * 3600000).toISOString(),
    pickupTime: "Pickup sebelum 15:00",
  },
  {
    id: "p8", name: "Sate Ayam 10 Tusuk", slug: "sate-ayam-10-tusuk",
    description: "Sate ayam Madura 10 tusuk dengan bumbu kacang dan lontong.",
    price: 15000, originalPrice: 22000, image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&h=400&fit=crop",
    category: "Sate & Bakar", rating: 4.8, ratingCount: 145, soldCount: 520,
    umkmId: "u6", umkmName: "Sate Madura Haji Ridwan", type: "flash-deal",
    stock: 8, flashDealEndsAt: new Date(Date.now() + 2 * 3600000).toISOString(),
    pickupTime: "Pickup sebelum 20:00",
  },
  {
    id: "p9", name: "Es Jeruk Segar", slug: "es-jeruk-segar",
    description: "Es jeruk peras segar tanpa pengawet. Vitamin C tinggi!",
    price: 5000, originalPrice: 10000, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=400&fit=crop",
    category: "Minuman", rating: 4.3, ratingCount: 89, soldCount: 290,
    umkmId: "u4", umkmName: "Es Teh Solo Mbak Ani", type: "flash-deal",
    stock: 20, flashDealEndsAt: new Date(Date.now() + 4 * 3600000).toISOString(),
    pickupTime: "Pickup sebelum 16:00",
  },
  // Surplus products
  {
    id: "p10", name: "Klepon & Onde-Onde (5pcs)", slug: "klepon-onde-onde-5pcs",
    description: "Paket klepon 3 + onde-onde 2. Masih fresh, dibuat pagi ini!",
    price: 5000, originalPrice: 12000, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    category: "Jajanan", rating: 4.9, ratingCount: 210, soldCount: 1500,
    umkmId: "u5", umkmName: "Jajanan Ibu Lestari", type: "surplus",
    stock: 6, pickupTime: "Pickup sebelum 12:00", productionTime: "05:00", shelfLife: "8 jam",
  },
  {
    id: "p11", name: "Nasi Campur Bali", slug: "nasi-campur-bali",
    description: "Nasi campur khas Bali dengan ayam suwir, sate lilit, dan lawar.",
    price: 12000, originalPrice: 22000, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop",
    category: "Nasi & Lauk", rating: 4.6, ratingCount: 78, soldCount: 340,
    umkmId: "u1", umkmName: "Warung Bu Siti", type: "surplus",
    stock: 4, pickupTime: "Pickup sebelum 13:00", productionTime: "06:00", shelfLife: "6 jam",
  },
  {
    id: "p12", name: "Lemper Ayam (4pcs)", slug: "lemper-ayam-4pcs",
    description: "Lemper isi ayam suwir dibungkus daun pisang. Gurih dan kenyal!",
    price: 6000, originalPrice: 14000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop",
    category: "Jajanan", rating: 4.8, ratingCount: 156, soldCount: 980,
    umkmId: "u5", umkmName: "Jajanan Ibu Lestari", type: "surplus",
    stock: 3, pickupTime: "Pickup sebelum 11:00", productionTime: "05:00", shelfLife: "6 jam",
  },
];

// ===== Banners =====
export const banners: Banner[] = [
  {
    id: "b1",
    title: "Flash Deal Setiap Hari!",
    subtitle: "Diskon hingga 50% untuk makanan UMKM favoritmu",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop",
    link: "/flash-deals",
    bgColor: "linear-gradient(135deg, #EE4D2D 0%, #FF6633 100%)",
  },
  {
    id: "b2",
    title: "Surplus Rescue 🌿",
    subtitle: "Selamatkan makanan, hemat kantong! Mulai dari Rp5.000",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop",
    link: "/explore?type=surplus",
    bgColor: "linear-gradient(135deg, #26AA6C 0%, #2ECC71 100%)",
  },
  {
    id: "b3",
    title: "Hidden Gem Ketintang",
    subtitle: "Temukan UMKM tersembunyi di sekitar kampus UNESA",
    image: "https://images.unsplash.com/photo-1517248135467-4c7306c1976bc?w=800&h=400&fit=crop",
    link: "/hidden-gem",
    bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
];

// ===== Reviews =====
export const reviews: Review[] = [
  {
    id: "r1", userId: "buyer1", userName: "Ahmad F.", rating: 5,
    comment: "Rawon-nya enak banget! Kuahnya gurih, dagingnya empuk. Pasti beli lagi.",
    createdAt: "2026-09-20T10:00:00Z", productId: "p2", umkmId: "u1",
  },
  {
    id: "r2", userId: "buyer2", userName: "Dina S.", rating: 4,
    comment: "Bakso uratnya besar banget, kuahnya kaldu banget. Recommended!",
    createdAt: "2026-09-19T14:30:00Z", productId: "p3", umkmId: "u2",
  },
  {
    id: "r3", userId: "buyer3", userName: "Rizki A.", rating: 5,
    comment: "Es tehnya segar, rempahnya berasa. Harga mahasiswa banget.",
    createdAt: "2026-09-18T09:15:00Z", productId: "p5", umkmId: "u4",
  },
  {
    id: "r4", userId: "buyer4", userName: "Putri N.", rating: 5,
    comment: "Klepon dan onde-ondenya fresh banget, beli surplus tapi rasanya tetap juara!",
    createdAt: "2026-09-21T07:45:00Z", productId: "p10", umkmId: "u5",
  },
];

// ===== Orders =====
export const orders: Order[] = [
  {
    id: "o1", orderNumber: "SB-20260922-001",
    products: [
      { productId: "p1", productName: "Nasi Pecel Komplit", quantity: 2, price: 15000, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=100&h=100&fit=crop" },
    ],
    totalPrice: 30000, status: "ready_for_pickup", paymentMethod: "QRIS",
    pickupTime: "12:00 - 13:00", createdAt: "2026-09-22T08:00:00Z", umkmName: "Warung Bu Siti",
  },
  {
    id: "o2", orderNumber: "SB-20260921-042",
    products: [
      { productId: "p3", productName: "Bakso Urat Jumbo", quantity: 1, price: 20000, image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=100&h=100&fit=crop" },
      { productId: "p5", productName: "Es Teh Solo Spesial", quantity: 1, price: 8000, image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=100&h=100&fit=crop" },
    ],
    totalPrice: 28000, status: "completed", paymentMethod: "QRIS",
    pickupTime: "Selesai", createdAt: "2026-09-21T12:00:00Z", umkmName: "Bakso Pak Darmo",
  },
];

// ===== Helper Functions =====
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getDiscountPercent(original: number, current: number): number {
  return Math.round(((original - current) / original) * 100);
}

export function getFlashDealProducts(): Product[] {
  return products.filter((p) => p.type === "flash-deal");
}

export function getSurplusProducts(): Product[] {
  return products.filter((p) => p.type === "surplus");
}

export function getBestSellerProducts(): Product[] {
  return products.filter((p) => p.isBestSeller);
}

export function getHiddenGemUMKM(): UMKM[] {
  return umkmList.filter((u) => u.isHiddenGem);
}

export function getProductsByUMKM(umkmId: string): Product[] {
  return products.filter((p) => p.umkmId === umkmId);
}

export function getUMKMById(id: string): UMKM | undefined {
  return umkmList.find((u) => u.id === id);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getUMKMBySlug(slug: string): UMKM | undefined {
  return umkmList.find((u) => u.slug === slug);
}
