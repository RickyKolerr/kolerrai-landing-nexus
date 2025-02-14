
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Check, Cpu, Code, Wrench, Cloud, Clock, Shield } from "lucide-react";
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

  const services = [
    {
      icon: Code,
      title: "Custom Platform Development",
      points: [
        "Tailored SaaS & PaaS solutions",
        "Modern tech stack implementation",
        "Scalable architecture design",
        "Custom feature development"
      ]
    },
    {
      icon: Cpu,
      title: "AI Integration",
      points: [
        "Advanced AI capabilities",
        "Process automation",
        "Machine learning models",
        "Intelligent workflows"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      points: [
        "Cloud-native architecture",
        "Multi-cloud deployment",
        "Performance optimization",
        "Auto-scaling solutions"
      ]
    }
  ];

  const support = [
    {
      icon: Clock,
      title: "Long-term Support",
      points: [
        "24/7 technical support",
        "Regular maintenance",
        "Performance monitoring",
        "System updates"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      points: [
        "Security best practices",
        "Compliance monitoring",
        "Regular security audits",
        "Data protection"
      ]
    },
    {
      icon: Wrench,
      title: "Continuous Optimization",
      points: [
        "Performance tuning",
        "Feature enhancements",
        "System upgrades",
        "Scalability improvements"
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
                Custom Platform Development & AI Integration
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up max-w-3xl mx-auto">
                We build tailored SaaS and PaaS solutions with integrated AI capabilities, 
                helping businesses modernize and scale through digital transformation
              </p>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Development Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div key={service.title} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Support & Maintenance</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {support.map((item) => (
                  <div key={item.title} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <ul className="space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-center mb-8">API Integration Pricing</h2>
              <p className="text-center text-muted-foreground mb-12">
                Flexible API pricing for businesses integrating our AI capabilities
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
                <p className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-accent mr-2" /> 
                  Flexible development and pricing models tailored to your needs
                </p>
                <p className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-accent mr-2" /> 
                  Comprehensive support and maintenance packages
                </p>
                <p className="flex items-center justify-center">
                  <Check className="h-5 w-5 text-accent mr-2" /> 
                  Long-term partnership for continuous growth and optimization
                </p>
              </div>

              <div className="flex justify-center">
                <ButtonGradient 
                  size="lg"
                  className="hover-lift glow"
                  onClick={() => navigate('/contact')}
                >
                  Schedule Consultation
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
