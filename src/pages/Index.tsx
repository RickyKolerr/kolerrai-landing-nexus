
import { EnhancedNav } from "@/components/enhanced-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { CeoSection } from "@/components/sections/ceo-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TeamSection } from "@/components/sections/team-section";
import { Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate('/services');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <EnhancedNav />

      <div className="relative">
        {/* Hero Section with enhanced styling */}
        <div className="relative z-10">
          <HeroSection />
        </div>

        {/* Curved separator */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
          <svg className="relative w-full h-24 text-background" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" />
          </svg>
        </div>

        {/* Main content sections with enhanced spacing and animations */}
        <div className="relative bg-background">
          <div className="space-y-24 pb-24">
            <CeoSection />
            <ServicesSection />
            <TechStackSection />
            <TeamSection />
          </div>

          {/* Enhanced Footer */}
          <footer className="relative bg-background/95 backdrop-blur-lg py-16 border-t border-accent/10">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                  <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Us</h3>
                  <p className="text-muted-foreground">
                    KolerrAI specializes in AI-powered PaaS and SaaS solutions for businesses of all sizes.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contact</h3>
                  <div className="space-y-3">
                    <a href="mailto:info@kolerr.ai" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                      info@kolerr.ai
                    </a>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      +1 (555) 123-4567
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <button 
                        onClick={handleServicesClick}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Services
                      </button>
                    </li>
                    <li>
                      <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent/10 rounded-full">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent/10 rounded-full">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent/10 rounded-full">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent/10 rounded-full">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-accent/10 mt-12 pt-8 text-center text-muted-foreground">
                <p>&copy; 2024 KolerrAI. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
