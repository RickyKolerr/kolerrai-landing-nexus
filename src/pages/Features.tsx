
import { EnhancedNav } from "@/components/enhanced-nav";
import { FeatureCard } from "@/components/feature-card";
import { BrainCircuit, Bot, Cpu, Database, Code, LineChart, Cloud, Lock } from "lucide-react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Features = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNavigation = (path: string) => {
    toast({
      title: "Navigating...",
      description: "Taking you to explore more",
    });
    navigate(path);
  };

  return (
    <div className="relative min-h-screen">
      <EnhancedNav />
      
      <div className="pt-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                AI-Powered Features
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground slide-up">
                Discover how our AI solutions transform your business operations
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={BrainCircuit}
                title="Smart Automation"
                description="AI-driven workflows that automate complex business processes"
                className="fade-in cursor-pointer"
                style={{ animationDelay: "0.1s" }}
                onClick={() => handleNavigation('/platform')}
              />
              <FeatureCard
                icon={Bot}
                title="AI Assistant"
                description="24/7 intelligent support for your customers and team"
                className="fade-in cursor-pointer"
                style={{ animationDelay: "0.2s" }}
                onClick={() => handleNavigation('/platform')}
              />
              <FeatureCard
                icon={Cpu}
                title="Machine Learning"
                description="Advanced algorithms that learn and adapt to your needs"
                className="fade-in cursor-pointer"
                style={{ animationDelay: "0.3s" }}
                onClick={() => handleNavigation('/platform')}
              />
              <FeatureCard
                icon={Database}
                title="Data Processing"
                description="Real-time processing of large-scale datasets"
                className="fade-in cursor-pointer"
                style={{ animationDelay: "0.4s" }}
                onClick={() => handleNavigation('/platform')}
              />
              <FeatureCard
                icon={Code}
                title="API Integration"
                description="Seamless connection with your existing systems"
                className="fade-in cursor-pointer"
                style={{ animationDelay: "0.5s" }}
                onClick={() => handleNavigation('/platform')}
              />
              <FeatureCard
                icon={LineChart}
                title="Analytics"
                description="Deep insights and predictive analysis"
                className="fade-in cursor-pointer"
                style={{ animationDelay: "0.6s" }}
                onClick={() => handleNavigation('/platform')}
              />
              <FeatureCard
                icon={Cloud}
                title="Cloud Native"
                description="Built for modern cloud infrastructure"
                className="fade-in cursor-pointer"
                style={{ animationDelay: "0.7s" }}
                onClick={() => handleNavigation('/platform')}
              />
              <FeatureCard
                icon={Lock}
                title="Security"
                description="Enterprise-grade security and compliance"
                className="fade-in cursor-pointer"
                style={{ animationDelay: "0.8s" }}
                onClick={() => handleNavigation('/platform')}
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 bg-secondary/30">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-gradient mb-4 text-3xl font-bold sm:text-4xl fade-in">
                Ready to Transform Your Business?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground slide-up">
                Start your 14-day free trial and experience the power of AI
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonGradient 
                  size="lg" 
                  className="hover-lift glow slide-up" 
                  onClick={() => handleNavigation('/pricing')}
                >
                  Start Free Trial
                </ButtonGradient>
                <ButtonGradient 
                  size="lg" 
                  variant="outline" 
                  className="hover-lift slide-up"
                  onClick={() => handleNavigation('/contact')}
                >
                  Contact Sales
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
