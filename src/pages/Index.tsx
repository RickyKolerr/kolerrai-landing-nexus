
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

        {/* Main content sections */}
        <div className="relative bg-background">
          <div className="space-y-24 pb-24">
            <CeoSection />
            <ServicesSection />
            <TechStackSection />
            <TeamSection />
          </div>

          {/* Redesigned Footer */}
          <footer className="relative bg-gradient-to-b from-background/95 to-background backdrop-blur-xl border-t border-accent/10">
            <div className="mx-auto max-w-7xl px-6 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                {/* About Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    About Us
                  </h3>
                  <p className="text-muted-foreground/90 leading-relaxed">
                    KolerrAI specializes in AI-powered PaaS and SaaS solutions for businesses of all sizes.
                  </p>
                </div>

                {/* Contact Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Contact
                  </h3>
                  <div className="space-y-4">
                    <a 
                      href="mailto:info@kolerr.ai" 
                      className="flex items-center space-x-3 text-muted-foreground/90 hover:text-primary transition-colors group"
                    >
                      <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                      <span>info@kolerr.ai</span>
                    </a>
                    <div className="flex items-center space-x-3 text-muted-foreground/90">
                      <MapPin className="w-5 h-5" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground/90">
                      <Phone className="w-5 h-5" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Quick Links
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link 
                        to="/about" 
                        className="text-muted-foreground/90 hover:text-primary transition-colors inline-flex items-center"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <button 
                        onClick={handleServicesClick}
                        className="text-muted-foreground/90 hover:text-primary transition-colors inline-flex items-center"
                      >
                        Services
                      </button>
                    </li>
                    <li>
                      <Link 
                        to="/contact" 
                        className="text-muted-foreground/90 hover:text-primary transition-colors inline-flex items-center"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social Links Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/5 hover:bg-accent/10 text-muted-foreground/90 hover:text-primary transition-all duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/5 hover:bg-accent/10 text-muted-foreground/90 hover:text-primary transition-all duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/5 hover:bg-accent/10 text-muted-foreground/90 hover:text-primary transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/5 hover:bg-accent/10 text-muted-foreground/90 hover:text-primary transition-all duration-200"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Copyright Section */}
              <div className="mt-16 pt-8 border-t border-accent/10">
                <p className="text-center text-muted-foreground/70">
                  &copy; {new Date().getFullYear()} KolerrAI. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
