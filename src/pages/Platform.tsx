
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Cpu, Shield, Zap, Cloud, LineChart, Code, ArrowRight } from "lucide-react";
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
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background/80">
      <EnhancedNav />

      <main className="pt-16 pb-8 sm:pt-24 sm:pb-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-pink-500 to-orange-500 animate-gradient">
              Our Platform
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/70 sm:text-xl">
              A comprehensive SaaS/PaaS solution with integrated AI capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonGradient 
                size="lg" 
                className="hover:translate-y-[-2px] transition-transform duration-200"
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

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 hover:bg-white/[0.07] transition-colors duration-300"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'backwards'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-violet-400 group-hover:text-violet-300 transition-colors">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Platform Capabilities */}
          <div className="mt-24 space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Platform Capabilities</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Enterprise-grade infrastructure with integrated AI
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {["Performance", "Security"].map((section) => (
                <div 
                  key={section}
                  className="rounded-2xl bg-white/5 p-6 hover:bg-white/[0.07] transition-colors duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">{section}</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
                      <span className="text-white/70">
                        {section === "Performance" ? "High-availability platform (99.99% uptime)" : "SOC 2 Type II certified"}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
                      <span className="text-white/70">
                        {section === "Performance" ? "Real-time process optimization" : "Enterprise-grade encryption"}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
                      <span className="text-white/70">
                        {section === "Performance" ? "Global edge deployment" : "Comprehensive compliance suite"}
                      </span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-pink-500/10 p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join leading businesses transforming their operations with our intelligent platform
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonGradient 
                  size="lg" 
                  className="hover:translate-y-[-2px] transition-transform duration-200"
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
      </main>
    </div>
  );
};

export default Platform;
