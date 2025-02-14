import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { 
  Cpu, Shield, Zap, Cloud, LineChart, Code, 
  ArrowRight, Users, Book, Rocket, MessageSquare,
  Globe, Award, HeartHandshake, ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Platform = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const features = [
    {
      icon: Cpu,
      title: "Intelligent Process Automation",
      description: "Built-in AI capabilities that automate complex workflows and optimize business processes automatically."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified platform with advanced encryption and security measures."
    },
    {
      icon: Zap,
      title: "Smart Optimization",
      description: "AI-driven optimization that continuously improves your business processes and workflows."
    },
    {
      icon: Cloud,
      title: "Seamless Integration",
      description: "Easy integration with your existing business tools and systems through our platform."
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Real-time analytics and AI-powered insights to drive better business decisions."
    },
    {
      icon: Code,
      title: "Extensible Platform",
      description: "Customize and extend platform capabilities through our comprehensive API."
    }
  ];

  return (
    <div className="relative min-h-screen">
      <EnhancedNav />

      <div className="pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                Our Platform
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl mb-8 slide-up">
                A comprehensive SaaS/PaaS solution with integrated AI capabilities
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
                  onClick={() => handleNavigation('/contact')}
                >
                  View Documentation
                </ButtonGradient>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleNavigation(`/product/${feature.title.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Platform Capabilities</h2>
                <p className="text-muted-foreground">
                  Enterprise-grade infrastructure with integrated AI
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                  <h3 className="text-2xl font-semibold mb-4">Performance</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>High-availability platform (99.99% uptime)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>Real-time process optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>Global edge deployment</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                  <h3 className="text-2xl font-semibold mb-4">Security</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>SOC 2 Type II certified</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>Enterprise-grade encryption</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>Comprehensive compliance suite</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-24 text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Join leading businesses transforming their operations with our intelligent platform
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
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
                  onClick={() => handleNavigation('/contact')}
                >
                  Schedule Demo
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="mt-24">
        <div className="relative">
          <footer className="mt-32 border-t border-white/10">
            <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Platform</h3>
                <ul className="space-y-3">
                  {[
                    { label: "AI Automation", path: "/platform/automation" },
                    { label: "Campaign Management", path: "/platform/campaigns" },
                    { label: "Analytics Dashboard", path: "/platform/analytics" },
                    { label: "Integration Hub", path: "/platform/integrations" },
                    { label: "API Documentation", path: "/docs/api" }
                  ].map((item) => (
                    <li key={item.label}>
                      <button 
                        onClick={() => navigate(item.path)}
                        className="flex items-center text-white/70 hover:text-white transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Solutions</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Enterprise Suite", icon: Rocket, path: "/solutions/enterprise" },
                    { label: "Agency Tools", icon: Users, path: "/solutions/agency" },
                    { label: "Developer Resources", icon: Code, path: "/solutions/developers" },
                    { label: "Success Stories", icon: Award, path: "/case-studies" }
                  ].map((item) => (
                    <li key={item.label}>
                      <button 
                        onClick={() => navigate(item.path)}
                        className="flex items-center text-white/70 hover:text-white transition-colors"
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Resources</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Documentation", icon: Book, path: "/docs" },
                    { label: "Learning Center", icon: Globe, path: "/learn" },
                    { label: "Community", icon: MessageSquare, path: "/community" },
                    { label: "Partner Program", icon: HeartHandshake, path: "/partners" }
                  ].map((item) => (
                    <li key={item.label}>
                      <button 
                        onClick={() => navigate(item.path)}
                        className="flex items-center text-white/70 hover:text-white transition-colors"
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Get Started</h3>
                <div className="space-y-4">
                  <ButtonGradient 
                    onClick={() => navigate('/contact')}
                    className="w-full justify-between"
                  >
                    Schedule Demo
                    <ArrowRight className="w-4 h-4" />
                  </ButtonGradient>
                  <ButtonGradient 
                    variant="outline"
                    onClick={() => navigate('/pricing')}
                    className="w-full justify-between"
                  >
                    View Pricing
                    <ArrowRight className="w-4 h-4" />
                  </ButtonGradient>
                  <p className="text-sm text-white/70">
                    Experience the power of AI-driven automation and smart campaign management.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-6 border-t border-white/10">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm text-white/70">
                  © 2024 Kolerr Technologies. All rights reserved.
                </p>
                <div className="flex gap-6">
                  {[
                    { label: "Terms", path: "/terms" },
                    { label: "Privacy", path: "/privacy" },
                    { label: "Security", path: "/security" }
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Platform;
