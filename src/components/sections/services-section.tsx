
import { BrainCircuit, Code, Shield, LineChart, Database, Workflow, Cloud, Zap } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { useNavigate } from "react-router-dom";
import { ButtonGradient } from "@/components/ui/button-gradient";

export const ServicesSection = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      icon: BrainCircuit,
      title: "Enterprise AI Integration",
      description: "Transform your business operations with custom AI solutions that automate processes and enhance decision-making capabilities"
    },
    {
      icon: Workflow,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies powered by AI, helping businesses evolve and stay competitive in the digital age"
    },
    {
      icon: Shield,
      title: "Secure Cloud Infrastructure",
      description: "Enterprise-grade cloud solutions with advanced security protocols, ensuring scalability and protection for your mission-critical operations"
    },
    {
      icon: LineChart,
      title: "AI-Driven Analytics",
      description: "Turn data into actionable insights with our advanced analytics solutions, powered by machine learning and predictive modeling"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Solutions",
      description: "Modern cloud-native applications built for scale, leveraging microservices architecture and containerization for maximum efficiency"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation solutions that streamline operations, reduce costs, and improve efficiency across your organization"
    }
  ];

  return (
    <section className="py-24 bg-secondary/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Enterprise AI Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Accelerate your digital transformation with our comprehensive suite of AI-powered solutions designed for enterprise success
          </p>
          <ButtonGradient 
            onClick={() => navigate('/contact')}
            size="lg"
            className="hover-lift glow mb-12"
          >
            Schedule a Consultation
          </ButtonGradient>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate('/services')}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to transform your business with AI-powered solutions?
          </p>
          <div className="flex gap-4 justify-center">
            <ButtonGradient 
              variant="outline"
              onClick={() => navigate('/platform')}
            >
              Explore Platform
            </ButtonGradient>
            <ButtonGradient 
              onClick={() => navigate('/pricing')}
            >
              View Pricing
            </ButtonGradient>
          </div>
        </div>
      </div>
    </section>
  );
};
