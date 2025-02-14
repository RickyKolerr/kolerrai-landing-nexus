
import { EnhancedNav } from "@/components/enhanced-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { CeoSection } from "@/components/sections/ceo-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate('/services');
  };

  return (
    <div className="relative min-h-screen">
      <EnhancedNav />

      <div className="pt-16">
        <HeroSection />
        <CeoSection />
        <ServicesSection />
        <TechStackSection />

        <footer className="bg-background py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">About Us</h3>
                <p className="text-muted-foreground">
                  KolerrAI specializes in AI-powered PaaS and SaaS solutions for businesses of all sizes.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:info@kolerr.ai" className="text-muted-foreground hover:text-primary">
                      info@kolerr.ai
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-muted-foreground">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-muted-foreground hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <button 
                      onClick={handleServicesClick}
                      className="text-muted-foreground hover:text-primary"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <Link to="/contact" className="text-muted-foreground hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
              <p>&copy; 2024 KolerrAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
