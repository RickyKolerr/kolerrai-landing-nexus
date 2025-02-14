
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
                Custom Platform Development & AI Integration Experts
              </h1>
              <p className="text-xl text-accent font-semibold mb-6 slide-up" style={{ animationDelay: "0.1s" }}>
                Building modern SaaS & PaaS solutions that transform businesses through AI-powered automation
              </p>
              <p className="mb-10 text-lg text-muted-foreground sm:text-xl slide-up" style={{ animationDelay: "0.2s" }}>
                We help businesses modernize by creating tailored platforms from scratch, integrating advanced AI capabilities and automation to drive efficiency, reduce costs, and enable scalable growth
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 slide-up" style={{ animationDelay: "0.4s" }}>
                <ButtonGradient 
                  size="lg" 
                  className="hover-lift glow"
                  onClick={() => handleNavigation('/contact')}
                >
                  Schedule Consultation
                </ButtonGradient>
                <ButtonGradient 
                  size="lg" 
                  variant="outline" 
                  className="hover-lift"
                  onClick={() => handleNavigation('/pricing')}
                >
                  View Services
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 bg-secondary/30">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="/lovable-uploads/99c4eb06-a618-421b-a272-81e310d4431d.png"
                  alt="Ricky Anh Nguyen"
                  className="w-40 h-40 rounded-full object-cover border-4 border-accent/20 hover-scale"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ricky Anh Nguyen</h3>
              <p className="text-accent mb-6">CEO & Founder</p>
              <p className="text-xl text-muted-foreground italic">
                "Our mission is to empower businesses by designing and building custom platforms that integrate cutting-edge AI capabilities. We don't just develop software; we create scalable, future-proof digital solutions that drive seamless digital transformation, optimize business operations, and deliver measurable value through automation and intelligent workflows."
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-secondary/30 py-24">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="text-gradient mb-4 text-3xl font-bold sm:text-4xl fade-in">
                Comprehensive Platform Solutions
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground slide-up">
                End-to-end platform development with integrated AI capabilities and long-term support
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={Code}
                title="Custom Development"
                description="Tailored SaaS & PaaS solutions built from scratch using modern technology stacks"
                className="fade-in"
                style={{ animationDelay: "0.1s" }}
              />
              <FeatureCard
                icon={Cpu}
                title="AI Integration"
                description="Advanced AI capabilities and machine learning models for intelligent automation"
                className="fade-in"
                style={{ animationDelay: "0.2s" }}
              />
              <FeatureCard
                icon={Database}
                title="Scalable Architecture"
                description="Cloud-native solutions designed for performance and growth"
                className="fade-in"
                style={{ animationDelay: "0.3s" }}
              />
              <FeatureCard
                icon={Shield}
                title="Ongoing Support"
                description="Comprehensive maintenance and optimization services"
                className="fade-in"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-secondary/30 py-24">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">60%</div>
                <p className="text-muted-foreground">Average Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">80%</div>
                <p className="text-muted-foreground">Process Automation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <p className="text-muted-foreground">Platform Deployments</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
                <p className="text-muted-foreground">Platform Uptime</p>
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
                Ready to Transform Your Operations?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground slide-up">
                Join industry leaders who are achieving operational excellence with our AI-powered platforms
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonGradient 
                  size="lg" 
                  className="hover-lift glow"
                  onClick={() => handleNavigation('/platform')}
                >
                  Start Free Trial
                </ButtonGradient>
                <ButtonGradient 
                  size="lg" 
                  variant="outline"
                  onClick={() => handleNavigation('/contact')}
                >
                  Schedule Demo
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
                <span>+84 938 737 714</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>8th Floor, Nexus Tower, District 1, Ton Duc Thang St, Ho Chi Minh City</span>
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
