
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
                Simple Pay-as-you-go Pricing
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up">
                Transparent API pricing for developers and businesses
              </p>
            </div>

            <div>
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
                  onClick={() => navigate('/contact')}
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
