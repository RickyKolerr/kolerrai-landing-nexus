
import { MainNav } from "@/components/main-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";

const Solutions = () => {
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
                AI Solutions
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl mb-8 slide-up">
                Custom AI solutions tailored to your business needs
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <h3 className="text-2xl font-semibold mb-4">Healthcare AI</h3>
                <p className="text-muted-foreground">
                  AI-powered diagnostics and patient care optimization
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <h3 className="text-2xl font-semibold mb-4">Finance AI</h3>
                <p className="text-muted-foreground">
                  Intelligent financial forecasting and risk assessment
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <h3 className="text-2xl font-semibold mb-4">Retail AI</h3>
                <p className="text-muted-foreground">
                  Smart inventory and customer behavior analysis
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
