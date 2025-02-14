
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Cloud, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Integrations = () => {
  const navigate = useNavigate();

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
                Integration Hub
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl mb-8 slide-up">
                Connect and streamline your business tools seamlessly
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                  <Cloud className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Seamless Integrations</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with your favorite tools and services through our easy-to-use integration platform.
                </p>
                <ButtonGradient onClick={() => navigate('/contact')}>
                  View Integrations <ArrowRight className="w-4 h-4 ml-2" />
                </ButtonGradient>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                <h3 className="text-2xl font-semibold mb-4">Available Integrations</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span>CRM Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span>Marketing Platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span>Analytics Tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Integrations;
