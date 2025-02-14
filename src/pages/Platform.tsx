
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Cpu, Shield, Zap, Cloud, LineChart, Code } from "lucide-react";
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
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleNavigation(`/product/${feature.title.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  <div className="relative h-full backdrop-blur-xl rounded-2xl p-8 bg-black/40 border border-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">Platform Capabilities</h2>
                <p className="text-white/70">
                  Enterprise-grade infrastructure with integrated AI
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {["Performance", "Security"].map((section, index) => (
                  <div key={section} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                    <div className="relative backdrop-blur-xl rounded-2xl p-8 bg-black/40 border border-white/10 hover:border-white/20 transition-all h-full">
                      <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">{section}</h3>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                          <span className="text-white/70">{section === "Performance" ? "High-availability platform (99.99% uptime)" : "SOC 2 Type II certified"}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                          <span className="text-white/70">{section === "Performance" ? "Real-time process optimization" : "Enterprise-grade encryption"}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                          <span className="text-white/70">{section === "Performance" ? "Global edge deployment" : "Comprehensive compliance suite"}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 text-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                <div className="relative backdrop-blur-xl rounded-2xl p-8 bg-black/40 border border-white/10 hover:border-white/20 transition-all">
                  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">Ready to Get Started?</h2>
                  <p className="text-white/70 mb-8">
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Platform;
