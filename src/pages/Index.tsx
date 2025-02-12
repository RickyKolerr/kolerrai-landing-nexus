
import { BrainCircuit, Rocket, Laptop, Shield } from "lucide-react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { FeatureCard } from "@/components/feature-card";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
              The Future of AI-powered PaaS & SaaS Starts Here!
            </h1>
            <p className="mb-10 text-lg text-muted-foreground sm:text-xl slide-up" style={{ animationDelay: "0.2s" }}>
              Advanced AI technology to optimize, automate, and scale businesses
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 slide-up" style={{ animationDelay: "0.4s" }}>
              <ButtonGradient size="lg" className="hover-lift">Start Free Trial</ButtonGradient>
              <ButtonGradient size="lg" variant="outline" className="hover-lift">
                Watch Demo
              </ButtonGradient>
            </div>
          </div>
        </div>
      </section>

      {/* Why KolerrAI Section */}
      <section className="relative overflow-hidden bg-secondary/30 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-gradient mb-4 text-3xl font-bold sm:text-4xl fade-in">
              Why KolerrAI?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground slide-up">
              Experience the power of next-generation AI technology
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={BrainCircuit}
              title="AI Integration"
              description="Powerful AI-driven solutions that adapt to your needs"
              className="fade-in"
              style={{ animationDelay: "0.1s" }}
            />
            <FeatureCard
              icon={Rocket}
              title="Performance"
              description="Fast, lightweight, and infinitely scalable platform"
              className="fade-in"
              style={{ animationDelay: "0.2s" }}
            />
            <FeatureCard
              icon={Laptop}
              title="PWA Ready"
              description="Seamless experience across all your devices"
              className="fade-in"
              style={{ animationDelay: "0.3s" }}
            />
            <FeatureCard
              icon={Shield}
              title="Enterprise Security"
              description="Bank-grade protection for your sensitive data"
              className="fade-in"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-gradient mb-4 text-3xl font-bold sm:text-4xl fade-in">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground slide-up" style={{ animationDelay: "0.2s" }}>
              Start your 14-day free trial today. No credit card required.
            </p>
            <ButtonGradient size="lg" className="hover-lift glow slide-up" style={{ animationDelay: "0.4s" }}>
              Try for Free - 14 Days
            </ButtonGradient>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
