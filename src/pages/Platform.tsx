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
      title: "AI Core Engine",
      description: "Powerful machine learning algorithms that adapt and learn from your data in real-time."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security measures to protect your sensitive data."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process and analyze data instantly with our high-performance infrastructure."
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Built for modern cloud infrastructure with seamless scalability."
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Deep insights and predictive analytics to drive better business decisions."
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Easy integration with your existing systems through our comprehensive API."
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
                A comprehensive AI platform built for enterprise scale
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

            {/* Platform Features */}
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

            {/* Technical Specs */}
            <div className="mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
                <p className="text-muted-foreground">
                  Built with cutting-edge technology for maximum performance
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                  <h3 className="text-2xl font-semibold mb-4">Performance</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>99.99% uptime guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>Sub-millisecond response times</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>Global CDN distribution</span>
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
                      <span>End-to-end encryption</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span>GDPR compliant</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-24 text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of businesses transforming their operations with KolerrAI
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
    </div>
  );
};

export default Platform;
