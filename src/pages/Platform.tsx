
import { MainNav } from "@/components/main-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";

const Platform = () => {
  return (
    <div className="relative min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>

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
              <ButtonGradient size="lg" className="hover-lift glow">
                Start Free Trial
              </ButtonGradient>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                <h3 className="text-2xl font-semibold mb-4">Enterprise Scale</h3>
                <p className="text-muted-foreground">
                  Built to handle millions of operations per second with high reliability
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                <h3 className="text-2xl font-semibold mb-4">Advanced Security</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade security with encryption at rest and in transit
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Platform;
