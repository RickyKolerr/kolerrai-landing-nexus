
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { FeatureCard } from "@/components/feature-card";
import { 
  Cpu, Shield, Zap, Cloud, LineChart, Code, 
  ArrowRight, Book, Rocket, MessageSquare,
  Globe, Award, HeartHandshake, ChevronRight,
  Lock // Add Lock icon import
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Platform = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Cpu,
      title: "AI Automation",
      description: "Built-in AI capabilities that automate complex workflows",
      path: "/platform/automation"
    },
    {
      icon: LineChart,
      title: "Campaign Management",
      description: "Smart campaign optimization and audience targeting",
      path: "/platform/campaigns"
    },
    {
      icon: Cloud,
      title: "Analytics Dashboard",
      description: "Real-time insights and performance tracking",
      path: "/platform/analytics"
    },
    {
      icon: Code,
      title: "Integration Hub",
      description: "Connect with your favorite tools seamlessly",
      path: "/platform/integrations"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with advanced encryption",
      path: "/security"
    },
    {
      icon: Zap,
      title: "Smart Optimization",
      description: "AI-driven optimization for maximum efficiency",
      path: "/platform/automation"
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
                Platform Features
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8 slide-up">
                A comprehensive suite of AI-powered tools to transform your business
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonGradient 
                  size="lg" 
                  className="hover-lift glow"
                  onClick={() => navigate('/contact')}
                >
                  Schedule Demo
                </ButtonGradient>
                <ButtonGradient 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/pricing')}
                >
                  View Pricing
                </ButtonGradient>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate(feature.path)}
                />
              ))}
            </div>

            <div className="mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Enterprise Features</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Built for scale with enterprise-grade security and performance
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                  <h3 className="text-2xl font-semibold mb-4">Security & Compliance</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      <span>SOC 2 Type II Certified</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-accent" />
                      <span>Enterprise-grade Encryption</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      <span>GDPR Compliant</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                  <h3 className="text-2xl font-semibold mb-4">Global Infrastructure</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-accent" />
                      <span>Global Edge Network</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Cloud className="w-5 h-5 text-accent" />
                      <span>Multi-region Deployment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      <span>Automatic Scaling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 bg-secondary/30">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-gradient mb-4 text-3xl font-bold sm:text-4xl fade-in">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join leading businesses transforming their operations with our platform
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonGradient 
                  size="lg" 
                  className="hover-lift glow" 
                  onClick={() => navigate('/contact')}
                >
                  Schedule Demo
                </ButtonGradient>
                <ButtonGradient 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/pricing')}
                >
                  View Pricing
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Platform;
