import { BrainCircuit, Rocket, Shield, Laptop, Cpu, Database, Code, LineChart, Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { FeatureCard } from "@/components/feature-card";
import { EnhancedNav } from "@/components/enhanced-nav";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative min-h-screen">
      <EnhancedNav />

      <div className="pt-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <img 
                src="/lovable-uploads/266e6917-4145-4dfa-bd1a-f13d2e358723.png" 
                alt="Kolerr" 
                className="h-20 mx-auto mb-8 hover-scale"
              />
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                Powering the Future of PaaS & SaaS with AI-driven Innovation!
              </h1>
              <p className="mb-10 text-lg text-muted-foreground sm:text-xl slide-up" style={{ animationDelay: "0.2s" }}>
                Unlock the next level of cloud solutions with AI automation, scalability, and efficiency
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 slide-up" style={{ animationDelay: "0.4s" }}>
                <ButtonGradient 
                  size="lg" 
                  className="hover-lift glow"
                  onClick={() => handleNavigation('/pricing')}
                >
                  Start Free Trial
                </ButtonGradient>
                <ButtonGradient 
                  size="lg" 
                  variant="outline" 
                  className="hover-lift"
                  onClick={() => handleNavigation('/features')}
                >
                  Explore Features
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-secondary/30 py-24">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="text-gradient mb-4 text-3xl font-bold sm:text-4xl fade-in">
                Why KolerrAI?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground slide-up">
                Next-generation AI solutions for modern enterprises
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={BrainCircuit}
                title="AI-Driven Cloud Solutions"
                description="Automate & optimize business processes with intelligent workflows"
                className="fade-in"
                style={{ animationDelay: "0.1s" }}
              />
              <FeatureCard
                icon={Rocket}
                title="Scalable Infrastructure"
                description="Flexible deployment solutions for businesses of all sizes"
                className="fade-in"
                style={{ animationDelay: "0.2s" }}
              />
              <FeatureCard
                icon={Shield}
                title="Enterprise Security"
                description="Advanced protection & seamless operation guaranteed"
                className="fade-in"
                style={{ animationDelay: "0.3s" }}
              />
              <FeatureCard
                icon={Laptop}
                title="PWA Experience"
                description="Access anywhere, anytime, on any device"
                className="fade-in"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="text-gradient mb-4 text-3xl font-bold sm:text-4xl fade-in">
                Core Features
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground slide-up">
                Powerful tools for modern businesses
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={Cpu}
                title="Smart AI Automation"
                description="Reduce manual work with intelligent AI workflows"
                className="fade-in"
                style={{ animationDelay: "0.1s" }}
              />
              <FeatureCard
                icon={Database}
                title="Real-time Processing"
                description="Make faster decisions with instant insights"
                className="fade-in"
                style={{ animationDelay: "0.2s" }}
              />
              <FeatureCard
                icon={Code}
                title="API Integration"
                description="Easily connect with existing platforms"
                className="fade-in"
                style={{ animationDelay: "0.3s" }}
              />
              <FeatureCard
                icon={LineChart}
                title="Predictive Analytics"
                description="AI-driven recommendations for growth"
                className="fade-in"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-gradient mb-4 text-3xl font-bold sm:text-4xl fade-in">
                Experience AI-Powered PaaS & SaaS
              </h2>
              <p className="mb-8 text-lg text-muted-foreground slide-up" style={{ animationDelay: "0.2s" }}>
                Start your 14-day free trial today. No credit card required.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonGradient 
                  size="lg" 
                  className="hover-lift glow slide-up" 
                  style={{ animationDelay: "0.4s" }}
                  onClick={() => handleNavigation('/pricing')}
                >
                  Try for Free - 14 Days
                </ButtonGradient>
                <ButtonGradient 
                  size="lg" 
                  variant="outline" 
                  className="hover-lift slide-up" 
                  style={{ animationDelay: "0.4s" }}
                  onClick={() => handleNavigation('/contact')}
                >
                  Contact Sales
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-secondary/30 py-24">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">1M+</div>
                <p className="text-muted-foreground">API Calls Daily</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <p className="text-muted-foreground">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime SLA</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-gradient mb-4 text-3xl font-bold sm:text-4xl fade-in">
                Stay Updated with KolerrAI
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Subscribe to our newsletter for the latest updates on AI innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-white/5 border border-accent/20 focus:border-accent focus:outline-none"
                />
                <ButtonGradient className="hover-lift">
                  Subscribe
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/lovable-uploads/266e6917-4145-4dfa-bd1a-f13d2e358723.png" 
                    alt="Kolerr" 
                    className="h-8 w-auto hover-scale"
                  />
                </Link>
                <p className="text-sm text-muted-foreground">
                  Pioneering AI solutions for modern enterprises, transforming businesses through innovation.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/products" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/platform" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Platform
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/security" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link to="/compliance" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      Compliance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-accent/10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@kolerrai.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 AI Valley, Silicon Valley, CA 94025</span>
              </div>
            </div>

            <div className="pt-8 border-t border-accent/10 text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} KolerrAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
