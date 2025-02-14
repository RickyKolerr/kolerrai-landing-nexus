
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useNavigate } from "react-router-dom";
import { BrainCircuit, Cloud, Shield, LineChart } from "lucide-react";

const Solutions = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const solutions = [
    {
      title: "AI & Machine Learning",
      description: "Enterprise-grade AI solutions for intelligent automation and decision-making",
      icon: BrainCircuit,
      path: "/platform/ai-ml",
      features: [
        "Custom AI model development",
        "Intelligent process automation",
        "Predictive analytics",
        "Natural language processing"
      ]
    },
    {
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud solutions for digital transformation",
      icon: Cloud,
      path: "/platform/cloud",
      features: [
        "Cloud-native architecture",
        "Microservices deployment",
        "Container orchestration",
        "Auto-scaling solutions"
      ]
    },
    {
      title: "Enterprise Security",
      description: "Advanced security protocols for mission-critical operations",
      icon: Shield,
      path: "/platform/security",
      features: [
        "Zero-trust architecture",
        "Data encryption",
        "Access management",
        "Compliance frameworks"
      ]
    },
    {
      title: "Analytics & Insights",
      description: "Data-driven insights powered by advanced analytics",
      icon: LineChart,
      path: "/platform/analytics",
      features: [
        "Real-time analytics",
        "Business intelligence",
        "Performance monitoring",
        "Custom dashboards"
      ]
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
                Enterprise Solutions
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl mb-8 slide-up max-w-3xl mx-auto">
                Comprehensive AI and cloud solutions designed to accelerate your digital transformation journey
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <ButtonGradient 
                  size="lg" 
                  className="hover-lift glow"
                  onClick={() => handleNavigation('/contact')}
                >
                  Schedule Demo
                </ButtonGradient>
                <ButtonGradient 
                  size="lg" 
                  variant="outline"
                  onClick={() => handleNavigation('/platform')}
                >
                  View Platform
                </ButtonGradient>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {solutions.map((solution) => (
                <div 
                  key={solution.title}
                  onClick={() => handleNavigation(solution.path)}
                  className="group relative overflow-hidden rounded-2xl border border-accent/10 bg-white/5 p-8 hover:border-accent/30 transition-all hover-lift cursor-pointer backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <solution.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Ready to accelerate your digital transformation?
              </p>
              <ButtonGradient 
                onClick={() => handleNavigation('/contact')}
              >
                Get Started
              </ButtonGradient>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
