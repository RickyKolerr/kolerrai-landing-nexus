
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Check, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const pricingCategories = [
    {
      title: "AI Integration & Automation",
      description: "Enhance your existing systems with AI capabilities",
      packages: [
        {
          name: "Basic AI Integration",
          price: "Starting from $10,000",
          timeframe: "4-6 weeks",
          description: "Integration of basic AI capabilities into existing systems to automate workflows and processes.",
          features: [
            "Workflow automation",
            "Basic AI integration",
            "System optimization",
            "Initial training"
          ]
        },
        {
          name: "Advanced AI Automation",
          price: "Starting from $25,000",
          timeframe: "8-12 weeks",
          description: "Development and integration of advanced AI solutions such as chatbots, AI-driven analytics, and workflow automation.",
          features: [
            "Advanced AI capabilities",
            "Custom chatbot development",
            "AI-driven analytics",
            "Complex workflow automation"
          ]
        }
      ]
    },
    {
      title: "Custom AI Platform Development",
      description: "Build your own AI-powered platform from scratch",
      packages: [
        {
          name: "MVP AI-Powered Platform",
          price: "Starting from $50,000",
          timeframe: "3-6 months",
          description: "Development of an MVP SaaS/PaaS AI-driven platform from scratch, including backend AI, frontend UI/UX, and data integration.",
          features: [
            "Custom AI backend",
            "Modern UI/UX design",
            "Data integration",
            "Basic scalability"
          ]
        },
        {
          name: "Enterprise AI Platform",
          price: "Starting from $100,000",
          timeframe: "6-12 months",
          description: "Full-scale AI platform development with enterprise-grade infrastructure, security, and long-term scalability.",
          features: [
            "Enterprise infrastructure",
            "Advanced security",
            "High scalability",
            "Full customization"
          ]
        }
      ]
    },
    {
      title: "AI-Powered SaaS & PaaS Solutions",
      description: "Transform your business with ready-to-use AI solutions",
      packages: [
        {
          name: "SaaS AI Prototype",
          price: "Starting from $75,000",
          timeframe: "4-8 months",
          description: "Development of a prototype AI-driven SaaS platform with subscription model, optimized for cloud computing and multi-tenant architecture.",
          features: [
            "Multi-tenant architecture",
            "Subscription management",
            "Cloud optimization",
            "Basic AI features"
          ]
        },
        {
          name: "Full-Scale PaaS Development",
          price: "Starting from $150,000",
          timeframe: "6-12 months",
          description: "Development of a full-scale AI-powered PaaS to allow businesses to deploy AI services quickly, with scalable infrastructure and API marketplace.",
          features: [
            "Complete PaaS solution",
            "API marketplace",
            "Advanced AI services",
            "Enterprise scalability"
          ]
        }
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
                Investment in Your AI Future
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up max-w-3xl mx-auto">
                Transform your business with our AI solutions. All packages can be customized to your specific requirements.
              </p>
            </div>

            {pricingCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-4">{category.title}</h2>
                <p className="text-center text-muted-foreground mb-12">{category.description}</p>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.packages.map((pkg, index) => (
                    <div key={pkg.name} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all">
                      <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                      <p className="text-2xl font-bold text-accent mb-2">{pkg.price}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.timeframe}</span>
                      </div>
                      <p className="text-muted-foreground mb-6">{pkg.description}</p>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-accent mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <ButtonGradient 
                        className="w-full hover-lift"
                        onClick={() => navigate('/contact')}
                      >
                        Get Started
                      </ButtonGradient>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center">
              <p className="text-muted-foreground mb-8">
                Need a custom solution? Contact us for a tailored package that meets your specific requirements.
              </p>
              <ButtonGradient 
                size="lg"
                className="hover-lift glow"
                onClick={() => navigate('/contact')}
              >
                Schedule Consultation
              </ButtonGradient>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
