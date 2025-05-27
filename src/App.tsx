
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ProductIndex from "./pages/ProductIndex";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Category Pages
import CorporateWorkwear from "./pages/categories/CorporateWorkwear";
import BusinessAccessories from "./pages/categories/BusinessAccessories";
import CommercialLighting from "./pages/categories/CommercialLighting";
import BusinessSignage from "./pages/categories/BusinessSignage";
import BeautySalon from "./pages/categories/BeautySalon";
import OfficeSupplies from "./pages/categories/OfficeSupplies";

// Sub-category Pages
import TShirts from "./pages/subcategories/TShirts";
import Trousers from "./pages/subcategories/Trousers";
import Blazers from "./pages/subcategories/Blazers";
import Bags from "./pages/subcategories/Bags";
import Headwear from "./pages/subcategories/Headwear";
import IndoorLighting from "./pages/subcategories/IndoorLighting";
import OutdoorLighting from "./pages/subcategories/OutdoorLighting";
import InteriorSigns from "./pages/subcategories/InteriorSigns";
import ExteriorSigns from "./pages/subcategories/ExteriorSigns";
import SalonApparel from "./pages/subcategories/SalonApparel";
import SalonEssentials from "./pages/subcategories/SalonEssentials";
import OfficeFurniture from "./pages/subcategories/OfficeFurniture";
import Breakroom from "./pages/subcategories/Breakroom";

// Product Pages
import PoloTShirts from "./pages/products/PoloTShirts";
import VNeckTShirts from "./pages/products/VNeckTShirts";
import HenleyTShirts from "./pages/products/HenleyTShirts";
import FormalTrousers from "./pages/products/FormalTrousers";
import Chinos from "./pages/products/Chinos";
import LaptopBags from "./pages/products/LaptopBags";
import BaseballCaps from "./pages/products/BaseballCaps";
import LEDPanels from "./pages/products/LEDPanels";
import Floodlights from "./pages/products/Floodlights";
import AcrylicSigns from "./pages/products/AcrylicSigns";
import BuildingSigns from "./pages/products/BuildingSigns";
import SalonTunics from "./pages/products/SalonTunics";
import OfficeChairs from "./pages/products/OfficeChairs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductIndex />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Category Routes */}
          <Route path="/categories/corporate-workwear" element={<CorporateWorkwear />} />
          <Route path="/categories/business-accessories" element={<BusinessAccessories />} />
          <Route path="/categories/commercial-lighting" element={<CommercialLighting />} />
          <Route path="/categories/business-signage" element={<BusinessSignage />} />
          <Route path="/categories/beauty-salon" element={<BeautySalon />} />
          <Route path="/categories/office-supplies" element={<OfficeSupplies />} />
          
          {/* Sub-category Routes */}
          <Route path="/subcategories/t-shirts" element={<TShirts />} />
          <Route path="/subcategories/trousers" element={<Trousers />} />
          <Route path="/subcategories/blazers" element={<Blazers />} />
          <Route path="/subcategories/bags" element={<Bags />} />
          <Route path="/subcategories/headwear" element={<Headwear />} />
          <Route path="/subcategories/indoor-lighting" element={<IndoorLighting />} />
          <Route path="/subcategories/outdoor-lighting" element={<OutdoorLighting />} />
          <Route path="/subcategories/interior-signs" element={<InteriorSigns />} />
          <Route path="/subcategories/exterior-signs" element={<ExteriorSigns />} />
          <Route path="/subcategories/salon-apparel" element={<SalonApparel />} />
          <Route path="/subcategories/salon-essentials" element={<SalonEssentials />} />
          <Route path="/subcategories/office-furniture" element={<OfficeFurniture />} />
          <Route path="/subcategories/breakroom" element={<Breakroom />} />
          
          {/* Product Routes */}
          <Route path="/products/polo-t-shirts" element={<PoloTShirts />} />
          <Route path="/products/v-neck-t-shirts" element={<VNeckTShirts />} />
          <Route path="/products/henley-t-shirts" element={<HenleyTShirts />} />
          <Route path="/products/formal-trousers" element={<FormalTrousers />} />
          <Route path="/products/chinos" element={<Chinos />} />
          <Route path="/products/laptop-bags" element={<LaptopBags />} />
          <Route path="/products/baseball-caps" element={<BaseballCaps />} />
          <Route path="/products/led-panels" element={<LEDPanels />} />
          <Route path="/products/floodlights" element={<Floodlights />} />
          <Route path="/products/acrylic-signs" element={<AcrylicSigns />} />
          <Route path="/products/building-signs" element={<BuildingSigns />} />
          <Route path="/products/salon-tunics" element={<SalonTunics />} />
          <Route path="/products/office-chairs" element={<OfficeChairs />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
