
import { BrainCircuit, Code, Shield, LineChart, Database } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { useNavigate } from "react-router-dom";

export const ServicesSection = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      icon: BrainCircuit,
      title: "AI Integration & Automation",
      description: "Seamlessly integrate AI-powered automation into your platform, optimizing workflows and enhancing decision-making"
    },
    {
      icon: Code,
      title: "Custom AI Platform Development",
      description: "Build tailor-made AI-driven platforms that scale with your business, from concept to full deployment"
    },
    {
      icon: Shield,
      title: "Secure & Scalable Cloud Solutions",
      description: "Enterprise-grade cloud infrastructure designed for high performance, security, and global scalability"
    },
    {
      icon: LineChart,
      title: "Data Intelligence & Analytics",
      description: "Leverage AI and Big Data to extract valuable insights, optimize operations, and drive data-driven decisions"
    },
    {
      icon: Database,
      title: "AI-Powered SaaS & PaaS",
      description: "Transform your business with custom SaaS/PaaS solutions, fully optimized for AI automation and cloud scalability"
    }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing businesses with AI-driven automation, intelligent workflows, and scalable cloud-native solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => navigate('/services')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
