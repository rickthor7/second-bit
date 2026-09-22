// Product Types
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  ratingCount: number;
  soldCount: number;
  umkmId: string;
  umkmName: string;
  type: "normal" | "flash-deal" | "surplus";
  isBestSeller?: boolean;
  pickupTime?: string;
  productionTime?: string;
  shelfLife?: string;
  stock: number;
  flashDealEndsAt?: string;
}

export interface UMKM {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  coverImage: string;
  category: string;
  rating: number;
  ratingCount: number;
  address: string;
  distance?: string;
  operatingHours: string;
  isOpen: boolean;
  isMVP?: boolean;
  isHiddenGem?: boolean;
  totalProducts: number;
  totalSold: number;
  products?: Product[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  products: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
  paymentMethod: string;
  pickupTime: string;
  createdAt: string;
  umkmName: string;
  qrCode?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  image: string;
}

export type OrderStatus =
  | "pending_payment"
  | "paid"
  | "ready_for_pickup"
  | "picked_up"
  | "completed"
  | "cancelled"
  | "expired"
  | "refund_requested"
  | "refunded";

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
  productId?: string;
  umkmId?: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  bgColor: string;
}

export type UserRole = "buyer" | "seller" | "admin";
