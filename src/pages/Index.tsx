
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
    <div className="relative min-h-screen">
      <EnhancedNav />

      {/* Hero Section - Full width */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative">
          <HeroSection />
        </div>
      </div>

      {/* CEO Section - Alternate background */}
      <div className="relative w-full bg-secondary/5">
        <CeoSection />
      </div>

      {/* Services Section - Full width with container */}
      <div className="relative w-full bg-background">
        <ServicesSection />
      </div>

      {/* Tech Stack Section - Alternate background */}
      <div className="relative w-full bg-secondary/5">
        <TechStackSection />
      </div>

      {/* Team Section - Full width */}
      <div className="relative w-full bg-background">
        <TeamSection />
      </div>

      {/* Footer */}
      <footer className="relative w-full bg-secondary/10 border-t border-accent/10">
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
  );
};

export default Index;
