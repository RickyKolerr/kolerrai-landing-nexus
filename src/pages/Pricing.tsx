
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Pricing = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
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
                Flexible Pricing for Every Need
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up">
                Choose between our SaaS plans or Pay-as-you-go API pricing
              </p>
            </div>

            {/* SaaS Plans Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-8">SaaS Subscription Plans</h2>
              <p className="text-center text-muted-foreground mb-12">
                For direct AI platform users with comprehensive feature access
              </p>
              <div className="grid gap-8 md:grid-cols-4">
                {/* Starter Plan */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                  <div className="text-3xl font-bold mb-2">$29<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                  <p className="text-muted-foreground mb-2">$290/year (Save 2 months)</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> 20,000 API calls</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Basic AI automation</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Standard support</li>
                  </ul>
                  <ButtonGradient 
                    className="w-full hover-lift"
                    onClick={() => handleNavigation('/contact')}
                  >
                    Start Free Trial
                  </ButtonGradient>
                </div>

                {/* Growth Plan */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-accent hover-lift relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Growth</h3>
                  <div className="text-3xl font-bold mb-2">$99<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                  <p className="text-muted-foreground mb-2">$990/year (Save 2 months)</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> 100,000 API calls</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Advanced AI automation</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Priority support</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Limited customization</li>
                  </ul>
                  <ButtonGradient 
                    className="w-full hover-lift glow"
                    onClick={() => handleNavigation('/contact')}
                  >
                    Start 14-Day Trial
                  </ButtonGradient>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold mb-2">$249<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                  <p className="text-muted-foreground mb-2">$2,490/year (Save 2 months)</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> 500,000 API calls</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Full AI automation</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> 24/7 support</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Full customization</li>
                  </ul>
                  <ButtonGradient 
                    className="w-full hover-lift"
                    onClick={() => handleNavigation('/contact')}
                  >
                    Start Free Trial
                  </ButtonGradient>
                </div>

                {/* Custom Plan */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <h3 className="text-2xl font-semibold mb-2">Custom</h3>
                  <div className="text-3xl font-bold mb-2">Custom</div>
                  <p className="text-muted-foreground mb-2">Tailored pricing</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Unlimited API calls</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Custom AI solutions</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Dedicated support</li>
                    <li className="flex items-center"><Check className="h-5 w-5 text-accent mr-2" /> Full customization</li>
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

            {/* PaaS API Pricing Section */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-center mb-8">PaaS API Pricing</h2>
              <p className="text-center text-muted-foreground mb-12">
                Pay-per-use model for developers and businesses integrating KolerrAI APIs
              </p>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 mb-8">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>API Call Volume</TableHead>
                      <TableHead>Price per 1,000 Calls</TableHead>
                      <TableHead>Latency & Performance Tier</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>0 - 50,000 calls</TableCell>
                      <TableCell>$0.005 per call</TableCell>
                      <TableCell>Standard</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>50,001 - 200,000 calls</TableCell>
                      <TableCell>$0.004 per call</TableCell>
                      <TableCell>High Performance</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>200,001 - 1,000,000 calls</TableCell>
                      <TableCell>$0.002 per call</TableCell>
                      <TableCell>Optimized for Scale</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1,000,001+ calls</TableCell>
                      <TableCell>Custom Pricing</TableCell>
                      <TableCell>Enterprise SLA</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="text-center space-y-4 mb-12">
                <p className="flex items-center justify-center"><Check className="h-5 w-5 text-accent mr-2" /> No Subscription Required</p>
                <p className="flex items-center justify-center"><Check className="h-5 w-5 text-accent mr-2" /> Flexible Scaling for AI-Powered Solutions</p>
                <p className="flex items-center justify-center"><Check className="h-5 w-5 text-accent mr-2" /> Dedicated Enterprise Support Available</p>
              </div>

              <div className="flex justify-center">
                <ButtonGradient 
                  size="lg"
                  className="hover-lift glow"
                  onClick={() => handleNavigation('/contact')}
                >
                  Get API Access
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
