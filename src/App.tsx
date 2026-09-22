import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";

// Pages
import Home from "@/pages/Home";
import Explore from "@/pages/Explore";
import FlashDeals from "@/pages/FlashDeals";
import HiddenGem from "@/pages/HiddenGem";
import ProductDetail from "@/pages/ProductDetail";
import UMKMDetail from "@/pages/UMKMDetail";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import BuyerDashboard from "@/pages/buyer/Dashboard";
import SellerDashboard from "@/pages/seller/Dashboard";
import AdminDashboard from "@/pages/admin/Dashboard";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              {/* Public */}
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/flash-deals" element={<FlashDeals />} />
              <Route path="/hidden-gem" element={<HiddenGem />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/umkm/:slug" element={<UMKMDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Buyer */}
              <Route path="/buyer" element={<BuyerDashboard />} />
              <Route path="/buyer/dashboard" element={<BuyerDashboard />} />

              {/* Seller */}
              <Route path="/seller" element={<SellerDashboard />} />
              <Route path="/seller/dashboard" element={<SellerDashboard />} />

              {/* Admin */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </div>
          <Footer />
          <BottomNav />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
