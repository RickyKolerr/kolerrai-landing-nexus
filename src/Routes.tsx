
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import Platform from "@/pages/Platform";
import Products from "@/pages/Products";
import Solutions from "@/pages/Solutions";
import Features from "@/pages/Features";
import Blog from "@/pages/Blog";
import Careers from "@/pages/Careers";
import Pricing from "@/pages/Pricing";
import Compliance from "@/pages/Compliance";
import NotFound from "@/pages/NotFound";
import KolerrPlatform from "@/pages/products/KolerrPlatform";
import Audiovable from "@/pages/products/Audiovable";
import KiddOAi from "@/pages/products/KiddOAi";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Security from "@/pages/Security";
import Success from "@/pages/Success";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/products" element={<Products />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/features" element={<Features />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/compliance" element={<Compliance />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/security" element={<Security />} />
      <Route path="/success" element={<Success />} />
      
      {/* Product specific routes */}
      <Route path="/products/kolerr-platform" element={<KolerrPlatform />} />
      <Route path="/products/audiovable" element={<Audiovable />} />
      <Route path="/products/kiddoai" element={<KiddOAi />} />
      
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};

export default Routes;
