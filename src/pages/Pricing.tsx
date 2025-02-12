
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
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
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up">
                Choose the plan that's right for your business
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Starter Plan */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                <p className="text-muted-foreground mb-4">For small teams</p>
                <div className="text-4xl font-bold mb-6">$99<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> 10,000 API calls</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Basic support</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> 5 team members</li>
                </ul>
                <ButtonGradient 
                  className="w-full hover-lift"
                  onClick={() => handleNavigation('/contact')}
                >
                  Get Started
                </ButtonGradient>
              </div>

              {/* Pro Plan */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-accent hover-lift relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                <p className="text-muted-foreground mb-4">For growing businesses</p>
                <div className="text-4xl font-bold mb-6">$299<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> 100,000 API calls</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Priority support</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> 20 team members</li>
                </ul>
                <ButtonGradient 
                  className="w-full hover-lift glow"
                  onClick={() => handleNavigation('/contact')}
                >
                  Get Started
                </ButtonGradient>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-4">For large organizations</p>
                <div className="text-4xl font-bold mb-6">Custom</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Unlimited API calls</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> 24/7 dedicated support</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Unlimited team members</li>
                </ul>
                <ButtonGradient 
                  className="w-full hover-lift"
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

export default Pricing;
