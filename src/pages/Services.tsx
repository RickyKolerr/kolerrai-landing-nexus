
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems",
      features: [
        "Custom AI model development",
        "System integration",
        "API development",
        "Performance optimization"
      ]
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows with AI",
      features: [
        "Workflow automation",
        "Document processing",
        "Data extraction",
        "Task automation"
      ]
    },
    {
      title: "AI Platform Development",
      description: "Build custom AI platforms tailored to your needs",
      features: [
        "Custom platform development",
        "Scalable architecture",
        "Security implementation",
        "Cloud deployment"
      ]
    },
    {
      title: "AI Consulting",
      description: "Expert guidance on AI strategy and implementation",
      features: [
        "AI strategy development",
        "Technical consultation",
        "Implementation roadmap",
        "ROI assessment"
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
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up max-w-3xl mx-auto">
                Comprehensive AI solutions to transform your business and drive innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div 
                  key={service.title}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-8">
                Ready to transform your business with AI?
              </p>
              <ButtonGradient 
                size="lg"
                className="hover-lift glow"
                onClick={() => navigate('/contact')}
              >
                Get Started
              </ButtonGradient>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
